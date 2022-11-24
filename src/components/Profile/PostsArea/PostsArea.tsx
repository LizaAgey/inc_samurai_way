import React from 'react';
import styles from './PostsArea.module.scss';
import Button from '../../Button/Button';
import PostCard from './PostCard/PostCard';
import {v1} from 'uuid';


//TODO: --------------------"ANY" is the component type !!!
type PostsAreaType = any
type PostCardType = {
    id: string,
    postText: string,
    avatarLink: string,
    isLiked: boolean,
    likesNumber: number
}

const postCardsData: Array<PostCardType> = [
    {
        id: v1(),
        postText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci atque, dolorem eligendi eos est exercitationem iusto, maiores natus nulla numquam obcaecati pariatur quos sequi sit totam velit veritatis voluptatem.',
        avatarLink: './img/avatar.jpg',
        isLiked: true,
        likesNumber: 5
    }, {
        id: v1(),
        postText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci atque, dolorem eligendi eos est exercitationem iusto, maiores natus nulla numquam obcaecati pariatur quos sequi sit totam velit veritatis voluptatem.',
        avatarLink: './img/avatar.jpg',
        isLiked: false,
        likesNumber: 0
    },
]

const getPostCardsList =  postCardsData.map((postCard) => {
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

const PostsArea: React.FC<PostsAreaType> = (props) => {
    debugger
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