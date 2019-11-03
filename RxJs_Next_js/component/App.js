import React from 'react'
import {BehaviorSubject}from'rxjs'

const withObservableStream = (observable, triggers, initialState)=>Component=>{
    return class extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                ...initialState
            }
        }
        componentDidMount(){
            this.subscription = observable.subscribe(newState=>
                this.setState({...newState}),
                );
        }
        componentWillUnmount(){
            this.subscription.unsubscribe();
        }
        render(){
            console.log(this.props)
            return(
                <Component {...this.props} {...this.state} {...triggers}/>
            )
        }
    }
}
const SUBJECT = {
    POPULARITY : "키워드검색",
    DATE : "날짜검색"
}
const App = ({query ='',subject,onChangeQuery, onSelectSubject})=>{
    return(
        <div>
            
            <h1>React 럽럽럽 Rxjs</h1>
            <input type = "text"
                value = {query}
                onChange = {event => onChangeQuery(event.target.value)}/>
            <div>
                {Object.values(SUBJECT).map(value =>(
                    <button key = {value}
                        onClick = {()=> onSelectSubject(value)}
                        type = "button">{value}</button>
                ))}
            </div>
            
            <p>{`쿼리에 담긴 값은 ${query}`}</p>
        </div>
    )
}
const query$ = new BehaviorSubject({query:'react'});

export default withObservableStream(
    query$,{
    onChangeQuery : value => query$.next({query:value})
},{
    query : '라라라라',
})
(App);