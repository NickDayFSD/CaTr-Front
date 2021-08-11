import React from 'react';
import { Link } from 'react-router-dom';
import Character from './Character';
import styles from './character.css';
import { useCharacters } from '../../state/state';
import { deleteCharacter } from '../../services/camp-tracker';

const CharacterList = () => {
  const { characters, loading } = useCharacters(handleDelete);

  const handleDelete = async (id) => {
    // eslint-disable-next-line no-unused-vars
    const byeBye = await deleteCharacter(id);
  };

  if (loading) return <h2>Loading...</h2>;
  if (characters === []) return <h2>No Characters</h2>;

  const characterElements = characters.map((character) => (
    <li key={character.id} className={styles.character}>
      <Character {...character} />
      <div>
        <Link to={`/${character.id}`}>
          <button>edit</button>
        </Link>
        <button onClick={() => handleDelete(character.id)}>delete</button>
      </div>
    </li>
  ));

  return (
    <>
      <ul data-testid="charList">{characterElements}</ul>
    </>
  );
};

export default CharacterList;
