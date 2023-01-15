import {combineReducers, createStore} from 'redux';
import dialoguesReducer, {sendMessageAC, updateNewMessageTextAC} from './dialoguesReducer';
import profileReducer, {addPostAС, updateNewPostAC} from './profileReducer';
import sidebarReducer from './sidebarReducer';

export type ActionsType =
    ReturnType<typeof addPostAС>
    | ReturnType<typeof updateNewPostAC>
    | ReturnType<typeof sendMessageAC>
    | ReturnType<typeof updateNewMessageTextAC>

let rootReducer = combineReducers({
    //each reducer returns new state
    dialoguesPage: dialoguesReducer,
    profilePage: profileReducer,
    sidebarPage: sidebarReducer,
})
export type AppStateType = ReturnType<typeof rootReducer> // alternative for StateType (made manually)

export const store = createStore(rootReducer)
console.log(store.getState())