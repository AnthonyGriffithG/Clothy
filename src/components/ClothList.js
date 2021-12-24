import React, { useEffect } from 'react';
import Item from './Item';
import '../styles/ClothList.css';
import { connect } from 'react-redux';
import { getItems } from '../actions';

const ClothList = ({ clothes, getItems }) => {
  console.log('entro');
  useEffect(() => {
    getItems();
  }, []);

  const renderedItems = clothes?.map(({ id, name, description }) => (
    <Item id={id} name={name} description={description} key={id} />
  ));

  return <div className="items-container">{renderedItems}</div>;
};

const mapStateToProps = (state) => {
  return {
    clothes: state.items.displayedItems,
  };
};

export default connect(mapStateToProps, { getItems })(ClothList);
