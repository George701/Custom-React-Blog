import {combineReducers} from 'redux';
import counterReducer from './counter';
import posts from './posts';
import filters from './filters';

export default combineReducers({
    count: counterReducer,
    posts, filters
});