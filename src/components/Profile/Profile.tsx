import React from 'react';
import 'macro-css'
import styles from "./Profile.module.scss"
import Post from "./Post/Post";
import User from "./Post/User/User";

//TODO: --------------------"ANY" is the component type !!!
type ProfileType = any

const Profile: React.FC<ProfileType> = (props) => {
    return (
        <div className={`${styles.content} m-20`}>
            <User
                avatar={"./img/avatar.jpg"}
                name={"Billy Way"}
                bday={"2 January"}
                city={"New York"}
                education={"The Harvard university"}
                media={"@BillyWay"}
            />
            <Post/>
        </div>
    );
};

export default Profile;