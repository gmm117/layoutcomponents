import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Tab from './components/tab';
import Multimedia from './components/multimedia/Multimedia';
import Horizontal from './components/Horizontal/Horizontal';
import CenterAlign from './components/CenterAlign/CenterAlign';

const App = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/Tab">Tab</Link>
          </li>
          <li>
            <Link to="/Multimedia">Multimedia</Link>
          </li>
          <li>
            <Link to="/Horizontal">Horizontal</Link>
          </li>
          <li>
            <Link to="/CenterAlign">CenterAlign</Link>
          </li>
        </ul>
      </nav>
      <main>
        <Switch>
          <Route exact path="/" component={() => <div>시작해볼까??</div>} />
          <Route exact path="/Tab" component={() => <Tab />} />
          <Route exact path="/Multimedia" component={() => <Multimedia />} />
          <Route exact path="/Horizontal" component={() => <Horizontal />} />
          <Route exact path="/CenterAlign" component={() => <CenterAlign />} />
        </Switch>
      </main>
    </>
  );
};

export default App;
