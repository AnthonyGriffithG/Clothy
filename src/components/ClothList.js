import React, { useEffect } from 'react';
import Item from './Item';
import { MdAddCircle } from 'react-icons/md';
import '../styles/ClothList.css';
import { connect } from 'react-redux';
import { getItems } from '../actions';
import { Link } from 'react-router-dom';

const ClothList = ({ clothes, getItems }) => {
  useEffect(() => {
    getItems();
  }, []);

  const renderedItems = clothes?.map(({ id, name, description, price }) => (
    <Item
      id={id}
      name={name}
      description={description}
      price={price}
      key={id}
    />
  ));

  return (
    <div>
      <div className="items-options">
        <div></div>
        <Link className="add-item-link" to={'/items/new'}>
          <MdAddCircle size="2em" />
        </Link>
      </div>
      <div className="items-container">{renderedItems}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    clothes: state.items.displayedItems,
  };
};

export default connect(mapStateToProps, { getItems })(ClothList);
