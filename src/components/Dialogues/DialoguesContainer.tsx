import React from 'react';
import 'macro-css'
import {DialoguesPageType, sendMessageAC, updateNewMessageTextAC} from '../../redux/dialoguesReducer';
import Dialogues from './Dialogues';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {Dispatch} from 'redux';

type MapStatePropsType = {
    state: DialoguesPageType
}

type MapDispatchPropsType = {
    updateNewMessageText: (currentText: string) => void
    sendMessage: () => void
}

export type DialoguesPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        state: state.dialoguesPage
    };
};

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        updateNewMessageText: (currentText: string) => {
            dispatch(updateNewMessageTextAC(currentText))
        },
        sendMessage: () => {
            dispatch(sendMessageAC())
        }
    };
};

const DialoguesContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogues)

export default DialoguesContainer;

// const DialoguesContainer_for_study = () => {
//     return <StoreContext_for_study.Consumer>
//         {
//             (store) => {
//                 let state = store.getState().dialoguesPage
//
//                 const sendMessageHandler = () => {
//                     store.dispatch(sendMessageAC())
//                 };
//                 const updateNewMessageText = (currentText: string) => {
//                     store.dispatch(updateNewMessageTextAC(currentText))
//                 };
//
//                 return <Dialogues
//                     updateNewMessageText={updateNewMessageText}
//                     sendMessage={sendMessageHandler}
//                     state={state}
//                 />
//             }}
//     </StoreContext_for_study.Consumer>
//
// };