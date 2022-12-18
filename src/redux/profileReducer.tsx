import {ActionsType, PostCardType, ProfilePageType} from './Store';
import {v1} from 'uuid';

export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
export const ADD_POST = 'ADD-POST'

export const addPostAС = () => ({type: ADD_POST} as const)
export const updateNewPostAС = (newText: string) => ({type: UPDATE_NEW_POST_TEXT, newText: newText} as const)

const profileReducer = (state: ProfilePageType, action: ActionsType) => {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostCardType = {
                id: v1(),
                postText: state.newPostText,
                avatarLink: './img/avatar.jpg',
                isLiked: false,
                likesNumber: 0
            }
            state.postCards.push(newPost)
            state.newPostText = ''
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state;
        default:
            return state;
    }
};

export default profileReducer