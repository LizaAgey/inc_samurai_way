import React from 'react';
import 'macro-css'
// import styles from "./Header.module.scss"

// type for data which is inserted into <a> in navigation
type NavLinkType = {
    link: string;
    navTitle: string;
    className: string
}

//type for props
type NavigationType = {
    mainNavLinks: Array<NavLinkType>;
}

let mainNavigation: Array<JSX.Element> = []

const Navigation: React.FC<NavigationType> = (props) => {

    //loop array with data for main navigation links into <a>
    // push each <a> to new array to render it below
    props.mainNavLinks.forEach(value => {
        mainNavigation.push(<a href={value.link} className={value.className}>{value.navTitle} </a>)
    })

    return (
        <nav className="navigation m-20 p-15 d-flex flex-column">
            {mainNavigation}
        </nav>
    );
};

export default Navigation;

