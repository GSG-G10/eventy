import './App.css';
import Organization from './pages/Organization';
import SingleEventCard from './pages/Event';

function App() {
  return (
    <>
      <Organization />
      <SingleEventCard eventId = {5} />
    </>
  );
}

export default App;
