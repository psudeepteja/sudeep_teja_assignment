import React from 'react';
import { Card as MantineCard, Image } from '@mantine/core';
import { CardProps } from '../helper/types';

const Card: React.FC<CardProps> = ({ title, dimension }) => {
    return (
        <MantineCard>
            <Image
                src={`https://via.placeholder.com/${dimension.width}x${dimension.height}`}
                alt={title}
            />
            <div>{title}</div>
        </MantineCard>
    );
};

export default Card;
