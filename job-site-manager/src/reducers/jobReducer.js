const defaultState = {
  job: {},
  companyJobs: [],
  selectedEvent: null
}

const jobReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'GET_COMPANY_JOBS':
      return {
        ...state, companyJobs: [...action.payload]
      }

    case 'SELECTED_EVENT':
      return {
        ...state, selectedEvent: {...state.selectedEvent, ...action.payload}
      }

    case 'CLOSE_EVENT':
      return {
        ...state, selectedEvent: null
      }


    default:
      return {...state};
  }
}

export default jobReducer
