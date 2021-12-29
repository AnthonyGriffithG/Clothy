import { connect } from 'react-redux';
import '../../styles/ItemForms.css';
import { addItem } from '../../actions/index';
import ItemForm from './itemForm';

const ItemCreate = ({ addItem }) => {
  const onSubmit = (formValues) => {
    addItem(formValues);
  };
  return <ItemForm onSubmit={onSubmit} />;
};

export default connect(null, { addItem })(ItemCreate);
