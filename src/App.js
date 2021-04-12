import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AppHeader } from './cmps/AppHeader';
import { ErrorModal } from './cmps/ErrorModal';
import { Favorites } from './pages/Favorites';
import { Home } from './pages/Home';

function App() {
  return (
    <div className="App">
      <ErrorModal />
      <AppHeader />
      <Switch>
        <Route component={Favorites} path="/favorites" />
        <Route component={Home} path="/:cityname?/:citykey?" />
      </Switch>
    </div>
  );
}

export default App;
