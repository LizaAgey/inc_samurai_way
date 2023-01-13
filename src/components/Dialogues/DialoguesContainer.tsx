import React from 'react';
import 'macro-css'
import Message from './Message/Message';
import DialogueElement from './DialogueElement/DialogueElement';
import {sendMessageAC, updateNewMessageTextAC} from '../../redux/dialoguesReducer';
import {ReduxStoreType} from '../../redux/redux-store';
import Dialogues from './Dialogues';

type DialoguesPropsType = {
    store: ReduxStoreType
}

const DialoguesContainer = ({store}: DialoguesPropsType) => {
    let state = store.getState().dialoguesPage
    let messageList: Array<JSX.Element> = state.messages.map((message) => {
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
    let dialoguesList: Array<JSX.Element> = state.dialogues.map((dialogue) => {
        return (
            <DialogueElement
                key={dialogue.id}
                id={dialogue.id}
                avatarLink={dialogue.avatarLink}
                friendName={dialogue.friendName}
            />
        )
    })

    const sendMessageHandler = () => {
        store.dispatch(sendMessageAC())
    };
    const updateNewMessageText = (currentText: string) => {
        store.dispatch(updateNewMessageTextAC(currentText))
    };

    return <Dialogues
        dialoguesList={dialoguesList}
        messageList={messageList}
        updateNewMessageText={updateNewMessageText}
        sendMessage={sendMessageHandler}
        newMessageText={state.newMessageText}
    />

};

export default DialoguesContainer;