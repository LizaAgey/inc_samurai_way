import React from 'react';
import PostCard from './PostCard/PostCard';
import {ActionsType} from '../../../redux/Store';
import {addPostAС, updateNewPostAС} from '../../../redux/profileReducer';
import PostsArea from './PostsArea';
import {StoreContext} from './../../../context/StoreContext';

const PostsAreaContainer = () => {
    return <StoreContext.Consumer>
        {
            (store) => {
                let state = store.getState().profilePage

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
                const addPost = () => {
                    store.dispatch(addPostAС())
                };
                const onPostChange = (newText: string) => {
                    let action: ActionsType = updateNewPostAС(newText)
                    store.dispatch(action)
                };

                return <PostsArea
                    addPost={addPost}
                    updateNewPostText={onPostChange}
                    postCardElements={getPostCardsList}
                    newPostText={state.newPostText}
                />
            }
        }
    </StoreContext.Consumer>


};

export default PostsAreaContainer;