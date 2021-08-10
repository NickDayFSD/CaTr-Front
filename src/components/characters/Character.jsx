import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ characterName, level, description }) => (
  <div>
    <p>Name: {characterName}</p>
    <p>Level {level}</p>
    <p>{description}</p>
  </div>
);

Character.propTypes = {
  characterName: PropTypes.string,
  level: PropTypes.string,
  description: PropTypes.string,
};

export default Character;
