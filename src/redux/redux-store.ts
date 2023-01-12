import {combineReducers, createStore} from 'redux';
import dialoguesReducer from './dialoguesReducer';
import profileReducer from './profileReducer';
import sidebarReducer from './sidebarReducer';

let reducers = combineReducers({
    //each reducer returns new state
    dialoguesPage: dialoguesReducer,
    profilePage: profileReducer,
    sidebarPage: sidebarReducer,
})

export const store = createStore(reducers)
console.log(store.getState())