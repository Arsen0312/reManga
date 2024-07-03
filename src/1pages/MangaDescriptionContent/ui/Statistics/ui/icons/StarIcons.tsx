import React from 'react';
import { MdOutlineStar } from "react-icons/md";

type TStarProps = {
    color?: string,
    size?: number
}

const StarIcons = (props:TStarProps) => {
    const { color, size } = props

    return (
        <MdOutlineStar color={color} size={size}/>
    );
};

export default StarIcons;