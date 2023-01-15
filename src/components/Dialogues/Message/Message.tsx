import React from 'react';
import 'macro-css'
import styles from './Message.module.scss'
import {MessageType} from '../../../redux/dialoguesReducer';

const Message: React.FC<MessageType> = (props) => {
    return (
        <div className={props.isOwnMessage ? styles.ownMessage : styles.friendMessage}>
            <img src={props.avatarLink} alt="user avatar"/>
            <div>
                <div className={styles.timeSenderWrapper}>
                    <p >{props.userName}</p>
                    <p className={"pl-15"}>{props.time}</p>
                </div>
                <p >{props.text}</p>
            </div>
        </div>
    )
};

export default Message;
