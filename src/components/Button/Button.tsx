import React from 'react';
import styles from "./Button.module.scss"

type ButtonType = {
    text: string
    onClickCallback: () => void
}

const Button: React.FC<ButtonType> = (props) => {
    const onClickHandler = () => {
     props.onClickCallback()
    };

    return (
        <button
            className={styles.button}
            onClick={onClickHandler}
        >{props.text}</button>
    );
};

export default Button;