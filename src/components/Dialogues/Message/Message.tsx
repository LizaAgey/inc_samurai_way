import React from 'react';
import 'macro-css'
import {MessageType} from '../../../redux/state';

const Message: React.FC<MessageType> = (props) => {
    return (
        <div>
            <img src={props.avatarLink} alt="user avatar"/>
            <p>{props.time}</p>
            <p>{props.userName}</p>
            <p>{props.text}</p>
        </div>
    )
};

export default Message;
