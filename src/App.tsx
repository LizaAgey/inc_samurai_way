import React from 'react';
import './App.scss';
import 'macro-css'
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import {Route} from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import DialoguesContainer from './components/Dialogues/DialoguesContainer';
import { StoreContext } from './context/StoreContext';

const App = () => {
    return (
        <StoreContext.Consumer>
            {
                (store)=> {
                    const state = store.getState()
                    return ( <div className={'appWrapper'}>
                        <Header/>
                        <Route path="/profile" render={() =>
                            <Profile/>}/>
                        <Route path="/messages" render={() =>
                            <DialoguesContainer/>}/>
                        <Sidebar state={state.sidebarPage}/>
                    </div>)
                }

}
            </StoreContext.Consumer>
    );
}

export default App;



