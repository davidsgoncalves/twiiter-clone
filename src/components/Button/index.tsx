import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    sizeHorizontal: string;
    sizeVertical: string;
    colorTheme: string;
}

const Button:React.FC<ButtonProps> = ({children, sizeHorizontal, sizeVertical, colorTheme, ...rest}) => (
<Container type="button" sizeVertical={sizeVertical} sizeHorizontal={sizeHorizontal} colorTheme={colorTheme} {...rest}>{children}</Container>
    );


export default Button;