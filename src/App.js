import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Album from './pages/Album';
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
          <Route path="/album/:id" component={ Album } />
        </Switch>
      </div>
    );
  }
}

export default App;
