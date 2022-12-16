import React from 'react';
import styles from './PostsArea.module.scss';
import Button from '../../Button/Button';
import PostCard from './PostCard/PostCard';
import {
    ActionsType,
    PostCardType,
    addPostAС,
    updateNewPostAС
} from '../../../redux/Store';

type PostsAreaPropsType = {
    postCards: Array<PostCardType>
    newPostText: string
    dispatch: (action: ActionsType) => void
}

const PostsArea = (props: PostsAreaPropsType) => {
    const getPostCardsList = props.postCards.map((postCard) => {
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
    let newPostCard = React.createRef<HTMLTextAreaElement>()

    const addPostHandler = () => {
        props.dispatch(addPostAС())
    };

    const onPostChange = () => {
        let newText = newPostCard.current?.value
        if (newText) {
            let action: ActionsType = updateNewPostAС(newText)
            props.dispatch(action)
        }
    };
    return (
        <div className={`${styles.postsArea} d-flex flex-column`}>
            <h3>
                <label htmlFor="posts">My posts</label>
            </h3>

            <textarea
                ref={newPostCard}
                className="p-10"
                id="posts"
                placeholder="Share your news..."
                rows={1} cols={5}
                value={props.newPostText}
                onChange={onPostChange}
            />
            <Button text={'Add post'} onClickCallback={addPostHandler}/>
            <div className={styles.postsList}>
                {getPostCardsList}
            </div>
        </div>
    );
};

export default PostsArea;