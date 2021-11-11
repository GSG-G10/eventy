import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  ul: {
    '& .MuiPaginationItem-root': {
      color: '#024059',
      fontWeight: 'bold',
      marginBottom: '5vh',
      backgroundColor: 'transpernt',
      padding: '1.3rem',
      border: 'none',
    },
  },
}));

export default useStyles;
