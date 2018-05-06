import { LOAD_CARDS, ADD_ITEM } from '../actions';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD_CARDS:
      return {
        ...state,
        cards: action.payload
      };
    case ADD_ITEM:
      return {
        ...state,
        cards: [...state.cards, action.payload]
      };
    default:
      return state;
  }
};

export default reducer;
