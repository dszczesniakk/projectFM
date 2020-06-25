import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CommentEditor from '../CommentEditor';
import NavButton from '../Buttons/NavButton';
import { addNewComment } from '../../redux/actions';
import { validate } from './validation';
import './styles.scss';

const Editor = ({ maxId, addNewComment }) => {
    const initialState = {
        name: '',
        email: '',
        body: '',
    };
    const [data, setData] = useState(initialState);
    const [errors, setErrors] = useState([]);

    const onHandleInput = (key, value) => {
        setData({
            ...data,
            [key]: value,
            id: maxId,
        });
    };

    const onHandleClick = () => {
        const isValid = validate(data);
        if (!isValid) {
            addNewComment(data);
            setData(initialState);
            setErrors([]);
        } else {
            setErrors(isValid);
        }
    };

    return (
        <>
            <NavButton
                name={'Strona główna'}
                navigationRoute="/"
            />
            <div className="comment_editor_container">
                <h2 style={{ textAlign: 'center' }}>
                    Dodaj komentarz
                </h2>
                <CommentEditor
                    data={data}
                    errors={errors}
                    onHandleInput={onHandleInput}
                    onClick={onHandleClick}
                />
            </div>
        </>
    );
};

const mapStateToProps = state => {
    const maxId = state.comments.length > 0
        ? Math.max(...state.comments.map(x => x.id)) + 1
        : 0;

    return {
        maxId,
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ addNewComment }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
