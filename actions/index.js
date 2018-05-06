import data from '../data/data.json';

export const LOAD_CARDS = 'LOAD_CARDS';
export const ADD_ITEM = 'ADD_ITEM';

export const loadCards = () => ({
  type: LOAD_CARDS,
  payload: data
});

export const addItem = item => ({
  type: ADD_ITEM,
  payload: item
});
