import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Organization from './pages/Organization';
import Organizations from './pages/Organizations';
import SingleEventCard from './pages/Event';
import Login from './pages/Register/Login';
import EventsPage from './pages/Events';
import { Error404, Error500 } from './pages/Errors';

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
      <Route exact path= '/events' >
        <EventsPage />
      </Route>
      <Route exact path={'/register'}>
        <Login />
      </Route>
      <Route exact path= '/error500'>
        <Error500 />
      </Route>
      <Route>
        <Error404 />
      </Route>
    </Switch>
  </Router>
);

export default App;
