import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './CharacterCard.scss';

const CharacterCard = (props) => {
    const { character } = props;
    return (
        <div className="CharacterCard">
            <Link to={`/character`}>{character.name}</Link>
        </div>
    );
};

CharacterCard.propTypes = {
    character: PropTypes.object.isRequired,
};

export default CharacterCard;
