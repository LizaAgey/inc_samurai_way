import React from 'react';
import styles from "./UserInfo.module.scss";
import {ReduxStoreType} from '../../../redux/redux-store';
import UserInfo from './UserInfo';

type UserInfoPropsType = {
    store: ReduxStoreType
}
export type UserInfoStateType = {
    id:string,
    avatar: string,
    name: string,
    bday: string,
    city: string,
    education: string,
    media: string
}

const UserInfoContainer= ({store}: UserInfoPropsType) => {
    let state = store.getState().profilePage.users[0]
    const userInfoState: UserInfoStateType = {
        id:state.id,
        avatar:state.avatar,
        name:state.name,
        bday:state.bday,
        city:state.city,
        education:state.education,
        media:state.media,
    }

    return <UserInfo userInfoState={userInfoState}/>   ;
};

export default UserInfoContainer;