import {ActionsType, PostCardType, ProfilePageType} from './Store';
import {v1} from 'uuid';

export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
export const ADD_POST = 'ADD-POST'

export const addPostAС = () => ({type: ADD_POST} as const)
export const updateNewPostAС = (newText: string) => ({type: UPDATE_NEW_POST_TEXT, newText: newText} as const)

const initialState: ProfilePageType =  {
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

const profileReducer = (state: ProfilePageType = initialState, action: ActionsType) => {
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