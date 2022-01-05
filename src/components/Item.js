import React from 'react';
import '../styles/Item.css';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { connect } from 'react-redux';
import { deleteItem } from '../actions';
import { Link } from 'react-router-dom';

const Item = ({ name, description, price, id, img_url, deleteItem }) => {
  const onDelete = async () => {
    deleteItem(id);
  };
  return (
    <div className="item">
      <div className="image">
        <img src={img_url} alt={description} />
      </div>
      <header className="image-header">
        <span className="icon-wrapper-rounded">
          <Link to={`/items/${id}`}>
            <AiFillEdit size="1.2em" />
          </Link>
        </span>
        <span className="icon-wrapper-rounded" onClick={onDelete}>
          <AiFillDelete size="1.2em" />
        </span>
      </header>
      <footer className="image-info">
        <h3>{name}</h3>
        <p>{description}</p>
        <p>{price}$</p>
      </footer>
    </div>
  );
};

export default connect(null, { deleteItem })(Item);
