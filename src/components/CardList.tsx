import React from 'react';
import Card from './Card';
import { CardListProps } from '../helper/types';

const CardList: React.FC<CardListProps> = ({ data }) => {
    return (
        <div>
            {data.map((item, index) => (
                <Card key={index} {...item} />
            ))}
        </div>
    );
};

export default CardList;
