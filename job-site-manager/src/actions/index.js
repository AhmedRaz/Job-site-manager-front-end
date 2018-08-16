import { RestfulAdapter } from "../adapters";

export const loginUser = (email, password) => {
  return (dispatch) => {
    RestfulAdapter.loginUser(email, password)
    .then(data => {
      localStorage.setItem('token', data.token)
      return RestfulAdapter.getCurrentUser(data.token)
    })
    .then(data => {
      dispatch({type: "LOGIN_USER", payload: data});
      return data.company.id
    })
    .then(id => RestfulAdapter.showFetch("companies", id))
    .then(company => {
      dispatch({type: "GET_COMPANY", payload: company})
      return company.id
    })
    .then((id) => dispatch(getCompanyJobs("jobs", "company", id)))
    .catch(err => dispatch(loginError()))
  }
}

export const createUser = (route, body) => {
  return (dispatch) => {
    RestfulAdapter.createFetch(route, body)
    .then(data => {
      return RestfulAdapter.getCurrentUser(data.token)})
    .then(data => {
      dispatch({type: "LOGIN_USER", payload: data})
      return data.company.id
    })
    .then(id => RestfulAdapter.showFetch("companies", id))
    .then(company => {
      dispatch({type: "GET_COMPANY", payload: company})
      return company.id
    })
    .then((id) => dispatch(getCompanyJobs("jobs", "company", id)))
    .catch(err => dispatch(loginError()))
  }
}

export const getUser = (token) => {
  return (dispatch) => {
    RestfulAdapter.getCurrentUser(token)
  .then(data => {
    dispatch({type: "LOGIN_USER", payload: data})
    return data.company.id
  })
  .then(id => RestfulAdapter.showFetch("companies", id))
  .then(company => {
    dispatch({type: "GET_COMPANY", payload: company})
    return company.id
  })
  .then((id) => dispatch(getCompanyJobs("jobs", "company", id)))
  .catch(err => dispatch(loginError()))
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

export const getCompany = (route, id) => {
  return (dispatch) => {
    RestfulAdapter.showFetch(route, id)
    .then(company => dispatch({type: "GET_COMPANY", payload: company}))
  }
}

export const getCompanyJobs = (route, filter, search_param) => {

  return (dispatch) => {
    RestfulAdapter.filteredFetch(route, filter, search_param)
    .then(data => dispatch({type: "GET_COMPANY_JOBS", payload: data}))
  }
}

export const selectEvent = (eventId) => {
  return (dispatch) => {
    RestfulAdapter.showFetch("events", eventId)
    .then(event => dispatch({
      type: "SELECTED_EVENT",
      payload: event
    }))
  }
}

export const closeEvent = () => {
  console.log("close event hit")
  return {
    type: "CLOSE_EVENT"
  }
}
