import produce from 'immer'
import { LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE } from '../action';

const initialProps = {
    name : '',
    position : '',
    cookie : '',

}

const user = (state = initialProps, action)=>{
    return produce(state, draft =>{
        switch(action.type){
            case LOGIN_USER_REQUEST :
                draft.name = ''
                draft.cookie = ''
                draft.position = ''
                break;
            case LOGIN_USER_SUCCESS :
                draft.name = action.name;
                draft.cookie = action.cookie;
                draft.position = action.position;
                break;
            case LOGIN_USER_FAILURE :
                draft.name = '';
                draft.cookie = '';
                draft.position = '';
                break;
            default :
                break;
        }
    })
}

export default user