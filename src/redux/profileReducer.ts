import {v1} from 'uuid';
import {ActionsType} from './redux-store';

export type ProfilePageType = {
    users: Array<UserType>
    postCards: Array<PostCardType>
    newPostText: string
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

export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
export const ADD_POST = 'ADD-POST'

export const addPostAС = () => ({type: ADD_POST} as const)
export const updateNewPostAC = (newText: string) => ({type: UPDATE_NEW_POST_TEXT, newText: newText} as const)

const initialState: ProfilePageType = {
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
}

const profileReducer = (state: ProfilePageType = initialState, action: ActionsType): ProfilePageType => {

    switch (action.type) {
        case ADD_POST:
            let newPost: PostCardType = {
                id: v1(),
                postText: state.newPostText,
                avatarLink: './img/avatar.jpg',
                isLiked: false,
                likesNumber: 0
            }
            return {...state, postCards: [...state.postCards, newPost], newPostText: ''}

        case UPDATE_NEW_POST_TEXT:
            return {...state, newPostText: action.newText}

        default:
            return state;
    }
};

export default profileReducer