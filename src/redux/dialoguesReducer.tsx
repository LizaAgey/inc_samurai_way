import {ActionsType, MessageType} from './Store';
import {v1} from 'uuid';

export const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT'
export const SEND_MESSAGE = 'SEND-MESSAGE'

export const sendMessageAC = () => ({type: 'SEND-MESSAGE',} as const)
export const updateNewMessageTextAC = (newMessageText: string) => {
    return {
        type: 'UPDATE-MESSAGE-TEXT',
        newMessageText
    } as const
};

const dialoguesReducer = (state: any, action: ActionsType) => {
    switch (action.type) {
        case UPDATE_MESSAGE_TEXT:
            state.newMessageText = action.newMessageText
            return state;
        case SEND_MESSAGE:
            let newMessageText = state.newMessageText
            state.newMessageText = ''
            let newMessage: MessageType = {
                id: v1(),
                text: newMessageText,
                time: '12:15',
                userName: 'Billy Wan',
                avatarLink: './img/avatar.jpg',
                isOwnMessage: true
            }
            state.messages.push(newMessage)
            return state;
        default:
            return state;
    }
};

export default dialoguesReducer