import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { deleteFromFavs } from '../../redux/actions';
import NavButton from '../Buttons/NavButton';
import Comment from '../Comment';
import './styles.scss';

const Favourites = ({ comments, deleteFromFavs }) => {
    const renderComments = () => {
        return comments.length > 0
            ? (
                comments.map(({ name, email, body, id }) => {
                    return (
                        <Comment
                            key={id}
                            id={id}
                            name={name}
                            email={email}
                            body={body}
                            buttonName="Usuń"
                            buttonAction={() => deleteFromFavs(id)}
                        />
                    )
                })
            ) : (
                <h3 style={{ textAlign: 'center' }}>
                    - Brak komentarzy -
            </h3>
            );
    };

    return (
        <div>
            <NavButton name={'Strona główna'} navigationRoute="/" />
            <h1 className="title_section">
                Sekcja wybranych komentarzy
            </h1>
            {renderComments()}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        comments: state.fav_comments,
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ deleteFromFavs }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Favourites);
