import React from 'react';
import UserInfo from './UserInfo';
import {connect} from 'react-redux';
import {AppStateType} from '../../../redux/redux-store';
import {UserType} from '../../../redux/usersReducer';

type mapStatePropsType = {
    state: Array<UserType>
}
export type UserInfoPropsType = mapStatePropsType

const MapStateToProps = (state: AppStateType):mapStatePropsType => {
    return {
        state: state.profilePage.users
    };
};


const UserInfoContainer = connect(MapStateToProps)(UserInfo)

export default UserInfoContainer;