import {
  ADD_ITEM,
  GET_ITEMS,
  GET_ITEM,
  EDIT_ITEM,
  DELETE_ITEM,
} from '../actions/types.js';

const INITAL_STATE = {
  items: [],
  displayedItems: [],
};

const itemsReducer = (state = INITAL_STATE, { type, payload }) => {
  switch (type) {
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, payload],
        displayedItems: [...state.displayedItems, payload],
      };
    case GET_ITEMS:
      return {
        ...state,
        items: payload,
        displayedItems: payload,
      };
    case EDIT_ITEM:
      const newListHandler = (list) =>
        list.map((el) => (el.id === payload.id ? payload : el));

      return {
        ...state,
        items: newListHandler(state.items),
        displayedItems: newListHandler(state.displayedItems),
      };

    default:
      return state;
  }
};

export default itemsReducer;
