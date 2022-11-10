import React from 'react';
import 'macro-css'
// import styles from "./Header.module.scss"

// type for data which is inserted into <a> in navigation
type NavLinkType = {
    link: string;
    navTitle: string
}

//type for props
type NavigationType = {
    mainNavLinks: Array<NavLinkType>;
    settingsLinks: NavLinkType
}

let mainNavigation: Array<JSX.Element> = []

const Navigation: React.FC<NavigationType> = (props) => {

    //loop array woth data for main navigation links into <a>
    // push each <a> to new array to render it below
    props.mainNavLinks.forEach(value => {
        mainNavigation.push(<a href={value.link}>{value.navTitle}</a>)
    })

    return (
        <nav className="navigation m-20 p-15 d-flex flex-column">

            {mainNavigation}

            {/*    last <a> is special*/}
            <a href={props.settingsLinks.link} className={"mt-50"}>{props.settingsLinks.navTitle}</a>

        </nav>
    );
};

export default Navigation;

