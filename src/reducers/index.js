import {combineReducers} from 'redux'
import {reducer as reduxForm} from 'redux-form'
import ProductReducers from '../reducers/ProductReducers'
import PackReducers from '../reducers/PackReducers'

const rootReducers = combineReducers({
    //action จะส่ง type มาที่ combindReducers และเช็คว่าตรงกับ Reducers ไหน
    products:ProductReducers,
    packs:PackReducers,
    form:reduxForm
})
export default rootReducers