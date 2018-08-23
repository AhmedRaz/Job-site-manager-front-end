const defaultState = {
  job: null,
  companyJobs: [],
  selectedEvent: null,
  jobEvents: [],
  jobImage: null
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
        ...state, companyJobs: [...state.companyJobs, action.payload], job: action.payload
      }

    case 'GET_JOB_EVENTS':
      return {
        ...state, jobEvents: [...action.payload]
      }

    case 'CREATE_JOB_EVENT':
      return {
        ...state, jobEvents: [...state.jobEvents, action.payload]
      }

    case 'SET_JOB':
      return {
        ...state, job: {...state.job, ...action.payload}
      }

    case 'SAVE_JOB_IMAGE':
      return {
        ...state, jobImage: {...action.payload}
      }

    case 'RESET_JOB':
      return {
        ...state, job: null
      }


    default:
      return {...state};
  }
}

export default jobReducer
