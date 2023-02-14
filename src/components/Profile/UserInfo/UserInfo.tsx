import React from 'react';
import styles from './UserInfo.module.scss';
import {UserInfoPropsType} from './UserInfoContainer';
import userWithoutPhotoImg from "../../../assets/img/users/user-without-photo.png"


const UserInfo= ({state}:UserInfoPropsType) => {
    let currentUser = state[0]

    return (
        <>
            <div className={styles.imgBackground}></div>
            <div className={styles.userImg}>
                <img src={currentUser.photos.large !== null ? currentUser.photos.large : userWithoutPhotoImg} alt="avatar"/>
            </div>
            <div className={styles.userInfo}>
                <h3>{currentUser.name}</h3>
                <div className={styles.userDetails}>
                    <p>Status: <span>{currentUser.status}</span></p>
                    {currentUser.followed ? <button>Unfollow</button> : <button>Follow</button>}
                </div>
            </div>
        </>
    );
};

export default UserInfo;