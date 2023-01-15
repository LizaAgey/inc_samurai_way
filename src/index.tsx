import React from 'react';
import './index.css';
import {store} from './redux/redux-store';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import {Provider} from 'react-redux';

//export let rerenderEntireTree = () => {
ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>, document.getElementById('root')
);
//}

//rerenderEntireTree()
//store.subscribe(rerenderEntireTree) -- no need in React-Redux due to usage of connect()

