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
          <Route path="/" component={ClothList} />
        </div>
      </Router>
    </div>
  );
};

export default App;
