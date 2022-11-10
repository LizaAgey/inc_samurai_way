import React from 'react';
import styles from "../Profile.module.scss";
import Button from "../../Button/Button";

const Post = () => {
    return (
        <div className={`${styles.postsArea} d-flex flex-column`}>
            <h3>
                <label htmlFor="posts">My posts</label>
            </h3>
            <input className="pl-10" id="posts" type="text" placeholder="Share your news..."/>
            <Button text={"Send"} />
            <div className={`${styles.postCard} d-flex justify-center align-center`}>
                <img className="m-10" src="./img/avatar.jpg" alt="avatar"/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci atque, dolorem eligendi
                    eos est exercitationem iusto, maiores natus nulla numquam obcaecati pariatur quos sequi sit
                    totam velit veritatis voluptatem.</p>
            </div>
        </div>
    );
};

export default Post;