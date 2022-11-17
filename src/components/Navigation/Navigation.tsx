import React from 'react';
import styles from "./Navigation.module.scss"
import 'macro-css'
import {NavLink} from "react-router-dom";

// type for data which is inserted into <a> in navigation
type NavLinkType = {
    id: number;
    link: string;
    navTitle: string;
    linkIcon: string
}

//type for props
type NavigationType = {
    mainNavLinks: Array<NavLinkType>;
}

let mainNavigation: Array<JSX.Element> = []

const Navigation: React.FC<NavigationType> = (props) => {

        const getNavLinkList = (navItem: NavLinkType) => {
            return (
                <div key={navItem.id} className={styles.navItem}>
                    <img src={navItem.linkIcon} alt="icon" className={styles.icon}/>
                    <NavLink to={navItem.link} activeClassName={styles.active}>{navItem.navTitle} </NavLink>
                </div>
            )
        };

        mainNavigation = props.mainNavLinks.map(getNavLinkList)

        return (
            <nav className={`${styles.navigation}  m-20 p-15 d-flex flex-column`}>
                <h3 className={styles.menuTitle}>MENU</h3>
                {mainNavigation}
            </nav>
        );
    }
;

export default Navigation;

