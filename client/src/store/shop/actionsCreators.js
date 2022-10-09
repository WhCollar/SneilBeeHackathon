import {
  SET_CATEGORY_PRODUCTS,
  LOADING_CATEGORIES,
  // LOADING_PRICES,
} from './actionsTypes';

const SERVER_HOST = 'https://0c52-45-10-42-113.eu.ngrok.io/marketplace';

export function setPruductsByCategory(payload) {
  return { type: SET_CATEGORY_PRODUCTS, payload };
}

export function loadCategories(payload) {
  return { type: LOADING_CATEGORIES, payload };
}

export function loadProductsWithFilter(minimumPrice, maximumPrice, subCategoryId, page) {
  return (dispatch) => {
    fetch(SERVER_HOST + `/Auth/MockCatalog?PageNumber=${page}&PageSize=6`, {
      method: 'POST',
      body: JSON.stringify({
        minimumPrice,
        maximumPrice,
        subCategoryId,
      }),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.user,
      },
    })
    .then(response => response.json())
    .then(data => dispatch(setPruductsByCategory(data)));
  };
}

export function loadCategoriesFromServer() {
  return (dispatch) => {
    fetch(SERVER_HOST + '/Auth/CatalogFilterData', {
      method: 'GET',
      headers: { 'Authorization': 'Bearer ' + localStorage.user },
    })
    .then(response => response.json())
    .then(data => {
      dispatch(loadCategories(data.subCategories));
    });
  }
}
