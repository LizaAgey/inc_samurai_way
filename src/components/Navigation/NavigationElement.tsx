import React from 'react';
import styles from './Navigation.module.scss'
import 'macro-css'
import {NavLink} from 'react-router-dom';
import {NavLinkType} from '../../App';


const NavigationElement: React.FC<NavLinkType> = (props) => {
    return (
        <div key={props.id} className={styles.navItem}>
            <img src={props.linkIcon} alt="icon" className={styles.icon}/>
            <NavLink to={props.link} activeClassName={styles.active}>{props.navTitle} </NavLink>
        </div>
    )
};

export default NavigationElement;

