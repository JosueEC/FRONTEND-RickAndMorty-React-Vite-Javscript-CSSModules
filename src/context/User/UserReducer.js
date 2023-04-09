import { GET_USERS, GET_PROFILE, ADD_FAVORITE } from '../types'

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  const { payload, type } = action

  switch (type) {
    case GET_USERS:
      return {
        ...state,
        users: payload
      }
    case GET_PROFILE:
      return {
        ...state,
        selectedUser: payload
      }
    case ADD_FAVORITE:
      return {
        ...state,
        favorites: payload
      }
    default:
      return state
  }
}
