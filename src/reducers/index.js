// hier is for rootReducer
import { combineReducers } from 'redux'
import authReducer from './auth'
import flashMessageRedeucer from './flashMessageReducer'

const rootReducer = combineReducers({
  authReducer,
  flashMessageRedeucer,
})

export default rootReducer
