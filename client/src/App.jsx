import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Organization from './pages/Organization';

const App = () => {
  const [event, setEvent] = useState('');
  const [organization, setOrganization] = useState('ff');

  return (
    <Router>
      <Switch>
        <Route exact path={`/organizations/${organization}`}>
          <Organization setEventInfo={setEvent} />
        </Route>
        <Route exact path={'/organizations'}>
          {/* <Organizations setOrganization={setOrganization} /> */}
          <h1>Organizations Page</h1>
        </Route>
      </Switch>
    </Router>

  );
};

export default App;
