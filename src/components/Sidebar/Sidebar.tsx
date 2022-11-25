import React from 'react';
import styles from './Sidebar.module.scss';
import Navigation from './Navigation/Navigation';
import {SidebarPageType} from '../../redux/state';
import Friends from './Friends/Friends';

type SidebarType = {
    state: SidebarPageType
}

const Sidebar: React.FC<SidebarType> = (props) => {
    return (
        <div className={`${styles.sidebar}`}>
            <nav className={`${styles.sidebarElement}`}>
                <h3 className={styles.menuTitle}>MENU</h3>
                <Navigation navigationElements={props.state.navigationElements}/>
            </nav>
            <hr/>
            <div className={`${styles.sidebarElement}`}>
                <h3 className={styles.menuTitle}>FRIENDS</h3>
                <Friends friends={props.state.friends}/>
            </div>


        </div>
    );
};

export default Sidebar;