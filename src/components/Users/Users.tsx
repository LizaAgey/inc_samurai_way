import React from 'react';
import styles from './Users.module.css';
import {UserType} from '../../redux/usersReducer';
import userDefaultAvatar from '../../assets/img/users/user-without-photo.png';
import {NavLink} from 'react-router-dom';

type UsersPropsType = {
    totalUsersCount: number
    usersPerPage: number
    currentPageNumber: number
    onPageSelection: (pageNumber: number) => void
    users: Array<UserType>
    unfollow: (userID: number) => void
    follow: (userID: number) => void
}

const Users = (props: UsersPropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.usersPerPage)
    if (pagesCount > 10) {
        pagesCount = 10
    }
    let pageNumbers: Array<number> = []
    for (let i = 1; i <= pagesCount; i++) {
        pageNumbers.push(i)
    }

    return <div className={`${styles.content} m-20`}>
        <div>
            {pageNumbers.map(pageNumber => <span
                className={props.currentPageNumber === pageNumber ? styles.currentUsersPage : ''}
                onClick={() => props.onPageSelection(pageNumber)}
                key={pageNumber}
            >
                    {pageNumber}
                </span>)}
        </div>
        {props.users.map((user: UserType) => {
            return (
                <div key={user.id}>
                    <NavLink to={`/profile/${user.id}`}>
                        <img src={user.photos.large !== null ? user.photos.large : userDefaultAvatar}
                             alt="user image"/>
                        <div>
                            <span>{user.name}</span>
                            <span>{user.status}</span>
                        </div>
                    </NavLink>
                    {user.followed
                        ? <button onClick={() => props.unfollow(user.id)}>Unfollow</button>
                        : <button onClick={() => props.follow(user.id)}>Follow</button>}
                </div>
            )
        })
        }
    </div>
};

export default Users;