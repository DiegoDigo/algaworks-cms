import React, { PropsWithChildren } from 'react';

import { StyledParagraph } from './styles';


export type ParagraphProps = PropsWithChildren<{
    size?: 'default' | 'small'
}>



const Paragraph: React.FC<ParagraphProps> = ({ size, children }) => {


    return (
        <StyledParagraph size={size ?? 'default'}>
            {children}
        </StyledParagraph>
    );

}

export default Paragraph;