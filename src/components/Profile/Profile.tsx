import React from 'react';
import 'macro-css'
import styles from './Profile.module.scss'
import PostsAreaContainer from './PostsArea/PostsAreaContainer';
import {ProfileCombinedPropsType} from './ProfileContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Loader from '../Loader/Loader';

const Profile = (props:ProfileCombinedPropsType) => {
    return (
        <div className={`${styles.content} m-20`}>
            <div className={styles.imgBackground}></div>
            {props.profileInfo ? <ProfileInfo profileInfo={props.profileInfo}/> : <Loader/>}

            <PostsAreaContainer/>
        </div>
    );
};

export default Profile;