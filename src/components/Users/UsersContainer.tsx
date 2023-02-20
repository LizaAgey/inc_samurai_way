import React from 'react';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {
    followAС,
    setCurrentUsersPageAC, setFetchingModeAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAС,
    UserType
} from '../../redux/usersReducer';
import {Dispatch} from 'redux';
import * as axios from 'axios';
import Users from './Users';
import Loader from '../Loader/Loader';

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
    isFetching: boolean
}
type MapDispatchPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users:  Array<UserType>) => void
    setCurrentUsersPage: (currentPageNumber: number)=>void
    setTotalUsersCount: (totalUsersCount: number) => void
    setFetchingMode: (isFetching: boolean) => void
}
export type UsersCombinedPropsType = MapStatePropsType & MapDispatchPropsType

// CONTAINER COMPONENT FOR RECEIVING DATA FROM API
class UsersContainer extends React.Component<UsersCombinedPropsType> {
    componentDidMount() {
        this.props.setFetchingMode(true)
        axios.default.get<usersResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPageNumber}&count=${this.props.usersPerPage}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
                this.props.setFetchingMode(false)
            })

    }

    onPageSelection = (pageNumber: number) => {
        this.props.setFetchingMode(true)
        this.props.setCurrentUsersPage(pageNumber)
        axios.default.get<usersResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.usersPerPage}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setFetchingMode(false)
            })

    }

    render() {
        return <>
            <Users
            totalUsersCount={this.props.totalUsersCount}
            usersPerPage={this.props.usersPerPage}
            currentPageNumber={this.props.currentPageNumber}
            onPageSelection={this.onPageSelection}
            users={this.props.users}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
        />
            {this.props.isFetching && <Loader/>}
        </>
    }
}

// MAIN CONTAINER COMPONENT
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        usersPerPage: state.usersPage.usersPerPage,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPageNumber: state.usersPage.currentPageNumber,
        isFetching: state.usersPage.isFetching
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
        },
        setFetchingMode: (isFetching: boolean) => {
            dispatch(setFetchingModeAC(isFetching))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);