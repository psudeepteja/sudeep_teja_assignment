import React from 'react';
import CardList from './CardList';
import { MainContentProps } from '../helper/types';

const MainContent: React.FC<MainContentProps> = ({ data }) => {
    console.log("++++++++", data)
    return <CardList data={data} />;
};

export default MainContent;
