const defaultState = {
  company: {},
  companies: []
}

const companyReducer = (state = defaultState, action) => {
  switch(action.type) {

    case 'GET_COMPANIES':
      return {
        ...state, companies: [...action.payload]
      }

    case 'GET_COMPANY':
      return {
        ...state, company: {...state.company, ...action.payload}
      }

    case 'LOG_OUT':
      return {
        ...state, ...defaultState
      }

    default:
      return {...state};
  }
}

export default companyReducer
