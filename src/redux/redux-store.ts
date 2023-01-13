import {combineReducers, createStore} from 'redux';
import dialoguesReducer from './dialoguesReducer';
import profileReducer from './profileReducer';
import sidebarReducer from './sidebarReducer';
import {ActionsType, StateType} from './Store';

let reducers = combineReducers({
    //each reducer returns new state
    dialoguesPage: dialoguesReducer,
    profilePage: profileReducer,
    sidebarPage: sidebarReducer,
})

export type ReduxStoreType = {
    dispatch: (action: ActionsType) => void,
    observable: () => void,
    getState: () => StateType,
    replaceReducer: (nextReducer:any) => void, //TODO: change type
    subscribe: (callback: () => void) => void
}

export const store: ReduxStoreType = createStore(reducers)
console.log(store)