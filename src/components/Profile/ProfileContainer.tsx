import React from 'react';
import Profile from './Profile';
import * as axios from 'axios';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {setUserProfile} from '../../redux/profileReducer';
import {RouteComponentProps, withRouter} from 'react-router-dom';

export type ProfileResponseType = {
    aboutMe: string | null
    contacts: {
        facebook: string | null,
        website: string | null,
        vk: string | null,
        twitter: string | null,
        instagram: string | null,
        youtube: string | null,
        github: string | null,
        mainLink: string | null,
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: string | null,
    fullName: string | null,
    userId: number,
    photos: {
        small: string | null,
        large: string | null,
    }
}
type MapStateToPropsType = {
    profileInfo: ProfileResponseType | null
}
type MapDispatchToPropsType = {
    setUserProfile: (profileInfo: ProfileResponseType) => void
}
export type ProfileOwnPropsType = MapStateToPropsType & MapDispatchToPropsType
type RouteParamsPropsType = {
    userId: string | undefined
}
type ProfileCombinedPropsType = RouteComponentProps<RouteParamsPropsType> & ProfileOwnPropsType

class ProfileContainer extends React.Component<ProfileCombinedPropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = "2"
        }
        axios.default.get<ProfileResponseType>(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })

    }

    render() {
        return <Profile {...this.props}/>
    }

};
let WithURLDataProfileContainer = withRouter(ProfileContainer)


const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({profileInfo: state.profilePage.profileInfo})

export default connect(mapStateToProps, {setUserProfile})(WithURLDataProfileContainer);