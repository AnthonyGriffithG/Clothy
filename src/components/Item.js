import React from 'react';

const Item = ({ id, name, description, price }) => {
  return (
    <div className="item" key={id}>
      <div className="image">
        <img src="#" alt={description} />
      </div>
      <footer className="image-info">
        <h3>{name}</h3>
        <p>{description}</p>
        <p>{price}</p>
      </footer>
    </div>
  );
};

export default Item;
