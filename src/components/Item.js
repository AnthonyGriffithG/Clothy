import React from 'react';
import '../styles/Item.css';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { MdRemoveShoppingCart } from 'react-icons/md';
import { connect } from 'react-redux';
import { deleteItem, buyItem } from '../actions';
import { Link } from 'react-router-dom';

const Item = ({ item, deleteItem, buyItem }) => {
  const onDelete = () => {
    deleteItem(item.id);
  };

  const onBuy = async () => {
    await buyItem(item);
  };
  return (
    <div className="item">
      <div className="image">
        <img src={item.img_url} alt={item.description} />
        <div className="buy-icon-section">
          <span className="icon-wrapper-rounded" onClick={onBuy}>
            <MdRemoveShoppingCart size="1.8em" />
          </span>
        </div>
      </div>

      <header className="image-header">
        <span className="icon-wrapper-rounded">
          <Link to={`/items/${item.id}`}>
            <AiFillEdit size="1.2em" />
          </Link>
        </span>
        <span className="icon-wrapper-rounded" onClick={onDelete}>
          <AiFillDelete size="1.2em" />
        </span>
      </header>
      <footer className="image-info">
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <p>{item.price}$</p>
      </footer>
    </div>
  );
};

export default connect(null, { deleteItem, buyItem })(Item);
