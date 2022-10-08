import {
  LOADING_PRODUCTS,
  SET_CATEGORY_PRODUCTS,
} from './actionsTypes';

const initialState = {
  products: [],
  productsWithCategories: [],
};

export default function listReducer(state = initialState, action) {
  switch (action.type) {
    case LOADING_PRODUCTS: {
      return { ...state, products: action.payload };
    }
    case SET_CATEGORY_PRODUCTS: {
      return { ...state, productsWithCategories: state.products.filter(product => action.payload ? product.catigory === action.payload : product)}
    }

    default: return state;
  }
}
