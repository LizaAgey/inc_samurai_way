import React from 'react';
import PostCard from './PostCard/PostCard';
import {addPost, updateNewPost} from '../../../redux/profileReducer';
import PostsArea from './PostsArea';
import {AppStateType} from '../../../redux/redux-store';
import {connect} from 'react-redux';

type MapStatePropsType = {
    postCardElements: Array<JSX.Element>
    newPostText: string
}

type MapDispatchPropsType = {
    addPost: () => void
    updateNewPost: (newText: string) => void
}

export type PostsAreaPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    let localState = state.profilePage

    const getPostCardsList: Array<JSX.Element> = localState.postCards.map((postCard) => {
        return (
            <PostCard
                key={postCard.id}
                id={postCard.id}
                postText={postCard.postText}
                avatarLink={postCard.avatarLink}
                isLiked={postCard.isLiked}
                likesNumber={postCard.likesNumber}
            />
        )
    })
    return {
        postCardElements: getPostCardsList,
        newPostText: localState.newPostText
    };
};

const PostsAreaContainer = connect(mapStateToProps, {addPost, updateNewPost})(PostsArea)

export default PostsAreaContainer;