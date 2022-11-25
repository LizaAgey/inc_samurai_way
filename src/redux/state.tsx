import {v1} from 'uuid';

export type NavigationElementType = {
    id: string;
    link: string;
    navTitle: string;
    linkIcon: string
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
    id: string
}
export type HeaderType = {
    link: string
    headerTitle: string
}
export type UserType = {
    id: string
    avatar: string
    name: string
    bday: string
    city: string
    education: string
    media: string
}
export type PostCardType = {
    id: string,
    postText: string,
    avatarLink: string,
    isLiked: boolean,
    likesNumber: number
}

type StateType = {
    navigationElements: Array<NavigationElementType>
    dialogues: Array<DialogueType>
    messages: Array<MessageType>
    header: HeaderType
    users: Array<UserType>
    postCards: Array<PostCardType>
}

export const state: StateType = {
    navigationElements: [
        {id: v1(), link: '/profile', navTitle: 'Profile', linkIcon: './img/profile.ico'},
        {id: v1(), link: '/messages', navTitle: 'Dialogues', linkIcon: './img/messages.ico'},
        {id: v1(), link: '/news', navTitle: 'News', linkIcon: './img/news.ico'},
        {id: v1(), link: '/music', navTitle: 'Music', linkIcon: './img/music.ico'},
        {id: v1(), link: '/settings', navTitle: 'Settings', linkIcon: './img/settings.ico'}
    ],
    dialogues: [
        {id: v1(), avatarLink: './img/friends/1.png', friendName: 'Alex Key'},
        {id: v1(), avatarLink: './img/friends/2.png', friendName: 'Martin Bin'},
        {id: v1(), avatarLink: './img/friends/3.png', friendName: 'Bob Wall'},
        {id: v1(), avatarLink: './img/friends/4.png', friendName: 'Billy Han'}
    ],
    messages: [
        {id: v1(), text: 'text1', time: 'time1', userName: 'sender1', avatarLink: './img/friends/1.png'},
        {id: v1(), text: 'text2', time: 'time2', userName: 'sender2', avatarLink: './img/friends/2.png'},
        {id: v1(), text: 'text3', time: 'time3', userName: 'sender3', avatarLink: './img/friends/3.png'},
        {id: v1(), text: 'text4', time: 'time4', userName: 'sender4', avatarLink: './img/friends/4.png'}
    ],
    header: {
        link: './social_network_logo.ico',
        headerTitle: 'Social Network'
    },
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
    ]
};