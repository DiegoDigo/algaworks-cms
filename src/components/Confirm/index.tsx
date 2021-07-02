import React from 'react';
import Button from '../Button';

import { Container, Title, ButtonWrapper } from './styles';

export interface ConfirmProps {
    title: string,
    onConfirm: () => any
    onCancel: () => any
}

const Confirm: React.FC<ConfirmProps> = ({ title, onConfirm, onCancel }) => {
    return (
        <Container>
            <Title>{title}</Title>
            <ButtonWrapper>
                <Button variant="danger" label="Não" onClick={onCancel} />
                <Button variant="primary" label="Sim" onClick={onConfirm} />
            </ButtonWrapper>
        </Container>
    );
}

export default Confirm;