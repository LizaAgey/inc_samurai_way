import React from 'react';
import PostCard from './PostCard/PostCard';
import {addPostAС, updateNewPostAC} from '../../../redux/profileReducer';
import PostsArea from './PostsArea';
import {ActionsType, AppStateType} from '../../../redux/redux-store';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';

type MapStatePropsType = {
    postCardElements: Array<JSX.Element>
    newPostText: string
}

type MapDispatchPropsType = {
    addPost: () => void
    updateNewPostText: (newText: string) => void
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

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addPost: () => {
            dispatch(addPostAС())
        },
        updateNewPostText: (newText: string) => {
            let action: ActionsType = updateNewPostAC(newText)
            dispatch(action)
        }
    };
};

const PostsAreaContainer = connect(mapStateToProps, mapDispatchToProps)(PostsArea)

export default PostsAreaContainer;