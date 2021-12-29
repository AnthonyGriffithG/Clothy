import React from 'react';
import { Router, Route } from 'react-router-dom';
import Header from './Header';
import ClothList from './ClothList';
import history from '../history';
import ItemCreate from './forms/ItemCreate';

const App = () => {
  return (
    <div>
      <Router history={history}>
        <div>
          <Header />
          <Route path="/" exact component={ClothList} />
          <Route path="/disponible" exact component={ClothList} />
          <Route path="/apartado" exact component={ClothList} />
          <Route path="/items/new" exact component={ItemCreate} />
        </div>
      </Router>
    </div>
  );
};

export default App;
