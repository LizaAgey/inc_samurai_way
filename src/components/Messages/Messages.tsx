import React from 'react';
import 'macro-css'
import styles from "./Messages.module.scss"
import {NavLink} from "react-router-dom";
import {v1} from 'uuid';

type DialogueType = {
    id: string
    avatarLink: string
    friendName: string
}
type MessagesInfoType = {
    friendsInfo: Array<DialogueType>
}
type MessageInfoType = {
    avatarLink:string,
    userName:string,
    time:string,
    text:string,
    id: string
}


let messagesData: Array<MessageInfoType> = [
    {id: v1(), text: "text1", time:"time1", userName: "sender1", avatarLink:"./img/friends/1.png"},
    {id: v1(), text: "text2", time:"time2", userName: "sender2", avatarLink:"./img/friends/2.png"},
    {id: v1(), text: "text3", time:"time3", userName: "sender3", avatarLink:"./img/friends/3.png"},
    {id: v1(), text: "text4", time:"time4", userName: "sender4", avatarLink:"./img/friends/4.png"}
]
let messageList = messagesData.map((message) => {
 return (
     <div>
         <img src={message.avatarLink} alt="user avatar"/>
         <p>{message.time}</p>
         <p>{message.userName}</p>
         <p>{message.text}</p>
     </div>
 )})


const Messages: React.FC<MessagesInfoType> = (props) => {

    let dialoguesList = props.friendsInfo.map((dialogue)=> {
        return (
            <NavLink to={`/messages/${dialogue.id}`} className={`${styles.dialogWrapper} d-flex`}>
                <img src={dialogue.avatarLink} alt="friendAvatar"/>
                <p>{dialogue.friendName}</p>
            </NavLink>
        )
    })


    return (
        <div className={`${styles.content} d-flex m-20`}>
            <div className={styles.dialoguesListWrapper}>
                <h3>Messages</h3>
                {dialoguesList}
            </div>

            <div className="chatWrapper">
                {messageList}
            </div>

        </div>
    );
};

export default Messages;