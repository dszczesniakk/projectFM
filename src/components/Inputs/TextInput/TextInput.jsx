import React from 'react';

import { validateField } from '../validateField';
import './styles.scss';

const TextInput = ({ value, name, onChange, validation }) => {
    const handleInput = (key, value) => {
        const regex = new RegExp('^[a-zA-Z]+$');
        if (regex.test(value) || !value) onChange(key, value);
    };

    return (
        <div className="text_input_container">
            <label>Nazwa</label>
            <input
                className="text_input__input"
                type="text"
                value={value}
                onChange={e => handleInput('name', e.target.value)}
            />
            <span className="text_input__error">
                {validateField(name, validation)}
            </span>
        </div>
    );
};

export default TextInput;
