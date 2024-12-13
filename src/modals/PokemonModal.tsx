import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import { createUseStyles } from 'react-jss';
import { useParams } from 'react-router-dom';
import { useGetPokemon } from '../hooks/useGetPokemon';
import usePokemonStyles from '../styles/usePokemonStyles';

export const PokemonModal = () => {
  const styles = useStyles();
  const pokemonStyles = usePokemonStyles();
  const classes = { ...styles, ...pokemonStyles };
  const { id: pid } = useParams();
  if (!pid) {
    window.location.replace('/pokemon');
  }
  const { pokemon, loading } = useGetPokemon({ id: pid || 'undefined' });

  return (
    <Dialog open={true} fullWidth={true} className={classes.root}>
      <DialogTitle>{pokemon.name}</DialogTitle>
      <DialogContent>
        {loading && <div>Loading...</div>}
        {!loading && !pokemon && <div>Pokemon not found</div>}
        <img
          src={pokemon.image}
          alt={pokemon.name}
          className={classes.itemImage}
        />
        <div className={classes.itemContent}>
          <div className={classes.labelValuePair}>
            <label>Number:</label>
            <span>{pokemon.number?.replace(/^0+/, '') || '0'}</span>
          </div>
          <div className={classes.typesWrapper}>
            <label>Types:</label>
            <ul className={classes.typesList}>
              {pokemon.types?.map((type, index) => (
                <li key={index}>{type}</li>
              ))}
            </ul>
          </div>
          <div className={classes.typesWrapper}>
            <label>Resistant:</label>
            <ul className={classes.typesList}>
              {pokemon.resistant?.map((type, index) => (
                <li key={index}>{type}</li>
              ))}
            </ul>
          </div>
          <div className={classes.typesWrapper}>
            <label>Weaknesses:</label>
            <ul className={classes.typesList}>
              {pokemon.weaknesses?.map((type, index) => (
                <li key={index}>{type}</li>
              ))}
            </ul>
          </div>
        </div>
      </DialogContent>
      <DialogActions>
        <Button href="/pokemon" color="inherit">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const useStyles = createUseStyles(
  {
    root: {
      width: '100%',
      height: '100%',
      textAlign: 'center',
      padding: '16px',
      '& .MuiPaper-root': {
        backgroundColor: '#171E2b',
      },
      '& label': {
        fontWeight: 'bold',
        marginRight: '8px',
        minWidth: '80px',
      },
    },
  },
  { name: 'PokemonModal' }
);
