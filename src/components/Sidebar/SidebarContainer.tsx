import React from 'react';
import {connect} from 'react-redux';
import Sidebar from './Sidebar';
import {AppStateType} from '../../redux/redux-store';
import {SidebarPageType} from '../../redux/sidebarReducer';

type MapStatePropsType = {
    state: SidebarPageType
}
export type SidebarType = MapStatePropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        state: state.sidebarPage
    };
};

const SidebarContainer = connect(mapStateToProps, )(Sidebar)

export default SidebarContainer;