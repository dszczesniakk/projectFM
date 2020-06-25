import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Comment from '../Comment';
import NavButton from '../Buttons/NavButton';
import { addToFavs, deleteFromFavs } from '../../redux/actions';
import './styles.scss';

const Home = ({ comments, addToFavs, fav_comments, deleteFromFavs }) => {
    const genButtonName = id => {
        const isFav = fav_comments.find(comment => comment.id === id) ? true : false;
        return `${isFav ? 'W ulubionych ★' : 'Dodaj do wybranych ☆'}`;
    };

    const handleButtonAction = id => {
        const isFav = fav_comments.find(x => x.id === id) ? true : false;
        return isFav ? deleteFromFavs(id) : addToFavs(comments.find(comment => comment.id === id));
    };

    const renderComments = () => {
        return comments.map(({ name, email, body, id }, i) => {
            return (
                <Comment
                    key={id}
                    id={id}
                    name={name}
                    email={email}
                    body={body}
                    buttonName={genButtonName(id)}
                    buttonAction={() => handleButtonAction(id)}
                />
            );
        });
    };

    return (
        <div>
            <div className="buttons_group">
                <NavButton name={'Dodaj komentarz'} navigationRoute="/create" />
                <NavButton name={'Wybrane komentarze'} navigationRoute="/favs" />
            </div>
            <h1 className="title_section">Sekcja komentarzy</h1>
            <div className="comments_section">{renderComments()}</div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        comments: state.comments,
        fav_comments: state.fav_comments,
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ addToFavs, deleteFromFavs }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
