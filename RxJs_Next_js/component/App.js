import React, {useEffect, useState} from 'react'
import {BehaviorSubject, combineLatest, timer}from'rxjs'
import axios from 'axios'
import { flatMap, debounce, filter, map, retry } from 'rxjs/operators'


// const withObservableStream = (observable, triggers, initialState)=>Component=>{
//     return class extends React.Component{
//         constructor(props){
//             super(props);
//             this.state = {
//                 ...initialState
//             }
//         }
//         componentDidMount(){
//             this.subscription = observable.subscribe(newState=>
//                 this.setState({...newState}),
//                 );
//         }
//         componentWillUnmount(){
//             this.subscription.unsubscribe();
//         }
//         render(){
//             console.log(this.props)
//             return(
//                 <Component {...this.state} {...triggers}/>
//             )
//         }
//     }
// }

const withObservableStream = (observable, triggers, initialState)=>Component=> {
    return ()=>{
        const [state, setState] = useState(initialState)
        let subscription;
        console.log(state)
        useEffect(()=>{
            subscription = observable.subscribe(newState=> setState({...newState}))
            
        },[])
        return(
            <Component {...state} {...triggers} {...observable}/>
        )
    }
}

const SUBJECT = {
    POPULARITY: 'search',
    DATE: 'search_by_date',
}
const App = ({query ='',subject,stories = [],onChangeQuery, onSelectSubject})=>{
    const onChange = (event)=>{ 
        onChangeQuery(event.target.value)
    }
    useEffect(()=>{
        
    },[])
    return(
        <div>
            
            <h1>React 럽럽럽 Rxjs</h1>
            <input type = "text"
                value = {query}
                onChange = {onChange}/>
            <div>
                {Object.values(SUBJECT).map(value =>(
                    <button key = {value}
                        onClick = {()=> onSelectSubject(value)}
                        type = "button">{value}</button>
                ))}
            </div>
            <ul>
                {stories.map(story=>(
                    <li key = {story.objectID}>
                        <a href = {story.url || story.stoty_url}>
                            {story.title || story.story_title}
                        </a>
                    </li>
                ))}
            </ul>
            <p>{`쿼리에 담긴 값은 ${query} 서치는:  ${subject}`}</p>
        </div>
    )
}
const query$ = new BehaviorSubject('react'); //observable 생성
const subject$ = new BehaviorSubject(SUBJECT.POPULARITY);
const queryForFetch$ = query$.pipe(
    debounce(()=> timer(1000)),
    filter(query => query!== ''),
)
const fetch$ = combineLatest(subject$, queryForFetch$).pipe(
    flatMap(([subject, query])=>
        axios.get(`http://hn.algolia.com/api/v1/${subject}?query=${query}`)
    ),
    map(result => result.data.hits),
    retry(3)
)
export default withObservableStream(
    combineLatest(subject$, query$, fetch$,
        (subject, query, stories) => ({
        subject,
        query,
        stories
    })),
   { 
    onChangeQuery : value => query$.next(value), //2번째 인자 대응 함수들
    onSelectSubject : subject => subject$.next(subject)
    },
    {
        query : 'react',
        subject : SUBJECT.POPULARITY,
        stories : []
    }
)(App);