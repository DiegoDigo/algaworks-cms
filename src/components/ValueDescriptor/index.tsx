import React from 'react';

import * as style from './styles';

export interface ValueDescriptorProps {
  description: string,
  color: 'primary' | 'default',
  value: number,
  isCurrency?: boolean
}

const ValueDescriptor: React.FC<ValueDescriptorProps> = (props) => {
  return (
    <style.Container>
      <style.Description>
        {props.description}:
      </style.Description>
      <style.Wrapper>
        {
          props.isCurrency && <style.Currency color={props.color}>{'R$'}</style.Currency>
        }
        <style.Value color={props.color}>{props.value.toLocaleString('pt-br')}</style.Value>
      </style.Wrapper>
    </style.Container>
  );
}

export default ValueDescriptor;