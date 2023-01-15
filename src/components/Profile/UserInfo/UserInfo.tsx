import React from 'react';
import styles from "./UserInfo.module.scss";
import {UserInfoPropsType, UserInfoStateType} from './UserInfoContainer';

const UserInfo= ({state}:UserInfoPropsType) => {

    let currentUser = state[0]
    const userInfoState: UserInfoStateType = {
        id: currentUser.id,
        avatar: currentUser.avatar,
        name: currentUser.name,
        bday: currentUser.bday,
        city: currentUser.city,
        education: currentUser.education,
        media: currentUser.media,
    }

    return (
        <>
            <div className={styles.imgBackground}></div>
            <div className={styles.userImg}>
                <img src={userInfoState.avatar} alt="avatar"/>
            </div>
            <div className={styles.userInfo}>
                <h3>{userInfoState.name}</h3>
                <div className={styles.userDetails}>
                    <p>Date of Birth: <span>{userInfoState.bday}</span></p>
                    <p>City: <span>{userInfoState.city}</span></p>
                    <p>Education: <span>{userInfoState.education}</span></p>
                    <p>Social media link: <span>{userInfoState.media}</span></p>
                </div>
            </div>
        </>
    );
};

export default UserInfo;