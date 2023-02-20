import {combineReducers, compose, createStore, Store} from 'redux';
import dialoguesReducer, {sendMessage, updateNewMessageText} from './dialoguesReducer';
import profileReducer, {addPost, setUserProfile, updateNewPost} from './profileReducer';
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
    | ReturnType<typeof setUserProfile>

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

let rootReducer = combineReducers({
    //each reducer returns new state
    dialoguesPage: dialoguesReducer,
    profilePage: profileReducer,
    sidebarPage: sidebarReducer,
    usersPage: usersReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store: Store<AppStateType> = createStore(rootReducer, composeEnhancers())

export type AppStateType = ReturnType<typeof rootReducer> // alternative for StateType (made manually)
