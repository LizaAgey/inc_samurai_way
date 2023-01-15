import React from 'react';
import {AppStateType} from '../redux/redux-store';
import {Dispatch} from 'redux';
type ReduxStoreType = {
    dispatch: Dispatch,
    observable: () => void,
    getState: () => AppStateType,
    replaceReducer: (nextReducer:any) => void, //TODO: change type
    subscribe: (callback: () => void) => void
}

export type ProviderType = {
    store: ReduxStoreType
    children: React.ReactNode
}

export const StoreContext_for_study = React.createContext({} as ReduxStoreType)

export const Provider = (props: ProviderType) => { //to export logic below here instead of index.tsx
    return (
        <StoreContext_for_study.Provider value={props.store}>
            {props.children}
        </StoreContext_for_study.Provider>
    )
};