import React, { PropsWithChildren } from 'react';
import { Heading1, Heading2, Heading3 } from './styles';

export type HeadingProps = PropsWithChildren<{
    level: 1 | 2 | 3
}>

const Heading: React.FC<HeadingProps> = ({ level, children }) => {

    const Component = ({
        1: Heading1,
        2: Heading2,
        3: Heading3,
    }[level])

    return (<Component>
        {children}
    </Component>);
}

export default Heading;