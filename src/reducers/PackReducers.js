import {PACK_FETCH} from '../action/type'

export default function(state=[],action){
    switch(action.type){
        case PACK_FETCH:
            return action.playload; //state is update
        default:
            return state;
    }
}