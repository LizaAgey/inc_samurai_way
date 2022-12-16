import React from 'react';
import './App.scss';
import 'macro-css'
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Dialogues from './components/Dialogues/Dialogues';
import {Route} from 'react-router-dom';

import {StoreType} from './redux/Store';
import Sidebar from './components/Sidebar/Sidebar';

type AppPropsType = {
    store: StoreType
}

const App = (props: AppPropsType) => {
    const state = props.store.getState()

    return (
        <div className={'appWrapper'}>
            <Header header={state.header}/>
            <Route path="/profile" render={() =>
                <Profile
                    profilePage={state.profilePage}
                    dispatch={props.store.dispatch.bind(props.store)}
                />}/>
            <Route path="/messages" render={() => <Dialogues state={state.dialoguesPage}/>}/>
            <Sidebar state={state.sidebarPage}/>
        </div>
    );
}

export default App;



