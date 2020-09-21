import React ,   { ButtonHTMLAttributes }  from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

const Button:React.FC<ButtonProps> = () => (
    <Container type="button"></Container>
    );


export default Button;