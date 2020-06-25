import React from 'react';

import TextInput from '../Inputs/TextInput';
import EmailInput from '../Inputs/EmailInput';
import TextArea from '../Inputs/TextArea';
import Button from '../Buttons/Button';

const CommentEditor = ({ data, errors, onHandleInput, onClick }) => {
    return (
        <div>
            <TextInput value={data.name} name="name" onChange={onHandleInput} validation={errors} />
            <EmailInput value={data.email} name="email" onChange={onHandleInput} validation={errors} />
            <TextArea value={data.body} name="body" onChange={onHandleInput} validation={errors} />
            <Button name="Dodaj komentarz" onClick={onClick} />
        </div>
    );
};

export default CommentEditor;
