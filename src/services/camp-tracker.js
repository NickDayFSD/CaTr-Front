export const fetchCharacters = async () => {
  const res = await fetch('http://localhost/api/characters');

  const json = await res.json();

  return json;
};

export const makeCharacter = async (character) => {
  const res = await fetch('http://localhost/api/characters', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(character)
  });
  const newCharacter = res.json();
  return await newCharacter;
};

export const updateCharacter = async (character, id) => {
  const res = await fetch(`http://localhost/api/characters/${id}`, {
    method: 'PUT',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(character)
  });

  const updatedCharacter = res.json();
  return await updatedCharacter;
};

export const deleteCharacter = async (id) => {
  const res = await fetch(`http://localhost/api/characters/${id}`, {
    method: 'DELETE',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify()
  });

  const deletedCharacter = res.json();
  return await deletedCharacter;
};
