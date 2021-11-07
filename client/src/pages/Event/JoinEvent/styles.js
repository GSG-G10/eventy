import InputBase from '@mui/material/InputBase';
import { styled } from '@mui/material/styles';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
    border: '1px solid #ced4da',
    fontSize: 16,
    width: 'auto',
    padding: '10px 12px',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
  },
}));

const containerBox = {
  bgcolor: '#404143',
  color: '#fff',
  height: '96vh',
  width: { lg: '30%', sm: '60%' },
  margin: '0px auto',
  borderRadius: '20px',
};
const formContainer = {
  bgcolor: '##404143',
  color: '#fff',
  height: '85vh',
  width: '90%',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'center',
};

export {
  BootstrapInput,
  containerBox,
  formContainer,
};
