import React from 'react';

import Button from '../Buttons/Button';
import './styles.scss';

const prepareText = txt => {
    return txt.length > 20 ? txt.slice(0, 20) + '...' : txt;
};

const Comment = ({ name, email, body, id, buttonAction, buttonName }) => {
    return (
        <div className="comment">
            <p>Nazwisko: {name}</p>
            <p>E-mail: {email}</p>
            <p>Tekst: {prepareText(body)}</p>
            <Button name={buttonName} onClick={() => buttonAction(id)} />
        </div>
    );
};

export default Comment;
