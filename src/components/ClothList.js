import React from 'react';
import Item from './Item';
import '../styles/ClothList.css';

const ClothList = ({ clothes }) => {
  const renderedItems = clothes.map(({ id, name, description }) => (
    <Item id={id} name={name} description={description} key={id} />
  ));

  return <div className="items-container">{renderedItems}</div>;
};

export default ClothList;
