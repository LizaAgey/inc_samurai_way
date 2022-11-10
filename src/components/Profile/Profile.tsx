import React from 'react';
import '../../App.css';
import 'macro-css'
import styles from "./Profile.module.scss"

const Profile = () => {
    return (
        <div className={`${styles.content} m-20`}>

            <div className={styles.imgBackground}></div>
            <div className={styles.userImg}>
                <img src="./img/avatar.jpg" alt="avatar"/>
            </div>
            <div className={styles.userInfo}>
                <h3>Billy Way</h3>
                <div className={styles.userDetails}>
                    <p>Date of Birth: <span>2 January</span></p>
                    <p>City: <span>New York</span></p>
                    <p>Education: <span>The Harvard university</span></p>
                    <p>Social media link: <span>@BillyWay</span></p>

                </div>
            </div>

            <div className={`${styles.postsArea} d-flex flex-column`}>
                <h3>
                    <label htmlFor="posts">My posts</label>
                </h3>
                <input className="pl-10" id="posts" type="text" placeholder="Share your news..."/>
                <button>Send</button>
                <div className={`${styles.postCard} d-flex justify-center align-center`}>
                    <img className="m-10" src="./img/avatar.jpg" alt="avatar"/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci atque, dolorem eligendi
                        eos est exercitationem iusto, maiores natus nulla numquam obcaecati pariatur quos sequi sit
                        totam velit veritatis voluptatem.</p>
                </div>
            </div>

        </div>
    );
};

export default Profile;