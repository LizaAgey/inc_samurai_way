import React from 'react';
import styles from '../Profile/Profile.module.scss';
import {PostsAreaPropsType} from './UsersContainer';
import * as axios from 'axios';
import {UserType} from '../../redux/usersReducer';
import userWithoutPhotoImg from '../../assets/img/users/user-without-photo.png'

type usersResponseType = {
    error: string | null
    items: Array<UserType>
    totalCount: number
}

const Users = (props: PostsAreaPropsType) => {
        const getUsers = () => {
            if (props.users.length === 0) {
                axios.default.get<usersResponseType>('https://social-network.samuraijs.com/api/1.0/users')
                    .then(response => {
                        props.setUsers(response.data.items)
                    })

            }
        };



        return (
            <div className={`${styles.content} m-20`}>
                <button onClick={getUsers}>get users</button>
                {props.users.map((user) => <div key={user.id}>
                    <img src={user.photos.large !== null ? user.photos.large : userWithoutPhotoImg} alt="user image"/>
                    <div>
                        <span>{user.name}</span>
                        <span>{user.status}</span>
                    </div>
                    {user.followed
                        ? <button onClick={() => props.unfollow(user.id)}>Unfollow</button>
                        : <button onClick={() => props.follow(user.id)}>Follow</button>}
                </div>)}
            </div>
        );
    }
;

export default Users;