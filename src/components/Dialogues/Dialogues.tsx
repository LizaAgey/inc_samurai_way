import React, {ChangeEvent,KeyboardEvent} from 'react';
import 'macro-css'
import styles from './Dialogues.module.scss'
import Button from '../Button/Button';

type DialoguesPropsType = {
    dialoguesList: Array<JSX.Element>
    messageList: Array<JSX.Element>
    updateNewMessageText: (currentText: string) => void
    sendMessage: () => void
    newMessageText: string
}

const Dialogues = (props: DialoguesPropsType) => {

    let newMessage = props.newMessageText
    const updateNewMessageTextHandler = (event: ChangeEvent<HTMLInputElement>) => {
        let currentText = event.currentTarget.value
        currentText &&  props.updateNewMessageText(currentText)
    };

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            props.sendMessage()
        }
    };
    return (
        <div className={`${styles.content} d-flex m-20`}>
            <div className={styles.dialoguesListWrapper}>

                <h3>Messages</h3>
                {props.dialoguesList}
            </div>

            <div className={styles.chat}>
                <div className={styles.messagesWrapper}>
                    {props.messageList}
                </div>

                <div className={styles.inputWrapper}>
                    <input value={newMessage}
                           onChange={(event)=>updateNewMessageTextHandler(event)}
                           onKeyDown={(event)=>onEnter(event)}
                           placeholder="Type a new message..."
                           type="text"/>
                    <Button text={'Send'} onClickCallback={props.sendMessage} />
                </div>
            </div>

        </div>
    );
};

export default Dialogues;