import Item from './Item';
import { MdAddCircle } from 'react-icons/md';
import '../styles/ClothList.css';
import { Link } from 'react-router-dom';

const ClothList = ({ clothes }) => {
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
        <Link className="add-item-link" to={'/items/new'}>
          <MdAddCircle size="2em" />
        </Link>
      </div>
      <div className="items-container">{renderedItems}</div>
    </div>
  );
};

export default ClothList;
