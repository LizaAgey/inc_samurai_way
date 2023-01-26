import {v1} from 'uuid';
import profileReducer, {ProfilePageType} from './profileReducer';
import dialoguesReducer, {DialoguesPageType} from './dialoguesReducer';
import sidebarReducer, {SidebarPageType} from './sidebarReducer';
import {ActionsType} from './redux-store';

type StateType = {
    profilePage: ProfilePageType
    dialoguesPage: DialoguesPageType
    sidebarPage: SidebarPageType
}
type StoreType = {
    _state: StateType
    _callSubscriber: () => void
    subscribe: (callback: () => void) => void
    getState: () => StateType
    dispatch: (action: ActionsType) => void
}

export const store_for_study: StoreType = {
    _state: {
        profilePage: {
            users: [
                {
                    id: v1(),
                    avatar: './img/avatar.jpg',
                    name: 'Billy Way',
                    bday: '2 January',
                    city: 'New York',
                    education: 'The Harvard university',
                    media: '@BillyWay'
                }
            ],
            postCards: [
                {
                    id: v1(),
                    postText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci atque, dolorem eligendi eos est exercitationem iusto, maiores natus nulla numquam obcaecati pariatur quos sequi sit totam velit veritatis voluptatem.',
                    avatarLink: './img/avatar.jpg',
                    isLiked: true,
                    likesNumber: 5
                }, {
                    id: v1(),
                    postText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci atque, dolorem eligendi eos est exercitationem iusto, maiores natus nulla numquam obcaecati pariatur quos sequi sit totam velit veritatis voluptatem.',
                    avatarLink: './img/avatar.jpg',
                    isLiked: false,
                    likesNumber: 0
                },
            ],
            newPostText: ''
        },
        dialoguesPage: {
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
        },
        sidebarPage: {
            navigationElements: [
                {id: v1(), link: '/profile', navTitle: 'Profile', linkIcon: './img/profile.ico'},
                {id: v1(), link: '/messages', navTitle: 'Dialogues', linkIcon: './img/messages.ico'},
                {id: v1(), link: '/news', navTitle: 'News', linkIcon: './img/news.ico'},
                {id: v1(), link: '/music', navTitle: 'Music', linkIcon: './img/music.ico'},
                {id: v1(), link: '/settings', navTitle: 'Settings', linkIcon: './img/settings.ico'}
            ],
            friends: [
                {id: v1(), avatarLink: './img/friends/1.png', friendName: 'Alex Key'},
                {id: v1(), avatarLink: './img/friends/2.png', friendName: 'Martin Bin'},
                {id: v1(), avatarLink: './img/friends/3.png', friendName: 'Bob Wall'},
                {id: v1(), avatarLink: './img/friends/4.png', friendName: 'Billy Han'}
            ]
        },
    },
    _callSubscriber() {
    },
    subscribe(callback: () => void) {
        this._callSubscriber = callback
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialoguesPage = dialoguesReducer(this._state.dialoguesPage, action)
        this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action)

        this._callSubscriber()
    },
}