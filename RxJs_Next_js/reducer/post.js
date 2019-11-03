import produce from 'immer'
import { GET_POSTS_REQUEST, GET_POSTS_SUCCESS, GET_POSTS_FAILURE } from '../action'

const initialState = {
    stories : []
}

const post = (state = initialState, action)=>{
    return produce(state, (draft)=>{
        switch(action.type){
            case GET_POSTS_REQUEST :
                draft.stories = [];
                break;
            case GET_POSTS_SUCCESS :
                draft.stories = action.data;
                break;
            case GET_POSTS_FAILURE :
                draft.stories = [];
                break;
            default :
                break;
        }        
    })
}

export default post