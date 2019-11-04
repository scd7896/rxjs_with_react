import React,{useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { GET_POSTS_REQUEST } from '../action';
import Router  from 'next/router';
const SUBJECT = {
    POPULARITY: 'search',
    DATE: 'search_by_date',
}
const App2 = ()=>{
    const dispatch = useDispatch();
    const [query, setQuery] = useState("react")
    const [subject, setSubject] = useState(SUBJECT.POPULARITY)
    const {stories} = useSelector(state => state.post)
    const onSelectSubject = (subjectTargetValue)=>{
        return ()=>{
            dispatch({
                type : GET_POSTS_REQUEST,
                query : query,
                subject : subjectTargetValue
            })
            setSubject(subjectTargetValue)
        }
        
    }
    const onChange = (event)=>{
        dispatch({
            type : GET_POSTS_REQUEST,
            query : event.target.value,
            subject : subject
        })
        setQuery(event.target.value)
    }
    useEffect(()=>{
        dispatch({
            type : GET_POSTS_REQUEST,
            query : query,
            subject : subject
        })
    },[])
    return(
        <div>
            <div>
                <h1>React 럽럽럽 redux_saga</h1>
                <input type = "text"
                    value = {query}
                    onChange = {onChange}/>
                <div>
                    {Object.values(SUBJECT).map(value =>(
                        <button key = {value}
                            onClick = {onSelectSubject(value)}
                            type = "button">{value}</button>
                    ))}
                </div>
                <ul>
                    {stories.length !== 0? stories.map(story=>(
                        <li key = {story.objectID}>
                            <a href = {story.url || story.stoty_url}>
                                {story.title || story.story_title}
                            </a>
                        </li>
                    )) : ''}
                </ul>
                <p>{`쿼리에 담긴 값은 ${query} 서치는:  ${subject}`}</p>
            </div>
            <button onClick = {()=> Router.back()}>뒤로가기</button>
        </div>
    )
}

export default App2;