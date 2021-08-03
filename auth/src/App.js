import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import DashboardApp from './components/DashboardApp';
import Mume from './components/mume';
import App3 from './components/app3';
import MyReact from './components/my-react.jsx';

const App = ({ history, setStatus }) => {
  return (
    <Router history={history}>
      <Switch>
        <Route path='/app1'>
          <MyReact prop='a' />
        </Route>
        <Route path='/app2'>
          <DashboardApp />
        </Route>
        <Route path='/mume'>
          <Mume />
        </Route>
        <Route path='/app3'>
          <App3 />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
