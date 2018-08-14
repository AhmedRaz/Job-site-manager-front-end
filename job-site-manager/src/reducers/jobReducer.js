const defaultState = {
  job: {},
  companyJobs: []
}

const jobReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'GET_COMPANY_JOBS':
      return {
        ...state, companyJobs: [...action.payload]
      }



    case 'LOG_OUT':
      return {
      ...state, ...defaultState
      }

    default:
      return {...state};
  }
}

export default jobReducer
