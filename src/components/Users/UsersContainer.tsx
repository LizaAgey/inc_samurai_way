import React from 'react';
import {connect} from 'react-redux';
import Users from './Users';
import {AppStateType} from '../../redux/redux-store';
import {followAС, setUsersAC, unfollowAС, UserType} from '../../redux/usersReducer';
import {Dispatch} from 'redux';

type MapStatePropsType = {
    users: Array<UserType>
}

type MapDispatchPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users:  Array<UserType>) => void
}

export type PostsAreaPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users
    }
};

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        follow: (userID: number) => {
            dispatch(followAС(userID))
        },
        unfollow: (userID: number) => {
            dispatch(unfollowAС(userID))
        },
        setUsers: (users: Array<UserType>)=> {
            dispatch(setUsersAC(users))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);