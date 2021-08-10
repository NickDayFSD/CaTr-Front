import React from 'react';
import { useCharacters } from '../../state/state';
import { makeCharacter } from '../../services/camp-tracker';
import styles from './character.css';

const newCharacter = () => {
  const { characters, loading } = useCharacters(handleSubmit);
  const character = {};

  const handleChange = ({ target }) => {
    const name = target.name;
    const value = target.value;
    character[name] = value;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // set loading to true
    const results = await makeCharacter(character);
    useCharacters(results);
    // navigate to list
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <p>
          <label htmlFor="name">Character Name:</label>
          <input
            id="name"
            name="name"
            placeholder="character name"
            onChange={handleChange}
          />
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
          <textarea
            id="description"
            name="description"
            onChange={handleChange}
          />
        </p>
        <p>
          <label htmlFor="history">Create Backstory:</label>
          <textarea id="history" name="history" onChange={handleChange} />
        </p>
        <button>Create Character</button>
      </form>
    </>
  );
};

export default newCharacter;
