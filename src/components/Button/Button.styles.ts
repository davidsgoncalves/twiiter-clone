/* eslint-disable import/prefer-default-export */
import styled, { css } from 'styled-components';

import { ButtonProps } from './Button.interfaces';

export const Button = styled.button<ButtonProps>`
    background: #1DA1F2;
    color: #FFF;
    border-radius: 50px;
    border: 0;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    padding: 10px;
    font-size: 20px;
    text-align: center;
    margin-top: 16px;
    transition: background-color 0.2s;

    ${(props) => props.sizeHorizontal === 'container' && css`
        width: 100%;
    `}

    ${(props) => props.sizeVertical === 'S' && css`
        padding: 10px 20px;
    `}

    ${(props) => props.sizeVertical === 'M' && css`
        padding: 20px;
    `}

    ${(props) => props.sizeVertical === 'L' && css`
        padding: 30px 20px;
    `}

    ${(props) => props.colorTheme === 'dark' && css`
        background: #243447;
        border: 2px solid #1DA1F2; 
    `}
`;
