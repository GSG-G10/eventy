import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  ul: {
    '& .MuiPaginationItem-root': {
      color: 'black',
      fontWeight: 'bold',
      margin: '5vh auto',
      backgroundColor: 'transpernt',
      padding: '1.3rem',
      border: 0,
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
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'relative',
  },
  searchContainer: {
    position: 'absolute',
    top: '210px',
    width: '75%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2vh',
    boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
  },
  searchField: {
    width: '95%',
    height: '6vh',
    backgroundColor: '#FFFBFB',
    border: '1px solid #E5E5E5',
    borderRadius: '15px',
    fontSize: '1rem',
    padding: '.5rem',
    outline: 'none',

  },
};
export { styles, useStyles };
