import { connect } from 'react-redux';
import '../../styles/ItemForms.css';
import { editItem, getItem } from '../../actions/index';
import ItemForm from './ItemForm';
import { IMGBB_KEY } from '../../config';
import axios from 'axios';
import { useEffect, useState } from 'react';
import history from '../../history';

const ItemEdit = ({ editItem, item, getItem, match }) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getItem(match.params.id);
  }, [getItem, match.params.id]);

  const onSubmit = async (formValues) => {
    setLoading(true);
    if (formValues.image.length) {
      console.log('entro');
      const reqBody = new FormData();
      reqBody.set('key', IMGBB_KEY);
      reqBody.append('image', formValues.image[0]);
      const { data } = await axios.post(
        'https://api.imgbb.com/1/upload',
        reqBody
      );
      formValues.img_url = data.data.url;
    } else {
      formValues.img_url = item.img_url;
    }
    console.log(formValues);
    await editItem(item.id, formValues);
    setLoading(false);
    history.push('/');
  };

  return (
    <>
      {loading ? (
        <div className="ui active inverted dimmer">
          <div className="ui text loader">Uploading</div>
        </div>
      ) : (
        <ItemForm
          onSubmit={onSubmit}
          initialValues={{
            name: item?.name,
            description: item?.description,
            price: item?.price,
          }}
          formTitle="Edit Item Form"
        />
      )}
    </>
  );
};

const mapStateToProps = (state, props) => {
  return {
    item: state.items.all.find((item) => item.id === +props.match.params.id),
  };
};
export default connect(mapStateToProps, { editItem, getItem })(ItemEdit);
