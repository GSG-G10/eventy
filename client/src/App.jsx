import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Organization from './pages/Organization';
import SingleEventCard from './pages/Event';

function App() {
  const [event, setEvent] = useState({ eventId: 7 });
  const [organization, setOrganization] = useState('f');

  return (
    <Router>
      <Switch>
        <Route exact path={`/organizations/${organization.name}`}>
          <Organization setEventId={setEvent} />
        </Route>
        <Route exact path={'/organizations'}>
          <div>Organizations</div>
        </Route>
        <Route exact path={'/'}>
          <SingleEventCard eventId={event.eventId} setOrganization={setOrganization} />
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
