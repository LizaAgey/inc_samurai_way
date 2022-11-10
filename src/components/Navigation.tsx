import React from 'react';
import '../App.css';
import 'macro-css'

type navLinkType = {
    link: string;
    navTitle: string
}
// type for data which is inserted into <a> in navigation

type NavigationType = {
    mainNavLinks: Array<navLinkType>;
    settingsLinks: navLinkType
}
//type for props

let mainNavigation: Array<object> = []

const Navigation: React.FC<NavigationType> = (props) => {

    props.mainNavLinks.forEach(value => {
        mainNavigation.push(<a href={value.link}>{value.navTitle}</a>)
    })
    //loop array woth data for main navigation links into <a>
    // push each <a> to new array to render it below

    return (
        <nav className="navigation m-20 p-15 d-flex flex-column">

            {mainNavigation}

            <a href={props.settingsLinks.link} className={"mt-50"}>{props.settingsLinks.navTitle}</a>
            {/*    last <a> is special*/}

        </nav>
    );
};

export default Navigation;

