import React, { useEffect } from 'react';
import Item from './Item';
import '../styles/ClothList.css';
import { connect } from 'react-redux';
import { getItems } from '../actions';

const ClothList = ({ clothes, getItems }) => {
  useEffect(() => {
    getItems();
  }, []);

  const renderedItems = clothes.map(({ id, name, description }) => (
    <Item id={id} name={name} description={description} key={id} />
  ));

  return <div className="items-container">{renderedItems}</div>;
};

export default connect(null, { getItems })(ClothList);
