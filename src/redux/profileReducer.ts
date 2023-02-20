import {v1} from 'uuid';
import {ActionsType} from './redux-store';
import {UserType} from './usersReducer';
import {ProfileResponseType} from '../components/Profile/ProfileContainer';

export type ProfilePageType = {
    users: Array<UserType>
    postCards: Array<PostCardType>
    newPostText: string
    profileInfo: ProfileResponseType | null
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
export const SET_USER_PROFILE = 'SET_USER_PROFILE-POST'

export const addPost = () => ({type: ADD_POST} as const)
export const updateNewPost = (newText: string) => ({type: UPDATE_NEW_POST_TEXT, newText} as const)
export const setUserProfile = (profileInfo: ProfileResponseType) => ({type: SET_USER_PROFILE, profile: profileInfo} as const)

const initialState: ProfilePageType = {
    users: [
        {
            name: 'Billy Way',
            id: 21345678,
            uniqueUrlName: null,
            photos: {small: './img/avatar.jpg', large: './img/avatar.jpg'},
            status: 'Hello, world',
            followed: false
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
    newPostText: '',
    profileInfo: null
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

        case SET_USER_PROFILE:
            return {...state, profileInfo:action.profile}

        default:
            return state;
    }
};

export default profileReducer