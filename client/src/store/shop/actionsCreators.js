import {
  LOADING_PRODUCTS,
  SET_CATEGORY_PRODUCTS,
} from './actionsTypes';

export function loadProducts(payload) {
  return { type: LOADING_PRODUCTS, payload };
}

export function setPruductsByCategory(payload) {
  return { type: SET_CATEGORY_PRODUCTS, payload };
}

export function loadProductsFromServer() {
  return (dispatch) => {
    fetch('https://0c52-45-10-42-113.eu.ngrok.io/marketplace/MockCatalog?PageNumber=1&PageSize=20')
    .then(response => response.json())
    .then(data => dispatch(loadProducts(data)));
  };
}
