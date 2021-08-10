import React from 'react';
import Character from './Character';
import { useCharacters } from '../../state/state';

const CharacterList = () => {
  const { characters, loading } = useCharacters();

  console.log(loading, characters);

  if (loading) return <h2>Loading...</h2>;
  if (characters === []) return <h2>No Characters</h2>;

  const characterElements = characters.map((character) => (
    <li key={character.id}>
      <Character {...character} />
    </li>
  ));

  return (
    <>
      <ul data-testid="charList">{characterElements}</ul>
    </>
  );
};

export default CharacterList;
