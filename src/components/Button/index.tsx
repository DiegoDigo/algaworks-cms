import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

import * as style from './styles';

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  variant: 'danger' | 'text' | 'primary',
  label: string
}

const Button: React.FC<ButtonProps> = ({ variant, label, ref, ...props }) => {
  return (
    <style.Wrapper variant={variant} {...props}>
      {label}
    </style.Wrapper>

  )
}

export default Button;