const defaultState = {
  company: {},
  location: {}
}

const createJobReducer = (state = defaultState, action) => {
  switch(action.type) {

    case 'GET_COMPANY':
      return {
        ...state, company: {...state.company, ...action.payload}
      }

    case 'GET_LOCATION':
      console.log("get location hit", action.payload)
      return {
        ...state, location: {...state.location, ...action.payload}
      }

    default:
      return {...state};
  }
}

export default createJobReducer
