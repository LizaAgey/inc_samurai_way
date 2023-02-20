import React from 'react';
import {connect} from 'react-redux';
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
import * as axios from 'axios';
import Users from './Users';

type usersResponseType = {
    error: string | null
    items: Array<UserType>
    totalCount: number
}
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
export type UsersCombinedPropsType = MapStatePropsType & MapDispatchPropsType

// CONTAINER COMPONENT FOR RECEIVING DATA FROM API
class UsersContainer extends React.Component<UsersCombinedPropsType> {
    componentDidMount() {
        axios.default.get<usersResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPageNumber}&count=${this.props.usersPerPage}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageSelection = (pageNumber: number) => {
        this.props.setCurrentUsersPage(pageNumber)
        axios.default.get<usersResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.usersPerPage}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return <Users
            totalUsersCount={this.props.totalUsersCount}
            usersPerPage={this.props.usersPerPage}
            currentPageNumber={this.props.currentPageNumber}
            onPageSelection={this.onPageSelection}
            users={this.props.users}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
        />
    }
}

// MAIN CONTAINER COMPONENT
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

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);