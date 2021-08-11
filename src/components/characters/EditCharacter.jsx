import React from 'react';
import { useParams } from 'react-router-dom';
import { findCharacter } from '../../services/camp-tracker';
import styles from './character.css';

const EditCharacter = () => {
  const { id } = useParams();
  const character = findCharacter(id);

  const handleChange = ({ target }) => {
    const name = target.name;
    const value = target.value;
    character[name] = value;
    console.log(character);
  };

  if (!character) return <p>Loading...</p>;

  return (
    <form className={styles.form}>
      <p>
        <label htmlFor="characterName">Character Name:</label>
        <input id="name" name="characterName" onChange={handleChange} />
      </p>
      <p>
        <label htmlFor="level">Character Level (between 1 and 20):</label>
        <input
          id="level"
          name="level"
          type="number"
          min="1"
          max="20"
          onChange={handleChange}
        />
      </p>
      <p>
        <label htmlFor="description">Describe Character:</label>
        <textarea id="description" name="description" onChange={handleChange} />
      </p>
      <p>
        <label htmlFor="history">Create Backstory:</label>
        <textarea id="history" name="backstory" onChange={handleChange} />
      </p>
      <button>Submit Change</button>
    </form>
  );
};

export default EditCharacter;
