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

export default App;
