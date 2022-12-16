import React from 'react';
import 'macro-css'
import styles from './Profile.module.scss'
import PostsArea from './PostsArea/PostsArea';
import UserInfo from './UserInfo/UserInfo';
import { ProfilePageType} from '../../redux/Store';
import {ActionsType} from '../../redux/Store';

type ProfilePropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionsType) => void
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div className={`${styles.content} m-20`}>
            <UserInfo
                id={props.profilePage.users[0].id}
                avatar={props.profilePage.users[0].avatar}
                name={props.profilePage.users[0].name}
                bday={props.profilePage.users[0].bday}
                city={props.profilePage.users[0].city}
                education={props.profilePage.users[0].education}
                media={props.profilePage.users[0].media}
            />
            <PostsArea
                postCards={props.profilePage.postCards}
                newPostText={props.profilePage.newPostText}
                dispatch={props.dispatch}
            />
        </div>
    );
};

export default Profile;