import React from 'react';
import 'macro-css'
import styles from './Profile.module.scss'
import PostsAreaContainer from './PostsArea/PostsAreaContainer';
import UserInfoContainer from './UserInfo/UserInfoContainer';

const Profile = () => {
    return (
        <div className={`${styles.content} m-20`}>
            <UserInfoContainer/>
            <PostsAreaContainer/>
        </div>
    );
};

export default Profile;