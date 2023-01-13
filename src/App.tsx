import React from 'react';
import './App.scss';
import 'macro-css'
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import {Route} from 'react-router-dom';
import {ReduxStoreType} from './redux/redux-store';
import Sidebar from './components/Sidebar/Sidebar';
import DialoguesContainer from './components/Dialogues/DialoguesContainer';

type AppPropsType = {
    store: ReduxStoreType
}

const App = (props: AppPropsType) => {
    const state = props.store.getState()

    return (
        <div className={'appWrapper'}>
            <Header/>
            <Route path="/profile" render={() =>
                <Profile store={props.store}/>}/>
            <Route path="/messages" render={() =>
                <DialoguesContainer store={props.store}/>}/>
            <Sidebar state={state.sidebarPage}/>
        </div>
    );
}

export default App;



