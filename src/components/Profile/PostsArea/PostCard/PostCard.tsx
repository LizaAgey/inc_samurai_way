import React from 'react';
import styles from "./PostCard.module.scss";
import {PostCardType} from '../../../../redux/profileReducer';

const PostCard: React.FC<PostCardType> = (props) => {
    return (
        <div className={`${styles.postCard} d-flex justify-center align-center`}>
            <img className={`${styles.avatar} m-10`} src={props.avatarLink} alt="avatar"/>
            <p>{props.postText}
                <span className={styles.likesNumber}>{props.likesNumber}</span>
                <img className={styles.like} src={props.isLiked ? "./img/like_activated.ico" : "./img/like_inactive.ico"} alt="like"/>
            </p>

        </div>
    );
};

export default PostCard;