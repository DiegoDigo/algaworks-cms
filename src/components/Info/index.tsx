import Icon from '@mdi/react';
import React from 'react';
import Paragraph from '../Typography/Paragraph';
import { mdiInformation } from '@mdi/js';

import { Container, InfoIcon, InfoInnerContent, InfoMessage, Title } from './styles';

export interface InfoProps {
    title: string,
    description: string
}

const Info: React.FC<InfoProps> = ({ title, description }) => {
    return (
        <Container>
            <InfoInnerContent>
                <InfoIcon>
                    <Icon
                        color='#09f'
                        size='48px'
                        path={mdiInformation}
                    />
                </InfoIcon>
                <InfoMessage>
                    <Title>{title}</Title>
                    <Paragraph size='small'>{description}</Paragraph>
                </InfoMessage>
            </InfoInnerContent>
        </Container>
    );
}

export default Info;