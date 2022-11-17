import React from 'react';
import styles from "./User.module.scss";

type UserType = {
    avatar: string,
    name: string,
    bday: string,
    city: string,
    education: string,
    media: string
}

const User: React.FC<UserType> = (props) => {
    return (
        <>
            <div className={styles.imgBackground}></div>
            <div className={styles.userImg}>
                <img src={props.avatar} alt="avatar"/>
            </div>
            <div className={styles.userInfo}>
                <h3>{props.name}</h3>
                <div className={styles.userDetails}>
                    <p>Date of Birth: <span>{props.bday}</span></p>
                    <p>City: <span>{props.city}</span></p>
                    <p>Education: <span>{props.education}</span></p>
                    <p>Social media link: <span>{props.media}</span></p>

                </div>
            </div>
        </>
    );
};

export default User;