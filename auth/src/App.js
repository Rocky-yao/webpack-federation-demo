import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
// import DashboardApp from './components/DashboardApp';
// import Mume from './components/mume';
// import App3 from './components/app3';
import MyReact from './components/my-react.jsx';
import { obj } from 'mume/MumeApp';

const App = ({ history, setStatus }) => {
  let water = 101;
  let handleChange = (val) => {
    water = val;
  }
  console.log(obj)
  return (
    <Router history={history}>
      <Switch>
        <Route path='/'>
          <MyReact temperature={water} />
        </Route>
        {/* <Route path='/app2'>
          <DashboardApp />
        </Route>
        <Route path='/app3'>
          <App3 />
        </Route>
        <Route path='/app4'>
          <Mume />
        </Route> */}
      </Switch>
    </Router>
  );
};

export default App;
