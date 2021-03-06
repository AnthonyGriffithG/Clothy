import itemsApi from '../apis/clothy-api';

import {
  SIGN_IN,
  SIGN_OUT,
  ADD_ITEM,
  GET_ITEMS,
  GET_ITEM,
  EDIT_ITEM,
  DELETE_ITEM,
  BUY_ITEM,
} from './types';
export const signIn = (id, imgUrl) => {
  return {
    type: SIGN_IN,
    payload: { id, imgUrl },
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const addItem = (formValues) => async (dispatch) => {
  const { data } = await itemsApi.post('/items', formValues);
  dispatch({
    type: ADD_ITEM,
    payload: data,
  });
};

export const getItems = () => async (dispatch) => {
  const { data } = await itemsApi.get('/items');
  dispatch({
    type: GET_ITEMS,
    payload: data,
  });
};

export const getItem = (id) => async (dispatch) => {
  const { data } = await itemsApi.get(`/items/${id}`);
  dispatch({
    type: GET_ITEM,
    payload: data,
  });
};

export const editItem = (id, formValues) => async (disptach) => {
  const { data } = await itemsApi.put(`/items/${id}`, formValues);
  disptach({
    type: EDIT_ITEM,
    payload: data,
  });
};

export const deleteItem = (id) => async (dispatch) => {
  await itemsApi.delete(`/items/${id}`);
  dispatch({
    type: DELETE_ITEM,
    payload: id,
  });
};

export const buyItem = (item) => async (dispatch) => {
  item.available = false;
  const { data } = await itemsApi.put(`/items/${item.id}`, item);
  dispatch({
    type: BUY_ITEM,
    payload: data,
  });
};
