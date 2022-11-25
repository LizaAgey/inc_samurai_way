import React from 'react';
import 'macro-css'
import styles from "./Profile.module.scss"
import PostsArea from "./PostsArea/PostsArea";
import UserInfo from "./UserInfo/UserInfo";
import {PostCardType, UserType} from '../../index';

type ProfilePropsType = {
    users: Array<UserType>
    postCards: Array<PostCardType>
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div className={`${styles.content} m-20`}>
            <UserInfo
                id={props.users[0].id}
                avatar={props.users[0].avatar}
                name={props.users[0].name}
                bday={props.users[0].bday}
                city={props.users[0].city}
                education={props.users[0].education}
                media={props.users[0].media}
            />
            <PostsArea
                postCards={props.postCards}
            />
        </div>
    );
};

export default Profile;