import counterReducer from './reducers/counter'
import storeReducer from './reducers/store'

//Redux 
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    store: storeReducer,
    counter: counterReducer
})


export default rootReducer;