import React from 'react';
import './App.scss';
import 'macro-css'
import Header from './components/Header/Header';
import {Route} from 'react-router-dom';
import DialoguesContainer from './components/Dialogues/DialoguesContainer';
import SidebarContainer from './components/Sidebar/SidebarContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';

const App = () => {
    return (
        <div className={'appWrapper'}>
            <Header/>
            <Route path="/profile" render={() =>
                <ProfileContainer/>}/>
            <Route path="/messages" render={() =>
                <DialoguesContainer/>}/>
            <Route path="/users" render={() =>
                <UsersContainer/>}/>
            <SidebarContainer/>
        </div>
    );
}

export default App;



