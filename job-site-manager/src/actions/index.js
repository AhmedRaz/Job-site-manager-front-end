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
    .then((id) => {
      dispatch(getCompanyJobs("jobs", "company", id))
    })
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
    .then((id) => {
      dispatch(getCompanyJobs("jobs", "company", id))
      // let location = currentLocation();
      // return location
    })
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
  .then((id) => {
    dispatch(getCompanyJobs("jobs", "company", id))
    // let location = currentLocation();
    // return location
  })
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
  return {
    type: "CLOSE_EVENT"
  }
}

export const getLocation = (pos) => {

  return {
      type: "GET_LOCATION",
      payload: pos
  }
}

export const createLocation = (route, location) => {
  return (dispatch) => {
    RestfulAdapter.createFetch(route, location)
    .then(data => dispatch({
      type: "GET_LOCATION_OBJECT",
      payload: data
    }))
  }
}

export const selectLocation = (route, location_id) => {
  return (dispatch) => {
    RestfulAdapter.showFetch(route, location_id)
    .then(data => dispatch({
      type: "GET_LOCATION_OBJECT",
      payload: data
    }))
  }
}

export const createJob = (route, job) => {
  return (dispatch) => {
    RestfulAdapter.createFetch(route, job)
    .then(data => dispatch({
      type: "CREATE_NEW_JOB",
      payload: data
    }))
  }
}

export const getJobEvents = (route, job, job_id) => {
  return (dispatch) => {
    RestfulAdapter.filteredFetch(route, job, job_id)
    .then(data => dispatch({
      type: 'GET_JOB_EVENTS',
      payload: data
    }))
  }
}

export const createEventObject = (route, event) => {
  return (dispatch) => {
    RestfulAdapter.createFetch(route, event)
    .then(data => dispatch({
      type: 'CREATE_JOB_EVENT',
      payload: data
    }))
  }
}

export const setJob = (job) => {
  return {
      type: 'SET_JOB',
      payload: job
    }
}
