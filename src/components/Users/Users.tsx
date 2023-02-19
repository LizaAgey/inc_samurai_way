import React from 'react';
import styles from '../Profile/Profile.module.scss';
import {UsersPropsType} from './UsersContainer';
import * as axios from 'axios';
import {UserType} from '../../redux/usersReducer';
import userWithoutPhotoImg from '../../assets/img/users/user-without-photo.png'
import {store} from '../../redux/redux-store';

type usersResponseType = {
    error: string | null
    items: Array<UserType>
    totalCount: number
}


class Users extends React.Component<UsersPropsType> {
    constructor(props: Readonly<UsersPropsType>) {
        super(props);
        axios.default.get<usersResponseType>('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return <div className={`${styles.content} m-20`}>
            {this.props.users.map((user: UserType) => {
                return (
                    <div key={user.id}>
                        <img src={user.photos.large !== null ? user.photos.large : userWithoutPhotoImg}
                             alt="user image"/>
                        <div>
                            <span>{user.name}</span>
                            <span>{user.status}</span>
                        </div>
                        {user.followed
                            ? <button onClick={() => this.props.unfollow(user.id)}>Unfollow</button>
                            : <button onClick={() => this.props.follow(user.id)}>Follow</button>}
                    </div>)
            })
            }
        </div>
    }
}

export default Users
