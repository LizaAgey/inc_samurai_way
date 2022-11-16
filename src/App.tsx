import React from 'react';
import './App.scss';
import 'macro-css'
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Profile from "./components/Profile/Profile";
import Messages from "./components/Messages/Messages";


function App() {
    return (
        <div className={'appWrapper'}>
            <Header
                src={"./social_network_logo.ico"}
                headerTitle={"Samurai Social Network"}/>

            <Navigation
                mainNavLinks={[
                    {id: 1, link: "#", navTitle: "Profile", linkIcon: "./img/profile.ico"},
                    {id: 2, link: "#", navTitle: "Messages", linkIcon: "./img/messages.ico"},
                    {id: 3, link: "#", navTitle: "News", linkIcon: "./img/news.ico"},
                    {id: 4, link: "#", navTitle: "Music", linkIcon: "./img/music.ico"},
                    {id: 5, link: "#", navTitle: "Settings", linkIcon: "./img/settings.ico"}
                ]}
            />

            {/*<Profile/>*/}
            <Messages
                friendsInfo={[
                {avatarLink: "./img/friends/1.png", friendName: "Alex Key"},
                {avatarLink: "./img/friends/2.png", friendName: "Martin Bin"},
                {avatarLink: "./img/friends/3.png", friendName: "Bob Wall"},
                {avatarLink: "./img/friends/4.png", friendName: "Billy Han"}
                ]}
                />

        </div>
    );
}

export default App;



