import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LandingPage from './pages/Landing';
import Organization from './pages/Organization';
import Organizations from './pages/Organizations';
import SingleEventCard from './pages/Event';
import { Login, Signup } from './pages/Register';
import EventsPage from './pages/Events';
import { Error404, Error500 } from './pages/Errors';


const App = () => (
  <Router>
    <Switch>
      <Route exact path='/'>
        <LandingPage />
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
      <Route exact path={'/signup'}>
        <Signup />
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
