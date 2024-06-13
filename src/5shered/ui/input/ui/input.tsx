import React, {ChangeEventHandler} from 'react';

type TInput = {
    className?: string
    placeholder?: string
    type?: string
    id?: string
    value?: string | number
    onChange?: ChangeEventHandler<HTMLInputElement>
}

const Input = (props:TInput) => {
    const { className, placeholder, type, id, onChange, value } = props

    return (
        <input value={value} className={className} placeholder={placeholder} type={type} id={id} onChange={onChange}/>
    );
};

export default Input;