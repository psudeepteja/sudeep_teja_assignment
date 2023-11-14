import React from 'react';
import Checkbox from './Checkbox';
import { SideBarProps } from '../helper/types';

const SideBar: React.FC<SideBarProps> = ({ data, selected, onSelect, onSelectAll }) => {
    return (
        <div>
            <Checkbox label="Select All" checked={selected.length === data.length} onChange={onSelectAll} />
            {data.map((item, index) => (
                <Checkbox
                    key={index}
                    label={item.title}
                    checked={selected.includes(index)}
                    onChange={() => onSelect(index)}
                />
            ))}
        </div>
    );
};

export default SideBar;
