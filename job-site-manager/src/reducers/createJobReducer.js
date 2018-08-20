const defaultState = {
  company: {},
  location: null,
  locationObject: null,
  jobObject: null
}

const createJobReducer = (state = defaultState, action) => {
  switch(action.type) {

    case 'GET_COMPANY':
      return {
        ...state, company: {...state.company, ...action.payload}
      }

    case 'GET_LOCATION':
      return {
        ...state, location: {...state.location, ...action.payload}
      }

    case 'GET_LOCATION_OBJECT':

      return {
        ...state, locationObject: {...action.payload}
      }

    case 'CREATE_NEW_JOB':
    console.log("this hit create job reducer", action.payload);
      return {
        ...state, jobObject: {...action.payload}
      }

    default:
      return {...state};
  }
}

export default createJobReducer
