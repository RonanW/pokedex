import React from 'react';
import { createUseStyles } from 'react-jss';
import { Link } from 'react-router-dom';
import usePokemonStyles from '../../styles/usePokemonStyles';

interface ListItemProps {
  id: string;
  name: string;
  number: string;
  types: string[];
  imageUrl: string;
}

export const PokemonListItem: React.FC<ListItemProps> = ({
  id,
  name,
  number,
  types,
  imageUrl,
}) => {
  const styles = useStyles();
  const pokemonStyles = usePokemonStyles();

  const classes = {
    ...styles,
    ...pokemonStyles,
  };

  return (
    <Link key={id} to={`/pokemon/${id}`} className={classes.listItem}>
      <img src={imageUrl} alt={name} className={classes.itemImage} />
      <div className={classes.itemContent}>
        <div className={classes.labelValuePair}>
          <label>Name:</label>
          <span>{name}</span>
        </div>
        <div className={classes.labelValuePair}>
          <label>Number:</label>
          <span>{number.replace(/^0+/, '') || '0'}</span>
        </div>
        <div className={classes.typesWrapper}>
          <label>Types:</label>
          <ul className={classes.typesList}>
            {types.map((type, index) => (
              <li key={index}>{type}</li>
            ))}
          </ul>
        </div>
      </div>
    </Link>
  );
};

const useStyles = createUseStyles({
  listItem: {
    display: 'grid',
    gridTemplateColumns: '1fr 2fr',
    alignItems: 'center',
    padding: '16px',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    borderRadius: '5px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    boxSizing: 'border-box',
    height: '150px',
    textDecoration: 'none',
    '&:hover': {
      filter: 'contrast(65%)',
    },
    '& label': {
      fontWeight: 'bold',
      marginRight: '8px',
      minWidth: '80px',
    },
  },
  '@media (min-width: 1024px)': {
    listItem: {
      padding: '16px 32px',
    },
  },
});
