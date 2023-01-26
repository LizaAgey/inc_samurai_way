import {v1} from 'uuid';
import {FriendType} from '../components/Sidebar/Friends/Friends';
import {ActionsType} from './redux-store';
import {NavigationElementType} from '../components/Sidebar/Navigation/NavigationElement';

export type SidebarPageType = {
    navigationElements: Array<NavigationElementType>
    friends: Array<FriendType>
}

const initialState: SidebarPageType =  {
    navigationElements: [
        {id: v1(), link: '/profile', navTitle: 'Profile', linkIcon: './img/profile.ico'},
        {id: v1(), link: '/messages', navTitle: 'Dialogues', linkIcon: './img/messages.ico'},
        {id: v1(), link: '/news', navTitle: 'News', linkIcon: './img/news.ico'},
        {id: v1(), link: '/music', navTitle: 'Music', linkIcon: './img/music.ico'},
        {id: v1(), link: '/users', navTitle: 'Users', linkIcon: './img/users.ico'},
        {id: v1(), link: '/settings', navTitle: 'Settings', linkIcon: './img/settings.ico'},
    ],
    friends: [
        {id: v1(), avatarLink: './img/friends/1.png', friendName: 'Alex Key'},
        {id: v1(), avatarLink: './img/friends/2.png', friendName: 'Martin Bin'},
        {id: v1(), avatarLink: './img/friends/3.png', friendName: 'Bob Wall'},
        {id: v1(), avatarLink: './img/friends/4.png', friendName: 'Billy Han'}
    ]
}

const sidebarReducer = (state: SidebarPageType = initialState, action: ActionsType):SidebarPageType => {
    return state;
};

export default sidebarReducer