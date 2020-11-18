import {client, localStorageKey} from './api-client'
import * as url from "../utils/constants";
import {queryCache} from "react-query";
import toastr from "toastr";

async function handleUserResponse(data) {
  window.localStorage.setItem("user", JSON.stringify(data.data));
  return data
}
function login({email, password}) {
  return client(url.LOGIN_URL, {data: {email, password}}).then(handleUserResponse)
}
function register(data) {
  return client(`${url.REACT_APP_BACKEND_URL_LOCAL}/api/v1/auth/user/register`, {data}).then(
    handleUserResponse,
  )
}
function getUser() {
  const token = getToken();
  if (!token) {
    return Promise.resolve(null)
  }
  return client(`${url.BASE_URL}/users/get`, {data: {token}}).then(data => {
    console.log("GET_USER ", data)
    if (data.status === "success") {
      return data.user
    } else {
      toastr.error(data.error);
      window.localStorage.clear();
      return null
    }
  })
}
function getRandomProducts() {
  return client(`${url.BASE_URL}/products/get-random-products`).then( data => data)
}

function getProductCategory(data) {
  return client(`${url.BASE_URL}/products/product-category/${data}`).then( data => data)
}

function getVariants(data) {
  return client(`${url.BASE_URL}/products/product-variant/${data}`).then( data => data)
}

function getProductVariant(data) {
  return client(`${url.BASE_URL}/products/variant/${data}`).then( data => data)
}

function searchProducts(data) {
  return client(`${url.BASE_URL}/products/search`, {data}).then( data => data)
}

function orderCreate(data) {
  return client(`${url.REACT_APP_BACKEND_URL_LOCAL}/api/v1/orders/create`, {data}).then( data => data)
}


function getToken() {
  let token = window.localStorage.getItem(localStorageKey);
  if (token) {
    return token
  }
  return null
}


function isLoggedIn() {
  return Boolean(getToken())
}

function logout() {
  queryCache.clear();
  window.localStorage.removeItem(localStorageKey);
}


export {login, register, getToken, isLoggedIn, getUser, getRandomProducts,
  getProductCategory, getVariants, getProductVariant, searchProducts, orderCreate}
export {logout} from './api-client'
