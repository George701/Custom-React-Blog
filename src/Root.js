import React, {Component} from 'react';
import App from "./Components/App";
import store from './store';
import {Provider} from 'react-redux';

function Root(props){
    return(
        <Provider store={store}>
            <App {...props}/>
        </Provider>
    )
}

export default Root;