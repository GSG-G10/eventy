<<<<<<< HEAD
import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Organization from './pages/Organization';
import EventsPage from './pages/Events';

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
        <Route exact path={'/events'}>
          <EventsPage />
        </Route>
        <Route exact path={'/events'}>
          <EventsPage />
        </Route>
      </Switch>
    </Router>

  );
}
=======
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Organization from './pages/Organization';
import Organizations from './pages/Organizations';
import SingleEventCard from './pages/Event';

const App = () => (
  <Router>
    <Switch>
      <Route exact path='/'>
        <h1>Home Page</h1>
      </Route>
      <Route exact path={'/organization/:organizationId/:name'}>
        <Organization />
      </Route>
      <Route exact path= '/organizations' >
        <Organizations />
      </Route>
      <Route exact path={'/event/:eventId/:name'}>
        <SingleEventCard />
      </Route>
    </Switch>
  </Router>
);
>>>>>>> 7272518790c91ae01c0887f95a12167f814c6bab

export default App;
