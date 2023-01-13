import React from 'react';
import styles from './PostsArea.module.scss';
import Button from '../../Button/Button';

type PostsAreaPropsType = {
    postCardElements: Array<JSX.Element>
    newPostText: string
    updateNewPostText: (newText: string) => void
    addPost: () => void
}

const PostsArea = (props: PostsAreaPropsType) => {
    let newPostCard = React.createRef<HTMLTextAreaElement>()

    const addPostHandler = () => {
        props.addPost()
    };

    const onPostChangeHandler = () => {
        let newText = newPostCard.current?.value
        newText && props.updateNewPostText(newText)
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
                onChange={onPostChangeHandler}
            />
            <Button text={'Add post'} onClickCallback={addPostHandler}/>

            <div className={styles.postsList}>
                {props.postCardElements}
            </div>
        </div>
    );
};

export default PostsArea;