import React from 'react';
import PropTypes from 'prop-types';
import styles from './character.css';

const Character = ({ characterName, level, description, backstory }) => (
  <div className={styles.character}>
    <p>Name: {characterName}</p>
    <p>Level {level}</p>
    <p>{description}</p>
    <p>{backstory}</p>
    <button>edit</button>
  </div>
);

Character.propTypes = {
  characterName: PropTypes.string,
  level: PropTypes.string,
  description: PropTypes.string,
  backstory: PropTypes.string,
};

export default Character;
