import React from 'react';
import styles from "./UserInfo.module.scss";
import {UserInfoStateType} from './UserInfoContainer';

type UserInfoPropsType = {
    userInfoState: UserInfoStateType
}

const UserInfo= ({userInfoState}:UserInfoPropsType) => {
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