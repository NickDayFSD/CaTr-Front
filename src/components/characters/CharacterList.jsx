import React from 'react';
import Character from './Character';
import newCharacter from './NewCharacter';
import useCharacters from '../../services/camp-tracker';

const CharacterList = () => {
  const { characters, loading } = useCharacters();

  console.log(loading, characters);

  if (loading) return <h2>Loading...</h2>;

  const characterElements = characters.map((character) => (
    <li key={character.id}>
      <Character {...character} />
    </li>
  ));

  if (characters === []) return <h2>No Characters</h2>;

  return (
    <>
      <ul data-testid="charList">{characterElements}</ul>
    </>
  );
};

export default CharacterList;
