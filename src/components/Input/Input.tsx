import React, {ChangeEvent, KeyboardEvent} from 'react';

type InputType = {
    value: string
    onChange: (event: ChangeEvent<HTMLInputElement>)=>void
    onKeyDown:(event: KeyboardEvent<HTMLInputElement>)=>void
    placeholder?:string
}

const Input: React.FC<InputType> = (props) => {

    return (
        <input value={props.value}
               onChange={(event)=>props.onChange(event)}
               onKeyDown={(event)=>props.onKeyDown(event)}
               placeholder={props.placeholder}
               type="text"/>
    );
};

export default Input;