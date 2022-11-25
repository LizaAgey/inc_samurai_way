import React from 'react';
import './App.scss';
import 'macro-css'
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';
import Dialogues from './components/Dialogues/Dialogues';
import {BrowserRouter, Route} from 'react-router-dom';
import {DialogueType, HeaderType, MessageType, NavigationElementType, PostCardType, UserType} from './index';

type  AppPropsType = {
    navigationElements: Array<NavigationElementType>
    dialogues: Array<DialogueType>
    messages: Array<MessageType>
    header: HeaderType
    users: Array<UserType>
    postCards: Array<PostCardType>
}

const App = (props: AppPropsType) => {
    return (
        <BrowserRouter>
            <div className={'appWrapper'}>
                <Header header={props.header}/>

                <Route path="/profile" render={() =>
                    <Profile
                        users={props.users}
                        postCards={props.postCards}
                    />}/>

                <Route path="/messages" render={() =>
                    <Dialogues
                    dialogues={props.dialogues}
                    messages={props.messages}
                />}/>

                <Navigation
                    navigationElements={props.navigationElements}
                />

            </div>
        </BrowserRouter>
    );
}

export default App;



