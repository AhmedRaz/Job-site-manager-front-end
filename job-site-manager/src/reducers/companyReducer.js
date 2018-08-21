const defaultState = {
  company: {},
  companies: [],
  companyUsers: []
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

    case 'GET_COMPANY_USERS':
      return {
        ...state, companyUsers: [...action.payload]
      }


    default:
      return {...state};
  }
}

export default companyReducer
