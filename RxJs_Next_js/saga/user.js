import {all, delay,fork, takeEvery,takeLatest, call,put,take,throttle} from 'redux-saga/effects'
import { LOGIN_USER_REQUEST, LOGIN_USER_FAILURE, LOGIN_USER_SUCCESS } from '../action'
import axios from 'axios'
const userLoginApi= async(action)=>{
    //const res = await axios("로그인 api", {id : action.id, password : action.password})
    const res = {
        data : {
            cookie : 'abcdefg',
            name : "대단한 사람",
            position : "운영자... 등등"
        }
    }
    document.cookie = `thisusertoken=${res.data.cookie}`
    return res.data
}
function * userLogin(action){
    try{
        const result = yield call(userLoginApi, action)
        yield put({
            type : LOGIN_USER_SUCCESS,
            cookie : result.cookie,
            name : result.name,
            position : result.position
        })
    }catch(err){
        yield put({
            tpye : LOGIN_USER_FAILURE,
            error : err
        })
    }
}

function * watchUserLogin(){
        yield throttle(3000,LOGIN_USER_REQUEST,userLogin )
}
export default function* userSaga(){
    yield all([
        fork(watchUserLogin)

    ])
}