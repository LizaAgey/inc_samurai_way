import React from 'react';
import 'macro-css'
import styles from "./Profile.module.scss"
import PostsArea from "./PostsArea/PostsArea";
import UserInfo from "./UserInfo/UserInfo";
import {PostCardType, UserType} from '../../redux/state';

type ProfilePropsType = {
    state: {
        users: Array<UserType>
        postCards: Array<PostCardType>
    }
    addPost: (postText: string)=>void
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div className={`${styles.content} m-20`}>
            <UserInfo
                id={props.state.users[0].id}
                avatar={props.state.users[0].avatar}
                name={props.state.users[0].name}
                bday={props.state.users[0].bday}
                city={props.state.users[0].city}
                education={props.state.users[0].education}
                media={props.state.users[0].media}
            />
            <PostsArea
                postCards={props.state.postCards}
                addPost={props.addPost}
            />
        </div>
    );
};

export default Profile;