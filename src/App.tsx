import React from 'react';
import './App.css';
import 'macro-css'
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Profile from "./components/Profile/Profile";


function App() {
    return (
        <div className={'appWrapper'}>
            <Header
                src={"./social_network_logo.ico"}
                headerTitle={"Samurai Social Network"}/>

            <Navigation
                mainNavLinks={[
                    {link: "#", navTitle: "Profile"},
                    {link: "#", navTitle: "Messages"},
                    {link: "#", navTitle: "News"},
                    {link: "#", navTitle: "Music"}
                ]}
                settingsLinks={{
                    link: "#",
                    navTitle: "Settings"
                }}/>

            <Profile/>


        </div>
    );
}

export default App;
