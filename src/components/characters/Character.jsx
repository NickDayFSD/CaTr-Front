import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ characterName, level, description, backstory }) => (
  <>
    <p>Name: {characterName}</p>
    <p>Level {level}</p>
    <p>{description}</p>
    <p>{backstory}</p>
    <div></div>
  </>
);

Character.propTypes = {
  characterName: PropTypes.string,
  level: PropTypes.number,
  description: PropTypes.string,
  backstory: PropTypes.string,
};

export default Character;
