import React from 'react';
import styles from "./Header.module.scss"
import 'macro-css'
import {HeaderType} from '../../redux/Store';

type HeaderPropsType = {
    header: HeaderType
}

const Header = (props: HeaderPropsType) => {
    return (
        <header className={`${styles.header} d-flex`} >
            <img className="mt-10 mb-10 ml-30" src={props.header.link} alt="logo"/>
            <h3 className='ml-25 mt-25'>{props.header.headerTitle}</h3>
        </header>
    );
};

export default Header;

