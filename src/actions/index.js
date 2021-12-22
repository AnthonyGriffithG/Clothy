import itemsApi from '../apis/clothy-api';

export const signIn = (id) => {
  console.log(id);
  return {
    type: 'SIGN_IN',
    payload: id,
  };
};

export const signOut = () => {
  return {
    type: 'SIGN_OUT',
  };
};

export const addItem = (formValues) => async (dispatch) => {
  const { data } = await itemsApi.post('/items', formValues);
  dispatch({
    type: 'ADD_ITEM',
    payload: data,
  });
};

export const getItems = () => async (dispatch) => {
  const { data } = await itemsApi.get('/items');
  dispatch({
    type: 'GET_ITEMS',
    payload: data,
  });
};

export const getItem = (id) => async (dispatch) => {
  const { data } = await itemsApi.get(`/items/${id}`);
  dispatch({
    type: 'GET_ITEM',
    payload: data,
  });
};

export const editItem = (id, formValues) => async (disptach) => {
  const { data } = await itemsApi.post(`/items/${id}`, formValues);
  disptach({
    type: 'EDIT_ITEM',
    payload: data,
  });
};

export const deleteItem = (id) => async (dispatch) => {
  const { data } = await itemsApi.delete(`/items/${id}`);
  dispatch({
    type: 'DELETE_ITEM',
    payload: data,
  });
};
