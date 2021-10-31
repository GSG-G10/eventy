import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import OrganizationCard from './components/organization-card';

const theme = createTheme({});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <OrganizationCard/>
    </ThemeProvider>
  );
}

export default App;
