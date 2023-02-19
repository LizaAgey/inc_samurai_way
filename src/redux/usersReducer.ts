import {ActionsType} from './redux-store';

export type UsersPageType = {
    users: Array<UserType>
}
export type UserType = {
    name: string
    id:number
    uniqueUrlName: string | null
    photos: {small: string | null, large: string | null}
    status: string | null
    followed : boolean
}

export const FOLLOW = 'FOLLOW'
export const UNFOLLOW = 'UNFOLLOW'
export const SET_USERS = 'SET_USERS'

export const followAС = (userID: number) => ({type: FOLLOW, userID} as const)
export const unfollowAС = (userID: number) => ({type: UNFOLLOW, userID} as const)
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
                            return {...user, followed: true}
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
                            return {...user, followed: false}
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