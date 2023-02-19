import React from 'react';
import {UsersPropsType} from './UsersContainer';
import * as axios from 'axios';
import {UserType} from '../../redux/usersReducer';
import userWithoutPhotoImg from '../../assets/img/users/user-without-photo.png'
import styles from "./Users.module.css"

type usersResponseType = {
    error: string | null
    items: Array<UserType>
    totalCount: number
}


class Users extends React.Component<UsersPropsType> {
    componentDidMount() {
        axios.default.get<usersResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPageNumber}&count=${this.props.usersPerPage}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.usersPerPage)
        let pagesValues: Array<number> = []
        for (let i = 1; i <= pagesCount; i++) {
            pagesValues.push(i)
        }

        return <div className={`${styles.content} m-20`}>
            <div>
                {pagesValues.map(value => <span className={this.props.currentPageNumber === value ? styles.currentUsersPage : ""}>{value}</span>)}
            </div>
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
