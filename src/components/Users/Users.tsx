import React from 'react';
import styles from '../Profile/Profile.module.scss';
import {PostsAreaPropsType} from './UsersContainer';
import {v1} from 'uuid';

const Users = (props: PostsAreaPropsType) => {
    if(props.users.length === 0) {
        props.setUsers( [
            {
                id: v1(),
                avatar: './img/avatar.jpg',
                name: 'Billy Way',
                bday: '2 January',
                location: {city: 'New York', country: 'USA'},
                education: 'The Harvard university',
                media: '@BillyWay',
                status: 'Happy to find new friends',
                isFollowed: true
            },
            {
                id: v1(),
                avatar: './img/avatar.jpg',
                name: 'Billy Way',
                bday: '2 January',
                location: {city: 'New York', country: 'USA'},
                education: 'The Harvard university',
                media: '@BillyWay',
                status: 'Happy to find new friends',
                isFollowed: true
            },
            {
                id: v1(),
                avatar: './img/avatar.jpg',
                name: 'Billy Way',
                bday: '2 January',
                location: {city: 'New York', country: 'USA'},
                education: 'The Harvard university',
                media: '@BillyWay',
                status: 'Happy to find new friends',
                isFollowed: false
            },
            {
                id: v1(),
                avatar: './img/avatar.jpg',
                name: 'Billy Way',
                bday: '2 January',
                location: {city: 'New York', country: 'USA'},
                education: 'The Harvard university',
                media: '@BillyWay',
                status: 'Happy to find new friends',
                isFollowed: true
            },
        ])
    }

    return (
        <div className={`${styles.content} m-20`}>
            {props.users.map((user) => <div key={user.id}>
                <img src={user.avatar} alt="user image"/>
                <div>
                    <span>{user.name}</span>
                    <span>{user.bday}</span>
                    <span>{user.location.city}, {user.location.country}</span>
                    <span>{user.status}</span>
                </div>
                {user.isFollowed
                    ? <button onClick={() => props.unfollow(user.id)}>Unfollow</button>
                    : <button onClick={() => props.follow(user.id)}>Follow</button>}
            </div>)}
        </div>
    );
};

export default Users;