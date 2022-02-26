import React, { useEffect } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './Header';
import history from '../history';
import ItemCreate from './forms/ItemCreate';
import { getItems } from '../actions';
import ItemEdit from './forms/ItemEdit';
import ClothListWrapper from './ClothListWrapper';
import About from './About';

const App = ({ items, available, bought, getItems }) => {
  useEffect(() => {
    getItems();
  }, [getItems]);

  return (
    <div>
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route
              path="/"
              exact
              render={() => <ClothListWrapper clothes={items} />}
            />
            <Route
              path="/available"
              exact
              render={() => <ClothListWrapper clothes={available} />}
            />
            <Route
              path="/bought"
              exact
              render={() => <ClothListWrapper clothes={bought} />}
            />
            <Route path="/items/new" exact component={ItemCreate} />
            <Route path="/items/:id" exact component={ItemEdit} />
          </Switch>
          <About />
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
