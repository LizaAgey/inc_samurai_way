import React from 'react';
import './App.scss';
import 'macro-css'
import Header from './components/Header/Header';
import Navigation from './components/Sidebar/Navigation/Navigation';
import Profile from './components/Profile/Profile';
import Dialogues from './components/Dialogues/Dialogues';
import {BrowserRouter, Route} from 'react-router-dom';

import {StateType} from './redux/state';
import Sidebar from './components/Sidebar/Sidebar';

type AppPropsType = {
    state: StateType
}

const App = (props: AppPropsType) => {
    return (
        <BrowserRouter>
            <div className={'appWrapper'}>
                <Header header={props.state.header}/>
                <Route path="/profile" render={() => <Profile state={props.state.profilePage}/>}/>
                <Route path="/messages" render={() => <Dialogues state={props.state.dialoguesPage}/>}/>
                <Sidebar state={props.state.sidebarPage}/>

            </div>
        </BrowserRouter>
    );
}

export default App;



