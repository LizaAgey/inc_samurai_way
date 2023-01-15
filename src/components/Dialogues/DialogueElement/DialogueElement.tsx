import React from 'react';
import 'macro-css'
import styles from "./../Dialogues.module.scss"
import {NavLink} from "react-router-dom";
import {DialogueType} from '../../../redux/dialoguesReducer';

const DialogueElement: React.FC<DialogueType> = (props) => {
    return (
        <NavLink to={`/messages/${props.id}`} className={`${styles.dialogWrapper} d-flex`}>
            <img src={props.avatarLink} alt="friendAvatar"/>
            <p>{props.friendName}</p>
        </NavLink>
    )
};

export default DialogueElement;