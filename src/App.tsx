import React from 'react';
import './App.scss';
import 'macro-css'
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';
import Dialogues from './components/Dialogues/Dialogues';
import {BrowserRouter, Route} from 'react-router-dom';
import {v1} from 'uuid';

export type NavLinkType = {
    id: string;
    link: string;
    navTitle: string;
    linkIcon: string
}

const mainNavLinksData: Array<NavLinkType> = [
    {id: v1(), link: '/profile', navTitle: 'Profile', linkIcon: './img/profile.ico'},
    {id: v1(), link: '/messages', navTitle: 'Dialogues', linkIcon: './img/messages.ico'},
    {id: v1(), link: '/news', navTitle: 'News', linkIcon: './img/news.ico'},
    {id: v1(), link: '/music', navTitle: 'Music', linkIcon: './img/music.ico'},
    {id: v1(), link: '/settings', navTitle: 'Settings', linkIcon: './img/settings.ico'}
]

function App() {
    return (
        <BrowserRouter>
            <div className={'appWrapper'}>
                <Header
                    src={'./social_network_logo.ico'}
                    headerTitle={'Social Network'}/>

                <Route path="/profile" component={Profile}/>
                <Route path="/messages" render={() => <Dialogues
                    friendsInfo={[
                        {id: v1(), avatarLink: './img/friends/1.png', friendName: 'Alex Key'},
                        {id: v1(), avatarLink: './img/friends/2.png', friendName: 'Martin Bin'},
                        {id: v1(), avatarLink: './img/friends/3.png', friendName: 'Bob Wall'},
                        {id: v1(), avatarLink: './img/friends/4.png', friendName: 'Billy Han'}
                    ]}
                />}/>

                <Navigation
                    mainNavLinksData={mainNavLinksData}
                />

            </div>
        </BrowserRouter>
    );
}

export default App;



