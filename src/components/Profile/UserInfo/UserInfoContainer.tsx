import React from 'react';
import UserInfo from './UserInfo';
import {StoreContext} from './../../../context/StoreContext';

export type UserInfoStateType = {
    id: string,
    avatar: string,
    name: string,
    bday: string,
    city: string,
    education: string,
    media: string
}

const UserInfoContainer = () => {

   return  <StoreContext.Consumer>
        {
            (store) => {
                let state = store.getState().profilePage.users[0]
                const userInfoState: UserInfoStateType = {
                    id: state.id,
                    avatar: state.avatar,
                    name: state.name,
                    bday: state.bday,
                    city: state.city,
                    education: state.education,
                    media: state.media,
                }

                return <UserInfo userInfoState={userInfoState}/>;
            }
        }
    </StoreContext.Consumer>
};

export default UserInfoContainer;