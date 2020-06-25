import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

const NavButton = ({ name, navigationRoute }) => {
    return (
        <Link to={navigationRoute}>
            <button className="button">{name}</button>
        </Link>
    );
};

export default NavButton;
