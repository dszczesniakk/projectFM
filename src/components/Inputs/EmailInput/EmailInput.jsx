import React from 'react';

import { validateField } from '../validateField';
import './styles.scss';

const EmailInput = ({ value, name, onChange, validation }) => {
    return (
        <div className="email_input_container">
            <label>E-mail</label>
            <input
                className="email_input__input"
                type="email"
                value={value}
                onChange={e => onChange('email', e.target.value)}
            />
            <span className="email_input__error">
                {validateField(name, validation)}
            </span>
        </div>
    );
};

export default EmailInput;
