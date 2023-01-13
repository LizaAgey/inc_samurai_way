import React from 'react';
import PostCard from './PostCard/PostCard';
import {ActionsType, PostCardType} from '../../../redux/Store';
import {addPostAС, updateNewPostAС} from '../../../redux/profileReducer';
import PostsArea from './PostsArea';
import {ReduxStoreType} from '../../../redux/redux-store';

type PostsAreaContainerPropsType = {
    store: ReduxStoreType
}

const PostsAreaContainer = (props: PostsAreaContainerPropsType) => {
    let state=props.store.getState().profilePage

    const getPostCardsList: Array<JSX.Element> = state.postCards.map((postCard) => {
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
    const addPost = () =>  {
        props.store.dispatch(addPostAС())
    };
    const onPostChange = (newText: string) => {
        let action: ActionsType = updateNewPostAС(newText)
        props.store.dispatch(action)
    };

    return <PostsArea
        addPost={addPost}
        updateNewPostText={onPostChange}
        postCardElements={getPostCardsList}
        newPostText={state.newPostText}
    />

};

export default PostsAreaContainer;