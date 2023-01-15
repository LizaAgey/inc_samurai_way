import React from 'react';
import styles from "./Friends.module.scss"

export type FriendType = {
    id: string
    avatarLink: string
    friendName: string
}
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