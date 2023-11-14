import React from 'react';

interface CheckboxProps {
    label: string;
    checked: boolean;
    onChange: () => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange }) => {
    return (
        <div>
            <input type="checkbox" checked={checked} onChange={onChange} />
            <label>{label}</label>
        </div>
    );
};

export default Checkbox;
