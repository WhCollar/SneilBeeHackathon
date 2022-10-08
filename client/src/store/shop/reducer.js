import {
  SET_CATEGORY_PRODUCTS,
  LOADING_CATEGORIES,
  // LOADING_PRICES,
} from './actionsTypes';

const initialState = {
  products: [],
  categories: [],
  // price: { minimumPrice: 0, maximumPrice: 1 },
};

export default function listReducer(state = initialState, action) {
  switch (action.type) {

    case SET_CATEGORY_PRODUCTS: {
      return { ...state, products: action.payload };
    }

    case LOADING_CATEGORIES: {
      return { ...state, categories: action.payload };
    }

    // case LOADING_PRICES: {
    //   return { ...state, price: { minimumPrice: action.payload.minimumPrice, maximumPrice: action.payload.maximumPrice } };
    // }

    default: return state;
  }
}
