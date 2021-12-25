import React from 'react';
import { Router, Route } from 'react-router-dom';
import Header from './Header';
import ClothList from './ClothList';
import history from '../history';

const App = () => {
  return (
    <div>
      <Router history={history}>
        <div>
          <Header />
          <Route
            path="/"
            exact
            render={() => <ClothList clothes={[{ id: 1 }]} />}
          />
          <Route path="/disponible" exact render={() => <ClothList />} />
          <Route path="/apartado" exact render={() => <div>ok</div>} />
        </div>
      </Router>
    </div>
  );
};

export default App;
