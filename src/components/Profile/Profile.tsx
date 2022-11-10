import React from 'react';
import 'macro-css'
import styles from "./Profile.module.scss"
import Post from "./Post/Post";

const Profile = () => {
    return (
        <div className={`${styles.content} m-20`}>

            <div className={styles.imgBackground}></div>
            <div className={styles.userImg}>
                <img src="./img/avatar.jpg" alt="avatar"/>
            </div>
            <div className={styles.userInfo}>
                <h3>Billy Way</h3>
                <div className={styles.userDetails}>
                    <p>Date of Birth: <span>2 January</span></p>
                    <p>City: <span>New York</span></p>
                    <p>Education: <span>The Harvard university</span></p>
                    <p>Social media link: <span>@BillyWay</span></p>

                </div>
            </div>

            <Post />

        </div>
    );
};

export default Profile;