import {ADD_TO_CART, REMOVE_FROM_CART} from './types';

const cartItems = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // TODO: return a new state that has the old items, and includes the item in the payload
      return [...state, action.payload];
    case REMOVE_FROM_CART:
      // TODO: find the item that needs to be removed by checking their IDs (the ids are generated in the ProductCatalog.js)
      // Check that the item you are trying to remove exists in the cart and remove it if it does 
      // The best practice for Redux is to not add logic to the reducer, however for simplicity you can do that this time 

      const itemIndexToRemove = state.findIndex(cartItem => cartItem.id === action.payload.id);
      // this is bad practice, you should not have boolean logic in your reducer
      if (itemIndexToRemove !== -1) {
        const resultArray = [...state.slice(0, itemIndexToRemove), ...state.slice(itemIndexToRemove + 1)];
        state = resultArray;
      } 
      return state;
    default:
      return state;
    }
};

export default cartItems;
