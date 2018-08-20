const defaultState = {
  job: {},
  companyJobs: [],
  selectedEvent: null,
  jobEvents: []
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

    case 'CREATE_NEW_JOB':
      return {
        ...state, companyJobs: [...state.companyJobs, action.payload]
      }

    case 'GET_JOB_EVENTS':
      return {
        ...state, jobEvents: [...state.jobEvents, ...action.payload]
      }

    case 'CREATE_JOB_EVENT':
      return {
        ...state, jobEvents: [...state.jobEvents, action.payload]
      }

    case 'SET_JOB':
      return {
        ...state, job: {...state.job, ...action.payload}
      }

    default:
      return {...state};
  }
}

export default jobReducer
