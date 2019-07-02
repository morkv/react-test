import { combineReducers } from 'redux';
import itemReducer from './itemReducer';

export default combineReducers({
    case: itemReducer,
    // auth: authReducer
});