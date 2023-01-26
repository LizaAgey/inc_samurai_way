import {v1} from 'uuid';
import {ActionsType} from './redux-store';

export type DialoguesPageType = {
    dialogues: Array<DialogueType>
    messages: Array<MessageType>
    newMessageText: string
}
export type DialogueType = {
    id: string
    avatarLink: string
    friendName: string
}
export type MessageType = {
    avatarLink: string,
    userName: string,
    time: string,
    text: string,
    id: string,
    isOwnMessage: boolean
}

export const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT'
export const SEND_MESSAGE = 'SEND-MESSAGE'

export const sendMessageAC = () => ({type: 'SEND-MESSAGE',} as const)
export const updateNewMessageTextAC = (newMessageText: string) => {
    return {
        type: 'UPDATE-MESSAGE-TEXT',
        newMessageText
    } as const
};

const initialState: DialoguesPageType = {
    dialogues: [
        {id: v1(), avatarLink: './img/friends/1.png', friendName: 'Alex Key'},
        {id: v1(), avatarLink: './img/friends/2.png', friendName: 'Martin Bin'},
        {id: v1(), avatarLink: './img/friends/3.png', friendName: 'Bob Wall'},
        {id: v1(), avatarLink: './img/friends/4.png', friendName: 'Billy Han'}
    ],
    messages: [
        {
            id: v1(),
            text: 'Hello, people! How are you?',
            time: '12:15',
            userName: 'Alex Key',
            avatarLink: './img/friends/1.png',
            isOwnMessage: false
        },
        {
            id: v1(),
            text: '"Hey, Alex. I\'m fine"',
            time: '12:15',
            userName: 'Martin Bin',
            avatarLink: './img/friends/2.png',
            isOwnMessage: false
        },
        {
            id: v1(),
            text: 'Good evening. Thank yoy for your question. Everything is ok. The weather is perfect. Any news from Jane?',
            time: '12:15',
            userName: 'Bob Wall',
            avatarLink: './img/friends/3.png',
            isOwnMessage: false
        },
        {
            id: v1(),
            text: 'Oh, just woke up. Will answer later...',
            time: '12:15',
            userName: 'Billy Han',
            avatarLink: './img/friends/4.png',
            isOwnMessage: false
        },
        {
            id: v1(),
            text: 'Hahaha, there is one sleepy guy here',
            time: '12:15',
            userName: 'Billy Way',
            avatarLink: './img/avatar.jpg',
            isOwnMessage: true
        },
        {
            id: v1(),
            text: 'I woke up at 7:00 am today :(',
            time: '12:15',
            userName: 'Billy Way',
            avatarLink: './img/avatar.jpg',
            isOwnMessage: true
        },
    ],
    newMessageText: ''
}

const dialoguesReducer = (state: DialoguesPageType = initialState, action: ActionsType): DialoguesPageType => {
    switch (action.type) {
        case UPDATE_MESSAGE_TEXT:
            return {...state, newMessageText: action.newMessageText}

        case SEND_MESSAGE:
            let newMessageText = state.newMessageText
            let newMessage: MessageType = {
                id: v1(),
                text: newMessageText,
                time: '12:15',
                userName: 'Billy Wan',
                avatarLink: './img/avatar.jpg',
                isOwnMessage: true
            }
            return {...state, messages: [...state.messages, newMessage], newMessageText: ''}

        default:
            return state;
    }
};

export default dialoguesReducer