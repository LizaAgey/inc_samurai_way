import React from 'react';
import 'macro-css'
import styles from './Profile.module.scss'
import PostsAreaContainer from './PostsArea/PostsAreaContainer';
import {ReduxStoreType} from '../../redux/redux-store';
import UserInfoContainer from './UserInfo/UserInfoContainer';

type ProfilePropsType = {
    store: ReduxStoreType
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div className={`${styles.content} m-20`}>
            <UserInfoContainer store={props.store}/>
            <PostsAreaContainer store={props.store}/>
        </div>
    );
};

export default Profile;