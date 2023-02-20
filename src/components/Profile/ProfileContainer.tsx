import React from 'react';
import Profile from './Profile';
import * as axios from 'axios';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {setUserProfile} from '../../redux/profileReducer';

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
export type ProfileCombinedPropsType = MapStateToPropsType & MapDispatchToPropsType
type MapStateToPropsType = {
    profileInfo: ProfileResponseType | null
}
type MapDispatchToPropsType = {
    setUserProfile: (profileInfo: ProfileResponseType) => void
}

class ProfileContainer extends React.Component<ProfileCombinedPropsType> {
    componentDidMount() {
        axios.default.get<ProfileResponseType>(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })

    }

    render() {
        return <Profile {...this.props}/>
    }

};

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({profileInfo: state.profilePage.profileInfo})

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);