import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Search from './pages/Search';

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <h1>TrybeTunes</h1>
        </header>
        <Switch>
          <Route path="/" component={ Login } />
          <Route path="/search" component={ Search } />
        </Switch>
      </div>
    );
  }
}

export default App;
