import {combineReducers} from 'redux';
import counterReducer from './counter';
import posts from './posts';

export default combineReducers({
    count: counterReducer,
    posts
});