const defaultState = {
  user: {},
  currentUserExists: false,
  authentication: false,
  error: "",
  companies: []
}

const userReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'LOGIN_USER':

      return {
        ...state, user: {...state.user, ...action.payload}, currentUserExists: !state.currentUserExists,
        authentication: !state.authentication, error:""
      }

    case 'LOGIN_ERROR':
      return {
        ...state, error: "AUTHENTICATION ERROR"
      }

    case 'LOG_OUT':
    return {
      ...state, ...defaultState
    }

    default:
      return {...state};
  }
}

export default userReducer
