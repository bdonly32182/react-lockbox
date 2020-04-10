import {PRODUCTS_FETCH,PRODUCT_FETCH,PRODUCT_CREATE,PRODUCT_UPDATE} from '../action/type'

export default function(state=[],action){
    switch(action.type){
        case PRODUCTS_FETCH:
        case PRODUCT_FETCH:
            return action.playload; //state is update
        case PRODUCT_CREATE:
            return {save:true,msg:"Save successfull"};
        case PRODUCT_UPDATE:
            //send product old is ...state
            return {...state, save:true,msg:"Save Successfull"}
        default:
            return state;
    }
}