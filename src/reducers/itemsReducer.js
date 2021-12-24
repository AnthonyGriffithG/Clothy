import { ADD_ITEM, GET_ITEMS, GET_ITEM, EDIT_ITEM, DELETE_ITEM } from './types';

const INITAL_STATE = {
  items: [],
  displayedItems: [],
};

const itemsReducer = (state = INITAL_STATE, { type, payload }) => {
  switch (action) {
    case ADD_ITEM:
      return {
        ...state,
        items: [...items, payload],
        displayedItems: [...displayedItems, payload],
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
