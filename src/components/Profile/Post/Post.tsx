import React from 'react';
import styles from "./Post.module.scss";
import Button from "../../Button/Button";
import PostCard from "./PostCard/PostCard";

//TODO: --------------------"ANY" is the component type !!!
type PostType = any

const Post: React.FC<PostType> = (props) => {
    debugger
    return (
        <div className={`${styles.postsArea} d-flex flex-column`}>
            <h3>
                <label htmlFor="posts">My posts</label>
            </h3>
            <textarea className="p-10" id="posts" placeholder="Share your news..." rows={1} cols={5}/>
            <Button text={"Send"}/>
            <PostCard
                postText={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci atque, dolorem eligendi eos est exercitationem iusto, maiores natus nulla numquam obcaecati pariatur quos sequi sit totam velit veritatis voluptatem."}
                avatar={"./img/avatar.jpg"}
                isLiked={true}
                likesNumber={5}/>
            <PostCard
                postText={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci atque, dolorem eligendi eos est exercitationem iusto, maiores natus nulla numquam obcaecati pariatur quos sequi sit totam velit veritatis voluptatem."}
                avatar={"./img/avatar.jpg"}
                isLiked={false}
                likesNumber={0}/>
        </div>
    );
};

export default Post;