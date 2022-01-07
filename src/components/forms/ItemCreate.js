import { connect } from 'react-redux';
import '../../styles/ItemForms.css';
import { addItem } from '../../actions/index';
import ItemForm from './ItemForm';
import { IMGBB_KEY } from '../../config';
import axios from 'axios';
import { useState } from 'react';

const ItemCreate = ({ addItem }) => {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (formValues) => {
    setLoading(true);

    const reqBody = new FormData();
    reqBody.set('key', IMGBB_KEY);
    reqBody.append('image', formValues.image[0]);
    const { data } = await axios.post(
      'https://api.imgbb.com/1/upload',
      reqBody
    );
    formValues.img_url = data.data.url;
    await addItem(formValues);
  };
  return (
    <>
      {loading ? (
        <div className="ui active inverted dimmer">
          <div className="ui text loader">Uploading</div>
        </div>
      ) : (
        <ItemForm onSubmit={onSubmit} formTitle="New Item Form" />
      )}
    </>
  );
};

export default connect(null, { addItem })(ItemCreate);
