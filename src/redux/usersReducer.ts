import {v1} from 'uuid';
import {ActionsType} from './redux-store';

export type UsersPageType = {
    users: Array<UserType>
}
export type UserType = {
    id: string
    avatar: string
    name: string
    bday: string
    location: { city: string, country: string }
    education: string
    media: string
    status: string
    isFollowed: boolean
}

export const FOLLOW = 'FOLLOW'
export const UNFOLLOW = 'UNFOLLOW'
export const SET_USERS = 'SET_USERS'

export const followAС = (userID: string) => ({type: FOLLOW, userID} as const)
export const unfollowAС = (userID: string) => ({type: UNFOLLOW, userID} as const)
export const setUsersAC = (users: Array<UserType>) => ({type: SET_USERS, users} as const)


const initialState: UsersPageType = {
    users: []
}

const usersReducer = (state: UsersPageType = initialState, action: ActionsType): UsersPageType => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users:
                    state.users.map((user) => {
                        if (user.id === action.userID) {
                            return {...user, isFollowed: true}
                        }
                        return user
                    })
            }

        case UNFOLLOW:
            return {
                ...state,
                users:
                    state.users.map((user) => {
                        if (user.id === action.userID) {
                            return {...user, isFollowed: false}
                        }
                        return user
                    })
            }

        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}

        default:
            return state;
    }
};

export default usersReducer