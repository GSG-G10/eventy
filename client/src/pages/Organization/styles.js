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

export default useStyles;
