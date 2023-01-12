import React from 'react';
import styles from "./Header.module.scss"
import 'macro-css'

const Header = (props: any) => {
    return (
        <header className={`${styles.header} d-flex`} >
            <img className="mt-10 mb-10 ml-30" src={'./social_network_logo.ico'} alt="logo"/>
            <h3 className='ml-25 mt-25'>Social Network</h3>
        </header>
    );
};

export default Header;

