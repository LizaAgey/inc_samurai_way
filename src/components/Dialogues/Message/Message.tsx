import React from 'react';
import 'macro-css'
import {MessageType} from '../../../redux/state';
import styles from './Message.module.scss'

const Message: React.FC<MessageType> = (props) => {
    return (
        <div className={props.isOwnMessage ? styles.ownMessage : styles.friendMessage}>
            <img src={props.avatarLink} alt="user avatar"/>
            <p>{props.time}</p>
            <p>{props.userName}</p>
            <p>{props.text}</p>
        </div>
    )
};

export default Message;
