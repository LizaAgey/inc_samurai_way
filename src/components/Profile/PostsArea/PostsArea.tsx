import React from 'react';
import styles from './PostsArea.module.scss';
import Button from '../../Button/Button';
import PostCard from './PostCard/PostCard';
import {PostCardType} from '../../../redux/state';

type PostsAreaPropsType = {
    postCards: Array<PostCardType>
    addPost: (postText: string) => void
}

const PostsArea = (props: PostsAreaPropsType) => {
    const getPostCardsList = props.postCards.map((postCard) => {
        return (
            <PostCard
                id={postCard.id}
                postText={postCard.postText}
                avatarLink={postCard.avatarLink}
                isLiked={postCard.isLiked}
                likesNumber={postCard.likesNumber}
            />
        )
    })
    let newPostCard = React.createRef<HTMLTextAreaElement>()
    const addPost = () => {
        debugger
        let postText = newPostCard.current?.value
        postText && props.addPost(postText)
        if(newPostCard.current) {  newPostCard.current.value= ""}
    };


    return (
        <div className={`${styles.postsArea} d-flex flex-column`}>
            <h3>
                <label htmlFor="posts">My posts</label>
            </h3>

            <textarea ref={newPostCard} className="p-10" id="posts" placeholder="Share your news..." rows={1} cols={5}/>
            <Button text={'Add post'} onClickCallback={addPost}/>
            <div className={styles.postsList}>
                {getPostCardsList}
            </div>
        </div>
    );
};

export default PostsArea;