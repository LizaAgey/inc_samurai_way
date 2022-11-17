import React from 'react';
import './App.scss';
import 'macro-css'
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Profile from "./components/Profile/Profile";
import Messages from "./components/Messages/Messages";
import {BrowserRouter, Route} from "react-router-dom";


function App() {
    return (
        <BrowserRouter>
            <div className={'appWrapper'}>
                <Header
                    src={"./social_network_logo.ico"}
                    headerTitle={"Social Network"}/>

                <Navigation
                    mainNavLinks={[
                        {id: 1, link: "/profile", navTitle: "Profile", linkIcon: "./img/profile.ico"},
                        {id: 2, link: "/messages", navTitle: "Messages", linkIcon: "./img/messages.ico"},
                        {id: 3, link: "/news", navTitle: "News", linkIcon: "./img/news.ico"},
                        {id: 4, link: "/music", navTitle: "Music", linkIcon: "./img/music.ico"},
                        {id: 5, link: "/settings", navTitle: "Settings", linkIcon: "./img/settings.ico"}
                    ]}
                />


                <Route path="/profile" component={Profile}/>
                <Route path="/messages" render={() => <Messages
                    friendsInfo={[
                        {id:1, avatarLink: "./img/friends/1.png", friendName: "Alex Key"},
                        {id:2, avatarLink: "./img/friends/2.png", friendName: "Martin Bin"},
                        {id:3, avatarLink: "./img/friends/3.png", friendName: "Bob Wall"},
                        {id:4, avatarLink: "./img/friends/4.png", friendName: "Billy Han"}
                    ]}
                />}/>


            </div>
        </BrowserRouter>
    );
}

export default App;



