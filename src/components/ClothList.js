import Item from './Item';
import { MdAddCircle } from 'react-icons/md';
import '../styles/ClothList.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const ClothList = ({ clothes }) => {
  const [fixed, setFixed] = useState(false);
  const changeAddBtn = () => {
    if (window.innerWidth < 600 && window.scrollY >= 70) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeAddBtn);
    return () => {
      window.removeEventListener('scroll', changeAddBtn);
    };
  }, []);

  const renderedItems = clothes?.map(
    ({ id, name, description, price, img_url }) => (
      <Item
        id={id}
        name={name}
        description={description}
        price={price}
        img_url={img_url}
        key={id}
      />
    )
  );

  return (
    <div>
      <div className="items-options">
        <div></div>
        <Link
          className={`add-item-link ${fixed ? 'fixed' : ''}`}
          to={'/items/new'}
        >
          <MdAddCircle size={fixed ? '3em' : '2em'} />
        </Link>
      </div>
      <div className="items-container">{renderedItems}</div>
    </div>
  );
};

export default ClothList;
