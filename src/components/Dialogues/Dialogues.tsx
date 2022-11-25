import React from 'react';
import 'macro-css'
import styles from './Dialogues.module.scss'
import Message from './Message/Message';
import DialogueElement from './DialogueElement/DialogueElement';
import {DialogueType, MessageType} from '../../redux/state';


type DialoguesPropsType = {
    state: {
        dialogues: Array<DialogueType>
        messages: Array<MessageType>
    }
}

const Dialogues = (props: DialoguesPropsType) => {
    let messageList = props.state.messages.map((message) => {
        return (
            <Message
                avatarLink={message.avatarLink}
                userName={message.userName}
                time={message.time}
                text={message.text}
                id={message.id}
                isOwnMessage={message.isOwnMessage}
            />
        )
    })

    let dialoguesList = props.state.dialogues.map((dialogue) => {
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

            <div>
                <div className={styles.chatBackground}></div>
                <div className={styles.messagesWrapper}>

                    {messageList}
                </div>
            </div>

        </div>
    );
};

export default Dialogues;