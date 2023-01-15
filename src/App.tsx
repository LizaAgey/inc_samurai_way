import React from 'react';
import './App.scss';
import 'macro-css'
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import {Route} from 'react-router-dom';
import DialoguesContainer from './components/Dialogues/DialoguesContainer';
import SidebarContainer from './components/Sidebar/SidebarContainer';

const App = () => {
    return (
        <div className={'appWrapper'}>
            <Header/>
            <Route path="/profile" render={() =>
                <Profile/>}/>
            <Route path="/messages" render={() =>
                <DialoguesContainer/>}/>
            <SidebarContainer/>
        </div>
    );
}

export default App;



