import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AppHeader } from './cmps/AppHeader';
import { Favorites } from './pages/Favorites';
import { Home } from './pages/Home';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Switch>
        <Route component={Favorites} path="/favorites" />
        <Route component={Home} path="/:cityname?/:citykey?" />
      </Switch>
    </div>
  );
}

export default App;
