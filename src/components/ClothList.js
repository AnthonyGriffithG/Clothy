import Item from './Item';
import '../styles/ClothList.css';

const ClothList = ({ clothes }) => {
  const renderedItems = clothes?.map((item) => (
    <Item item={item} key={item.id} />
  ));

  return (
    <div>
      <div className="items-container">{renderedItems}</div>
    </div>
  );
};

export default ClothList;
