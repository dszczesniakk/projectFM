import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Home from './components/Home';
import Favourites from './components/Favourites';
import Editor from './components/Editor';
import { getComments } from './redux/actions';

import './App.scss';

const App = ({ getComments }) => {
    useEffect(() => {
        getComments();
    }, [getComments]);

    return (
        <Router>
            <div className="container">
                <Route exact path="/" component={Home} />
                <Route path="/favs" component={Favourites} />
                <Route path="/create" component={Editor} />
            </div>
        </Router>
    );
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ getComments }, dispatch);
};

export default connect(null, mapDispatchToProps)(App);
