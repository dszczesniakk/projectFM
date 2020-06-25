import React from 'react';

import { validateField } from '../validateField';
import './styles.scss';

const TextArea = ({ value, name, onChange, validation }) => {
    const handleInput = (key, value) => {
        const regex = new RegExp('^[a-zA-Z0-9]*$');
        if (regex.test(value) || !value) onChange(key, value);
    };

    return (
        <div className="textarea_input_container">
            <label>Treść</label>
            <textarea
                className="textarea_input__input"
                rows="8"
                value={value}
                onChange={e => handleInput('body', e.target.value)}
            />
            <span className="textarea_input__error">
                {validateField(name, validation)}
            </span>
        </div>
    );
};

export default TextArea;
