import React, {ChangeEvent} from 'react';
import 'macro-css'
import styles from './Dialogues.module.scss'
import Message from './Message/Message';
import DialogueElement from './DialogueElement/DialogueElement';
import {ActionsType, DialoguesPageType} from '../../redux/Store';
import Button from '../Button/Button';
import {sendMessageAC, updateNewMessageTextAC} from '../../redux/dialoguesReducer';


type DialoguesPropsType = {
    dialoguesPage: DialoguesPageType,
    dispatch: (action: ActionsType) => void
}

const Dialogues = (props: DialoguesPropsType) => {
    let messageList = props.dialoguesPage.messages.map((message) => {
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

    let dialoguesList = props.dialoguesPage.dialogues.map((dialogue) => {
        return (
            <DialogueElement
                id={dialogue.id}
                avatarLink={dialogue.avatarLink}
                friendName={dialogue.friendName}
            />
        )
    })

    let newMessage = props.dialoguesPage.newMessageText
    const sendMessageHandler = () => {
        props.dispatch(sendMessageAC())
    };

    const updateNewMessageTextHandler = (event: ChangeEvent<HTMLInputElement>) => {
        let currentText = event.currentTarget.value
        props.dispatch(updateNewMessageTextAC(currentText))
    };

    return (
        <div className={`${styles.content} d-flex m-20`}>
            <div className={styles.dialoguesListWrapper}>

                <h3>Messages</h3>
                {dialoguesList}
            </div>

            <div className={styles.chat}>
                <div className={styles.messagesWrapper}>
                    {messageList}
                </div>

                <div className={styles.inputWrapper}>
                    <input value={newMessage}
                           onChange={updateNewMessageTextHandler}
                           placeholder="Type a new message..."
                           type="text"/>
                    <Button text={'Send'} onClickCallback={sendMessageHandler}/>
                </div>
            </div>

        </div>
    );
};

export default Dialogues;