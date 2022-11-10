import React from 'react';
import '../App.css';
import 'macro-css'

type HeaderType = {
    src: string;
    headerTitle: string;
}

const Header: React.FC<HeaderType> = (props) => {
    return (
        <header className="header d-flex ">
            <img className="mt-10 mb-10 ml-30" src={props.src} alt="logo"/>
            <h3 className='ml-25 mt-25'>{props.headerTitle}</h3>
        </header>
    );
};

export default Header;

