import styled, { css } from 'styled-components';

interface ContainerProps {
    sizeHorizontal: string;
    sizeVertical: string;
    colorTheme: string;
}

export const Container = styled.button<ContainerProps>`

    background: #1DA1F2;
    color: #FFFFFF;
    border-radius: 50px;
    border: 0;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    padding: 10px 10px 10px 10px;
    font-size: 25px;
    text-align: center;
    margin-top: 16px;
    transition: background-color 0.2s;

    ${(props) => props.sizeHorizontal === 'container' && css`
        width: 100%;
    `}

    ${(props) => props.sizeVertical === 'S' && css`
        padding: 10px 20px 10px 20px;
    `}

    ${(props) => props.sizeVertical === 'M' && css`
        padding: 20px 20px 20px 20px;
    `}

    ${(props) => props.sizeVertical === 'L' && css`
        padding: 30px 20px 30px 20px;
    `}

    ${(props) => props.colorTheme === 'dark' && css`
        background: #243447;
        color: #1DA1F2;
        border-color: #1DA1F2;
        border: 2px solid;
  
    `}


    /* padding: 0 16px; */
`;