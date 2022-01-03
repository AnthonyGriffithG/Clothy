import { connect } from 'react-redux';
import '../../styles/ItemForms.css';
import { addItem } from '../../actions/index';
import ItemForm from './itemForm';
import { IMGBB_KEY } from '../../config';
import axios from 'axios';

const ItemCreate = ({ addItem }) => {
  const onSubmit = async (formValues) => {
    const reqBody = new FormData();
    reqBody.set('key', IMGBB_KEY);
    reqBody.append('image', formValues.image[0]);
    const { data } = await axios.post(
      'https://api.imgbb.com/1/upload',
      reqBody
    );
    formValues.img_url = data.data.url;
    console.log(formValues);
    addItem(formValues);
  };
  return <ItemForm onSubmit={onSubmit} />;
};

export default connect(null, { addItem })(ItemCreate);
