import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {state} from './redux/state';

ReactDOM.render(<App
        navigationElements={state.navigationElements}
        dialogues={state.dialogues}
        messages={state.messages}
        header={state.header}
        users={state.users}
        postCards={state.postCards}
    />, document.getElementById('root')
);