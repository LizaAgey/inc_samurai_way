import React from 'react';
import styles from './Navigation.module.scss'
import 'macro-css'
import {NavigationElementType} from '../../redux/state';
import NavigationElement from './NavigationElement';

type NavigationPropsType = {
    navigationElements: Array<NavigationElementType>
}

const Navigation= (props: NavigationPropsType) => {
    const navigationElementsList = props.navigationElements.map((navLink) => {
        return (
            <NavigationElement
                id={navLink.id}
                link={navLink.link}
                navTitle={navLink.navTitle}
                linkIcon={navLink.linkIcon}
            />
        )
    })

    return (
        <nav className={`${styles.navigation}  m-20 p-15 d-flex flex-column`}>
            <h3 className={styles.menuTitle}>MENU</h3>
            {navigationElementsList}
        </nav>

    )
};

export default Navigation