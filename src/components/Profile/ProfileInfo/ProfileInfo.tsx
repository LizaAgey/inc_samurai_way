import React from 'react';
import styles from './ProfileInfo.module.scss';
import userWithoutPhotoImg from '../../../assets/img/users/user-without-photo.png'
import {ProfileResponseType} from '../ProfileContainer';

type ProfileInfoPropsType = {
    profileInfo: ProfileResponseType
}

const ProfileInfo = ({profileInfo}: ProfileInfoPropsType) => {
    return (
        <>
            {/*<div className={styles.imgBackground}></div>*/}
            <div className={styles.userImg}>
                <img src={profileInfo.photos.large !== null ? profileInfo.photos.large : userWithoutPhotoImg}
                     alt="avatar"/>
            </div>
            <div className={styles.userInfo}>
                <h3>{profileInfo.fullName}</h3>
                <div className={styles.userDetails}>
                    {profileInfo.aboutMe && <p>About me: <span>{profileInfo.aboutMe}</span></p>}
                    <br/>
                    {profileInfo.contacts.facebook && <p>Facebook: <span>{profileInfo.contacts.facebook}</span></p>}
                    {profileInfo.contacts.website && <p>Website: <span>{profileInfo.contacts.website}</span></p>}
                    {profileInfo.contacts.vk && <p>VK: <span>{profileInfo.contacts.vk}</span></p>}
                    {profileInfo.contacts.twitter && <p>Twitter: <span>{profileInfo.contacts.twitter}</span></p>}
                    {profileInfo.contacts.instagram && <p>Instagram: <span>{profileInfo.contacts.instagram}</span></p>}
                    {profileInfo.contacts.youtube && <p>Youtube: <span>{profileInfo.contacts.youtube}</span></p>}
                    {profileInfo.contacts.github && <p>GitHub: <span>{profileInfo.contacts.github}</span></p>}
                    <br/>
                    {profileInfo.lookingForAJob && <p>Looking for a job: <span>{profileInfo.lookingForAJob ? "Yes!" : "No"}</span></p>}
                    {profileInfo.lookingForAJob && profileInfo.lookingForAJobDescription &&
                        <p>Job description: <span>{profileInfo.lookingForAJobDescription}</span></p>}


                </div>
            </div>
        </>
    );
};

export default ProfileInfo;