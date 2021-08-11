import { useEffect, useState } from 'react';
import { fetchCharacters } from '../services/camp-tracker';

export const useCharacters = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchCharacters()
      .then(setCharacters)
      .finally(() => setLoading(false));
  }, []);

  return { characters, loading };
};
