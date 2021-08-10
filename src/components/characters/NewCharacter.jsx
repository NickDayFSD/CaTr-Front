import React from 'react';
import useCharacters from '../../state/state';
import { makeCharacter } from '../../services/camp-tracker';
import styles from './character.css';

const newCharacter = () => {
  const { characters, loading } = useCharacters();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // set loading to true
    console.log(event.target.value);
    const results = await makeCharacter(event.target.value);
    useCharacters(results);
    // navigate to list
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <p>
          <label htmlFor="name">Character Name:</label>
          <input id="name" placeholder="character name" />
        </p>
        <p>
          <label htmlFor="level">Character Level (between 1 and 20):</label>
          <input id="level" type="number" min="1" max="20" />
        </p>
        <p>
          <label htmlFor="description">Describe your character:</label>
          <textarea id="description" />
        </p>
        <p>
          <label htmlFor="history">Fill in your backstory:</label>
          <textarea id="history" />
        </p>
        <button>Create Character</button>
      </form>
    </>
  );
};

export default newCharacter;
