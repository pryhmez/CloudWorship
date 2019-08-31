import { combineReducers } from 'redux';
// import CounterReducer from './counterReducer';
import UserReducer from './userReducer';


export default combineReducers ({
    // counter: CounterReducer,
    user: UserReducer
});