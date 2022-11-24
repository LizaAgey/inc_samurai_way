import React from 'react';
import 'macro-css'
import styles from "./Profile.module.scss"
import PostsArea from "./PostsArea/PostsArea";
import UserInfo from "./UserInfo/UserInfo";

//TODO: --------------------"ANY" is the component type !!!
type ProfileType = any

const Profile: React.FC<ProfileType> = (props) => {
    return (
        <div className={`${styles.content} m-20`}>
            <UserInfo
                avatar={"./img/avatar.jpg"}
                name={"Billy Way"}
                bday={"2 January"}
                city={"New York"}
                education={"The Harvard university"}
                media={"@BillyWay"}
            />
            <PostsArea/>
        </div>
    );
};

export default Profile;