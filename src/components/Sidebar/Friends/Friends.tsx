import React from 'react';
import {FriendType} from '../../../redux/Store';
import styles from "./Friends.module.scss"
type FriendsPropsType = {
    friends: Array<FriendType>
}

const Friends = (props:FriendsPropsType ) => {
    let friendsList = props.friends.map((friend)=> {
        return (
            <div className={styles.friendWrapper} key={friend.id}>
                <img className={styles.friendAvatar} src={friend.avatarLink} alt="avatar"/>
                <p className={styles.friendName}>{friend.friendName}</p>
            </div>
        );
    })

    return <>{friendsList}</>

};

export default Friends;