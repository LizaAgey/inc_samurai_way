import React from 'react';
import ProfileInfo from './ProfileInfo';
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


const UserInfoContainer = connect(MapStateToProps)(ProfileInfo)

export default UserInfoContainer;