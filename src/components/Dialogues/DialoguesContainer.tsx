import React from 'react';
import 'macro-css'
import {DialoguesPageType, sendMessage, updateNewMessageText} from '../../redux/dialoguesReducer';
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

const DialoguesContainer = connect(mapStateToProps, {updateNewMessageText, sendMessage})(Dialogues)

export default DialoguesContainer;

// const DialoguesContainer_for_study = () => {
//     return <StoreContext_for_study.Consumer>
//         {
//             (store) => {
//                 let state = store.getState().dialoguesPage
//
//                 const sendMessageHandler = () => {
//                     store.dispatch(sendMessageAC)
//                 };
//                 const updateNewMessageText = (currentText: string) => {
//                     store.dispatch(updateNewMessageText(currentText))
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