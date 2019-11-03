import {all, delay,fork, takeEvery,takeLatest, call,put,take,throttle} from 'redux-saga/effects'
import { GET_POSTS_REQUEST, GET_POSTS_FAILURE, GET_POSTS_SUCCESS } from '../action'
import axios from 'axios'
const getPostAPI = (data)=>{
    return axios.get(`http://hn.algolia.com/api/v1/${data.subject}?query=${data.query}`)
}
function * getPost(action){
    try{
        const result = yield call(getPostAPI, action)
        yield put({
            type : GET_POSTS_SUCCESS,
            data : result.data.hits
        })
    }catch(e){
        yield put({
            type : GET_POSTS_FAILURE
        })
    }
}
function * watchGetPost(){
    yield throttle(1000, GET_POSTS_REQUEST,getPost);
}
export default function* postSaga(){
    yield all([
        fork(watchGetPost)
    ])
}