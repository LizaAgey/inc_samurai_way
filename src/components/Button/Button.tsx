import React from 'react';
import styles from "./Button.module.scss"

type ButtonType = {
    text: string
}

const Button: React.FC<ButtonType> = (props) => {
    return (
        <button className={styles.button}>{props.text}</button>
    );
};

export default Button;