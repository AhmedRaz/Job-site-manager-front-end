const defaultState = {
  user: {},
  currentUserExists: false
}

const userReducer = (state = defaultState, action) => {
  switch(action.type) {
    default:
      return {...state};
  }
}

export default userReducer
