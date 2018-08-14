import { RestfulAdapter } from "../adapters";

export const loginUser = (email, password) => {
  return (dispatch) => {
    RestfulAdapter.loginUser(email, password)
    .then(data => {
      localStorage.setItem('token', data.token)
      return RestfulAdapter.getCurrentUser(data.token)
    })
    .then(data => {
      dispatch({type: "LOGIN_USER", payload: data})})
    .catch(err => dispatch(loginError()))
  }
}

export const createUser = (route, body) => {
  return (dispatch) => {
    RestfulAdapter.createFetch(route, body)
    .then(data => {
      return RestfulAdapter.getCurrentUser(data.token)})
    .then(data => dispatch({type: "LOGIN_USER", payload: data}))
    .catch(err => dispatch(loginError()))
  }
}

export const getUser = (token) => {
  return (dispatch) => {
    RestfulAdapter.getCurrentUser(token)
  .then(data => dispatch({type: "LOGIN_USER", payload: data}))
  }
}

export const loginError = () => {
  return {
    type:"LOGIN_ERROR"
  }
}

export const getCompanies = () => {
  return (dispatch) => {
    RestfulAdapter.indexFetch('companies')
    .then(data => dispatch({type:"GET_COMPANIES", payload: data}))
  }
}

export const logOut =() => {
  return (dispatch) => {
    localStorage.removeItem('token');
    dispatch({type:"LOG_OUT"})

  }
}
