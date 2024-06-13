import React from 'react';

const Button = (props: any) => {
    const { content } = props;
    return (
        <button {...props}>
            {content}
        </button>
    );
};

export default Button;