import { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    sizeHorizontal: string;
    sizeVertical: string;
    colorTheme: string;
}
