import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  ul: {
    '& .MuiPaginationItem-root': {
      color: 'white',
      fontWeight: 'bold',
      marginBottom: '5vh',
      backgroundColor: '#187F75',
      padding: '1.3rem',
    },
  },
}));

const styles = {
  container: {
    width: '100%',
    height: '250px',
    backgroundColor: 'rgba(250,250,250,.13)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
  },
  searchContainer: {
    position: 'absolute',
    top: '210px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2vh',
  },
  searchField: {
    width: '75%',
    height: '6vh',
    backgroundColor: '#FFFBFB',
    border: '0',
    borderRadius: '15px',
    fontSize: '1.5rem',
    padding: '1rem',
    outline: 'none',

  },
};
export { styles, useStyles };
