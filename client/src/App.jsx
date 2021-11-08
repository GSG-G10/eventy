import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState } from 'react';

import { Header } from './components';
import Landing from './pages/Landing';
import Organization from './pages/Organization';
import Organizations from './pages/Organizations';
import SingleEventCard from './pages/Event';
import Register from './pages/Register';
import EventsPage from './pages/Events';
import { Error404, Error500 } from './pages/Errors';
import Footer from './components/Footer';

const App = () => {
  const [registerType, setRegisterType] = useState('1');

  return <Router>
    <Header setRegisterType={setRegisterType} />
    <Switch>
      <Route exact path="/">
        <Landing />
      </Route>
      <Route exact path={'/organization/:organizationId/:name'}>
        <Organization />
      </Route>
      <Route exact path="/organizations">
        <Organizations />
      </Route>
      <Route exact path={'/event/:eventId/:name'}>
        <SingleEventCard />
      </Route>
      <Route exact path="/events">
        <EventsPage />
      </Route>
      <Route exact path={'/register'}>
        <Register registerType={registerType} setRegisterType={setRegisterType} />
      </Route>
      <Route exact path="/error500">
        <Error500 />
      </Route>
      <Route>
        <Error404 />
      </Route>
    </Switch>
    <Footer />
  </Router>;
};

export default App;
