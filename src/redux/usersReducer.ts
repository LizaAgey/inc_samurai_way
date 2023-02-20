import {ActionsType} from './redux-store';

export type UsersPageType = {
    users: Array<UserType>
    totalUsersCount: number
    usersPerPage: number
    currentPageNumber: number
    isFetching: boolean
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
export const SET_FETCHING_MODE = 'SET_FETCHING_MODE'

export const follow = (userID: number) => ({type: FOLLOW, userID} as const)
export const unfollow = (userID: number) => ({type: UNFOLLOW, userID} as const)
export const setUsers = (users: Array<UserType>) => ({type: SET_USERS, users} as const)
export const setCurrentUsersPage = (currentPageNumber: number) => ({
    type: SET_CURRENT_USERS_PAGE,
    currentPageNumber
} as const)
export const setTotalUsersCount = (totalUsersCount: number) => ({
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount
} as const)
export const setFetchingMode = (isFetching: boolean) => ({
    type: SET_FETCHING_MODE,
    isFetching
} as const)

const initialState: UsersPageType = {
    users: [],
    totalUsersCount: 0,
    usersPerPage: 5,
    currentPageNumber: 1,
    isFetching: false
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
        case SET_FETCHING_MODE:
            console.log("fetching",action.isFetching)
            return {...state, isFetching: action.isFetching}
        default:
            return state
    }
};

export default usersReducer