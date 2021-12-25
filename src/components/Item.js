import React from 'react';
import '../styles/Item.css';

const Item = ({ name, description, price }) => {
  return (
    <div className="item">
      <div className="image">
        <img
          src="https://i.ibb.co/txykJPg/1ed5876d-234e-4e3d-be54-16827af4a0c6.jpg"
          alt={description}
        />
      </div>
      <footer className="image-info">
        <h3>{name}</h3>
        <p>{description}</p>
        <p>{price}$</p>
      </footer>
    </div>
  );
};

export default Item;
