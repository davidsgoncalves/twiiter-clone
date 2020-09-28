import React from 'react';

import { ButtonProps } from './Button.interfaces';

import * as Styled from './Button.styles';

const Button = ({
  children, sizeHorizontal, sizeVertical, colorTheme,
}: ButtonProps) => (
  <Styled.Button type="button" sizeVertical={sizeVertical} sizeHorizontal={sizeHorizontal} colorTheme={colorTheme}>{children}</Styled.Button>
);

export default Button;
