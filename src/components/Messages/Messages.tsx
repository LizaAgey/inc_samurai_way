import React from 'react';
import 'macro-css'
import styles from "./Messages.module.scss"

type DialogType = {
    avatarLink: string
    friendName: string
}

type DialoguesInfoType = {
    friendsInfo: Array<DialogType>
}

let dialoguesList: Array<JSX.Element> = []


const Messages: React.FC<DialoguesInfoType> = (props) => {

    const getDialoguesList = (item: DialogType) => {
        return (
            <div className={`${styles.dialoguesListWrapper} d-flex`}>
                <img src={item.avatarLink} alt="friendAvatar"/>
                <p>{item.friendName}</p>
            </div>
        )
    };

    dialoguesList = props.friendsInfo.map(getDialoguesList)


    return (
        <div className={`${styles.content} d-flex m-20`}>
            <div className={styles.dialoguesWrapper}>
                <h3>Messages</h3>
                {dialoguesList}
            </div>

            <div className="chatWrapper">
                chat
            </div>

        </div>
    );
};

export default Messages;