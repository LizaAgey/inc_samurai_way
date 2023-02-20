import React, {ChangeEvent, KeyboardEvent} from 'react';
import styles from './PostsArea.module.scss';
import Button from '../../Button/Button';
import Input from '../../Input/Input';
import {PostsAreaPropsType} from './PostsAreaContainer';

const PostsArea = (props: PostsAreaPropsType) => {

    const updateNewPostText = (event: ChangeEvent<HTMLInputElement>) => {
        debugger
        let currentText = event.currentTarget.value
        if (currentText || currentText === '') {
            props.updateNewPost(currentText)
        }
    };
    const onEnterAddPost = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            props.addPost()
        }
    };

    return (
        <div className={`${styles.postsArea} d-flex flex-column`}>
            <h3>My posts</h3>

            <div className={styles.inputWrapper}>
                <Input
                    value={props.newPostText}
                    onChange={updateNewPostText}
                    onKeyDown={onEnterAddPost}
                    placeholder={'Share your news...'}
                />
                <Button text={'Add post'} onClickCallback={props.addPost}/>
            </div>

            <div className={styles.postsList}>
                {props.postCardElements}
            </div>
        </div>
    );
};

export default PostsArea;