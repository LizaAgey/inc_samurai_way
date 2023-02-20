import {ActionsType} from './redux-store';

export type UsersPageType = {
    users: Array<UserType>
    totalUsersCount: number
    usersPerPage: number
    currentPageNumber: number
}
export type UserType = {
    name: string
    id: number
    uniqueUrlName: string | null
    photos: { small: string | null, large: string | null }
    status: string | null
    followed: boolean
}

export const FOLLOW = 'FOLLOW'
export const UNFOLLOW = 'UNFOLLOW'
export const SET_USERS = 'SET_USERS'
export const SET_CURRENT_USERS_PAGE = 'SET_CURRENT_USERS_PAGE'
export const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'

export const followAС = (userID: number) => ({type: FOLLOW, userID} as const)
export const unfollowAС = (userID: number) => ({type: UNFOLLOW, userID} as const)
export const setUsersAC = (users: Array<UserType>) => ({type: SET_USERS, users} as const)
export const setCurrentUsersPageAC = (currentPageNumber: number) => ({
    type: SET_CURRENT_USERS_PAGE,
    currentPageNumber
} as const)
export const setTotalUsersCountAC = (totalUsersCount: number) => ({
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount
} as const)

const initialState: UsersPageType = {
    users: [],
    totalUsersCount: 0,
    usersPerPage: 5,
    currentPageNumber: 1
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
            return {...state, users: action.users}
        case SET_CURRENT_USERS_PAGE:
            return {...state, currentPageNumber: action.currentPageNumber}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount}

        default:
            return state
    }
};

export default usersReducer