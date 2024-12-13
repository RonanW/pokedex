import { useState } from 'react';

import { createUseStyles } from 'react-jss';
import { useGetPokemons } from '../../hooks/useGetPokemons';
import { PokemonListItem } from './PokemonListItem';

export const PokemonList = () => {
  const classes = useStyles();
  const { pokemons, loading } = useGetPokemons();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: any) => {
    setSearchTerm(e.target.value);
  };

  const filteredPokemons = pokemons.filter(({ name }) =>
    name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={classes.root}>
      <h2>Search Pokemons...</h2>
      <input
        type="text"
        placeholder="Filter pokemon by name..."
        value={searchTerm}
        onChange={handleSearch}
        className={classes.filterInput}
      />
      {loading && <div>Loading...</div>}
      <div className={classes.container}>
        {filteredPokemons.map((pkmn) => (
          <PokemonListItem
            key={pkmn.id}
            id={pkmn.id}
            name={pkmn.name}
            number={pkmn.number}
            types={pkmn.types}
            imageUrl={pkmn.image}
          />
        ))}
      </div>
    </div>
  );
};

const useStyles = createUseStyles(
  {
    root: {
      width: '100%',
      textAlign: 'center',
      padding: '32px',
      boxSizing: 'border-box',
    },
    container: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '16px',
    },
    filterInput: {
      padding: '10px',
      width: '100%',
      maxWidth: '600px',
      maxHeight: '40px',
      marginBottom: '20px',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      borderRadius: '5px',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      fontSize: '16px',
    },
  },
  { name: 'PokemonList' }
);
