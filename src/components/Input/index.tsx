import React, { InputHTMLAttributes } from 'react';

import * as style from './styles';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string
}

const Input: React.FC<InputProps> = ({ label, ...props }) => {
    return <style.Wrapper>
        {
            label && <span>{label}:</span>
        }
        <input {...props} type="text" />
    </style.Wrapper>;
}

export default Input;