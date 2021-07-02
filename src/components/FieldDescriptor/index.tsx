import React from 'react';
import { PropsWithChildren } from 'react';

import { Container, Label, Description } from './styles';

export type FieldDescriptorProps = PropsWithChildren<{
    label: string,      
}>


const FieldDescriptor: React.FC<FieldDescriptorProps> = ({label, children}) => {
    return (
        <Container>
            <Label>{label}:</Label>
            <Description>{children}</Description>
        </Container>
    );
}

export default FieldDescriptor;