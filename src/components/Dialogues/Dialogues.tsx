import React, {ChangeEvent, KeyboardEvent} from 'react';
import 'macro-css'
import styles from './Dialogues.module.scss'
import Button from '../Button/Button';
import Input from '../Input/Input';
import Message from './Message/Message';
import DialogueElement from './DialogueElement/DialogueElement';
import {DialoguesPropsType} from './DialoguesContainer';

const Dialogues = (props: DialoguesPropsType) => {

    let newMessage = props.state.newMessageText
    const updateNewMessageText = (event: ChangeEvent<HTMLInputElement>) => {
        let currentText = event.currentTarget.value
        if (currentText || currentText === '') {
            props.updateNewMessageText(currentText)
        }
    };

    const onEnterSendMessage = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            props.sendMessage()
        }
    };

    let messageList: Array<JSX.Element> = props.state.messages.map((message) => {
        return (
            <Message
                key={message.id}
                avatarLink={message.avatarLink}
                userName={message.userName}
                time={message.time}
                text={message.text}
                id={message.id}
                isOwnMessage={message.isOwnMessage}
            />
        )
    })
    let dialoguesList: Array<JSX.Element> = props.state.dialogues.map((dialogue) => {
        return (
            <DialogueElement
                key={dialogue.id}
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

            <div className={styles.chat}>
                <div className={styles.messagesWrapper}>
                    {messageList}
                </div>

                <div className={styles.inputWrapper}>

                    <Input
                        value={newMessage}
                        onChange={updateNewMessageText}
                        onKeyDown={onEnterSendMessage}
                        placeholder="Type a new message..."
                    />
                    <Button text={'Send'} onClickCallback={props.sendMessage}/>
                </div>
            </div>

        </div>
    );
};

export default Dialogues;