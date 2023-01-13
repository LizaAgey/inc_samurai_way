import React, {ChangeEvent,KeyboardEvent} from 'react';
import 'macro-css'
import styles from './Dialogues.module.scss'
import Button from '../Button/Button';
import Input from '../Input/Input';

type DialoguesPropsType = {
    dialoguesList: Array<JSX.Element>
    messageList: Array<JSX.Element>
    updateNewMessageText: (currentText: string) => void
    sendMessage: () => void
    newMessageText: string
}

const Dialogues = (props: DialoguesPropsType) => {

    let newMessage = props.newMessageText
    const updateNewMessageText = (event: ChangeEvent<HTMLInputElement>) => {
        let currentText = event.currentTarget.value
        currentText &&  props.updateNewMessageText(currentText)
    };

    const onEnterSendMessage = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
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

                    <Input
                        value={newMessage}
                        onChange={updateNewMessageText}
                        onKeyDown={onEnterSendMessage}
                        placeholder="Type a new message..."
                    />
                    <Button text={'Send'} onClickCallback={props.sendMessage} />
                </div>
            </div>

        </div>
    );
};

export default Dialogues;