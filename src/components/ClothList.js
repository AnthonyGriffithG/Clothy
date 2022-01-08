import Item from './Item';
import '../styles/ClothList.css';

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
      <div className="items-container">{renderedItems}</div>
    </div>
  );
};

export default ClothList;
