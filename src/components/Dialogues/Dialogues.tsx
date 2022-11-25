import React from 'react';
import 'macro-css'
import styles from './Dialogues.module.scss'
import Message from './Message/Message';
import DialogueElement from './DialogueElement/DialogueElement';
import {DialogueType, MessageType} from '../../redux/state';


type DialoguesPropsType = {
    dialogues: Array<DialogueType>
    messages: Array<MessageType>
}

const Dialogues = (props: DialoguesPropsType) => {
    let messageList = props.messages.map((message) => {
        return (
            <Message
                avatarLink={message.avatarLink}
                userName={message.userName}
                time={message.time}
                text={message.text}
                id={message.id}
            />
        )
    })

    let dialoguesList = props.dialogues.map((dialogue) => {
        return (
            <DialogueElement
                id={dialogue.id}
                avatarLink={dialogue.avatarLink}
                friendName={dialogue.friendName}
            />
        )
    })

    return (
        <div className={`${styles.content} d-flex m-20`}>
            <div className={styles.dialoguesListWrapper}>
                <h3>Messages</h3>
                {dialoguesList}
            </div>

            <div className="chatWrapper">
                {messageList}
            </div>

        </div>
    );
};

export default Dialogues;