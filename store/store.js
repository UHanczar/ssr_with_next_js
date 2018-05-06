import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import reducer from '../reducers';

const initialState = {
  cards: []
};

const initStore = (state = initialState) =>
  createStore(reducer, state, composeWithDevTools(applyMiddleware(thunk)));

export default initStore;
