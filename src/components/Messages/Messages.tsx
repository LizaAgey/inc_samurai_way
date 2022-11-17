import React from 'react';
import 'macro-css'
import styles from "./Messages.module.scss"
import {NavLink} from "react-router-dom";

type DialogueType = {
    id: number
    avatarLink: string
    friendName: string
}

type MessagesInfoType = {
    friendsInfo: Array<DialogueType>
}

let dialoguesList: Array<JSX.Element> = []

type MessageInfoType = {
    avatarLink:string,
    userName:string,
    time:string,
    text:string,
}


const Message: React.FC<MessageInfoType> = (props) => {
 return (
     <div>
         <img src={props.avatarLink} alt="user avatar"/>
         <p>{props.time}</p>
         <p>{props.userName}</p>
         <p>{props.text}</p>
     </div>
 );
};


const Messages: React.FC<MessagesInfoType> = (props) => {

    const getDialoguesList = (dialogue: DialogueType) => {
        return (
            <NavLink to={`/messages/${dialogue.id}`} className={`${styles.dialogWrapper} d-flex`}>
                <img src={dialogue.avatarLink} alt="friendAvatar"/>
                <p>{dialogue.friendName}</p>
            </NavLink>
        )
    };

    dialoguesList = props.friendsInfo.map(getDialoguesList)


    return (
        <div className={`${styles.content} d-flex m-20`}>
            <div className={styles.dialoguesListWrapper}>
                <h3>Messages</h3>
                {dialoguesList}
            </div>

            <div className="chatWrapper">
                <Message
                    avatarLink ={"../img/friends/1.png"}
                userName ={"Bob"}
                time={"12:00"}
                text={"Hello, Billy"}
                />

            </div>

        </div>
    );
};

export default Messages;