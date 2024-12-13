import { createUseStyles } from 'react-jss';

const usePokemonStyles = createUseStyles({
  itemImage: {
    width: '110px',
    height: '110px',
    borderRadius: '5px',
    objectFit: 'cover',
  },
  itemContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    paddingLeft: '16px',
    textAlign: 'left',
    justifyContent: 'center',
  },
  labelValuePair: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '16px',
    color: 'rgba(255, 255, 255, 0.85)',
  },
  typesWrapper: {
    display: 'flex',
    alignItems: 'flex-start',
  },
  typesList: {
    display: 'flex',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: 0,
    margin: 0,
    gap: '8px',
    alignItems: 'center',
    '& li': {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '4px 12px',
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      borderRadius: '16px',
      color: 'rgba(255, 255, 255, 0.85)',
      fontSize: '14px',
      lineHeight: '1',
      whiteSpace: 'nowrap',
    },
  },
});

export default usePokemonStyles;
