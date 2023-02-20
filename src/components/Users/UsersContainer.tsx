import React from 'react';
import {connect} from 'react-redux';
import Users from './Users';
import {AppStateType} from '../../redux/redux-store';
import {
    followAС,
    setCurrentUsersPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAС,
    UserType
} from '../../redux/usersReducer';
import {Dispatch} from 'redux';

type MapStatePropsType = {
    users: Array<UserType>
    usersPerPage: number
    totalUsersCount: number
    currentPageNumber: number
}

type MapDispatchPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users:  Array<UserType>) => void
    setCurrentUsersPage: (currentPageNumber: number)=>void
    setTotalUsersCount: (totalUsersCount: number) => void
}

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        usersPerPage: state.usersPage.usersPerPage,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPageNumber: state.usersPage.currentPageNumber,
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
        },
        setCurrentUsersPage: (currentPageNumber: number)=> {
            dispatch(setCurrentUsersPageAC(currentPageNumber))
        },
        setTotalUsersCount: (totalUsersCount: number) => {
            dispatch(setTotalUsersCountAC(totalUsersCount))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);