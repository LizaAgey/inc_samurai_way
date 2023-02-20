import {combineReducers, createStore} from 'redux';
import dialoguesReducer, {sendMessage, updateNewMessageText} from './dialoguesReducer';
import profileReducer, {addPost, updateNewPost} from './profileReducer';
import sidebarReducer from './sidebarReducer';
import usersReducer, {
    follow,
    setCurrentUsersPage, setFetchingMode,
    setTotalUsersCount,
    setUsers,
    unfollow
} from './usersReducer';

export type ActionsType =
    ReturnType<typeof addPost>
    | ReturnType<typeof updateNewPost>
    | ReturnType<typeof sendMessage>
    | ReturnType<typeof updateNewMessageText>
    | ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentUsersPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof setFetchingMode>


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