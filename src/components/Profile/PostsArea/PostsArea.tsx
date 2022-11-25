import React from 'react';
import styles from './PostsArea.module.scss';
import Button from '../../Button/Button';
import PostCard from './PostCard/PostCard';
import {PostCardType} from '../../../index';

type PostsAreaPropsType = {
    postCards: Array<PostCardType>
}

const PostsArea= (props: PostsAreaPropsType) => {
    const getPostCardsList =  props.postCards.map((postCard) => {
        return  (
            <PostCard
                id={postCard.id}
                postText={postCard.postText}
                avatarLink={postCard.avatarLink}
                isLiked={postCard.isLiked}
                likesNumber={postCard.likesNumber}
            />
        )
    })

    return (
        <div className={`${styles.postsArea} d-flex flex-column`}>
            <h3>
                <label htmlFor="posts">My posts</label>
            </h3>

            <textarea className="p-10" id="posts" placeholder="Share your news..." rows={1} cols={5}/>
            <Button text={'Send'}/>

            {getPostCardsList}
        </div>
    );
};

export default PostsArea;