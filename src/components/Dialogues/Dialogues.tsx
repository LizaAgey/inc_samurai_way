import React from 'react';
import 'macro-css'
import styles from './Dialogues.module.scss'
import {v1} from 'uuid';
import Message from './Message/Message';
import DialogueElement from './DialogueElement/DialogueElement';

export type DialogueType = {
    id: string
    avatarLink: string
    friendName: string
}
type DialoguesType = {
    friendsInfo: Array<DialogueType>
}
type MessageDataType = {
    avatarLink: string,
    userName: string,
    time: string,
    text: string,
    id: string
}


let messagesData: Array<MessageDataType> = [
    {id: v1(), text: 'text1', time: 'time1', userName: 'sender1', avatarLink: './img/friends/1.png'},
    {id: v1(), text: 'text2', time: 'time2', userName: 'sender2', avatarLink: './img/friends/2.png'},
    {id: v1(), text: 'text3', time: 'time3', userName: 'sender3', avatarLink: './img/friends/3.png'},
    {id: v1(), text: 'text4', time: 'time4', userName: 'sender4', avatarLink: './img/friends/4.png'}
]
let messageList = messagesData.map((message) => {
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


const Dialogues: React.FC<DialoguesType> = (props) => {

    let dialoguesList = props.friendsInfo.map((dialogue) => {
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