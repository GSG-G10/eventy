import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Organization from './pages/Organization';
import SingleEventCard from './pages/Event';
import './App.css';

const App = () => {
  const [event, setEvent] = useState('');
  const [organization, setOrganization] = useState('');

  return (
    <Router>
      <Switch>
        <Route exact path={`/organizations/${organization.name}`}>
          <Organization organizationId={organization.id} setEventInfo={setEvent} />
        </Route>
        <Route exact path={'/organizations'}>
          {/* <Organizations setOrganization={setOrganization} /> */}
          <h1>Organizations Page</h1>
        </Route>
        <Route exact path={`/events/${event.name}`}>
          <SingleEventCard eventId={event.eventId} setOrganization={setOrganization} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
