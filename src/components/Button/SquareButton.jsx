import React from 'react';
import {
    Button,
} from './SquareButton.styled';

export const SquareButton = ({text}) => {
    return (
        <>
            <Button>{text}</Button>
        </>
    )
}