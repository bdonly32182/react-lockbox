import axios from 'axios'
import {PACK_FETCH} from './type'

export const packFetch =()=>{

    return dispatch =>{
        axios.get(process.env.REACT_APP_API_URL+'/orders')
        .then(res=>{
            dispatch({type:PACK_FETCH,playload:res.data})
        })

    }
}

export const packDelete =id =>{
    
    return dispatch =>{
        axios.delete(process.env.REACT_APP_API_URL+'/orders/'+id)
            .then(res=>{
                axios.get(process.env.REACT_APP_API_URL+'/orders')
                    .then(res=>{
                        dispatch({type:PACK_FETCH , playload:res.data})
                    })
            })
    }

}