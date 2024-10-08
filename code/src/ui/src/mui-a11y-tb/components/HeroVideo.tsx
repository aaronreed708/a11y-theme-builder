/**
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under Apache-2.0 License. See License.txt in the project root for license information
 */
import React from 'react';
import './Hero.css';

interface Props {
    style?: any;
    children?: React.ReactNode;
    className?: string;
}

export const HeroVideo: React.FC<Props> = ({
    style,
    children,
    className = '',
}) => {
    return (
        <div className={'hero inlineVideo ' + className} style={style}>
            {children}
        </div>
    );
};
