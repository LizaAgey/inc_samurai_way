import React from 'react';
import styles from './Navigation.module.scss'
import 'macro-css'
import {NavLink} from 'react-router-dom';

export type NavigationElementType = {
    id: string;
    link: string;
    navTitle: string;
    linkIcon: string
}

const NavigationElement: React.FC<NavigationElementType> = (props) => {
    return (
        <div key={props.id} className={styles.navItem}>
            <img src={props.linkIcon} alt="icon" className={styles.icon}/>
            <NavLink to={props.link} activeClassName={styles.active}>{props.navTitle} </NavLink>
        </div>
    )
};

export default NavigationElement;

