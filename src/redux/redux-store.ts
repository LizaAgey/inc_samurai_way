import {combineReducers, createStore} from 'redux';
import dialoguesReducer, {sendMessageAC, updateNewMessageTextAC} from './dialoguesReducer';
import profileReducer, {addPostAС, updateNewPostAC} from './profileReducer';
import sidebarReducer from './sidebarReducer';
import usersReducer, {
    followAС,
    setCurrentUsersPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAС
} from './usersReducer';

export type ActionsType =
    ReturnType<typeof addPostAС>
    | ReturnType<typeof updateNewPostAC>
    | ReturnType<typeof sendMessageAC>
    | ReturnType<typeof updateNewMessageTextAC>
    | ReturnType<typeof followAС>
    | ReturnType<typeof unfollowAС>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentUsersPageAC>
    | ReturnType<typeof setTotalUsersCountAC>


let rootReducer = combineReducers({
    //each reducer returns new state
    dialoguesPage: dialoguesReducer,
    profilePage: profileReducer,
    sidebarPage: sidebarReducer,
    usersPage: usersReducer
})
export type AppStateType = ReturnType<typeof rootReducer> // alternative for StateType (made manually)

export const store = createStore(rootReducer)
console.log(store.getState())