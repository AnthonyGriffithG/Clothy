import React, { useEffect } from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './Header';
import ClothList from './ClothList';
import history from '../history';
import ItemCreate from './forms/ItemCreate';
import { getItems } from '../actions';

const App = ({ items, available, bought, getItems }) => {
  useEffect(() => {
    getItems();
  }, []);

  return (
    <div>
      <Router history={history}>
        <div>
          <Header />
          <Route path="/" exact render={() => <ClothList clothes={items} />} />
          <Route
            path="/disponible"
            exact
            render={() => <ClothList clothes={available} />}
          />
          <Route
            path="/apartado"
            exact
            render={() => <ClothList clothes={bought} />}
          />
          <Route path="/items/new" exact component={ItemCreate} />
        </div>
      </Router>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.items.all,
    available: state.items.available,
    bought: state.items.bought,
  };
};

export default connect(mapStateToProps, { getItems })(App);
