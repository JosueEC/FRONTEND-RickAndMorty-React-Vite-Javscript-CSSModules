import { GET_USERS, GET_PROFILE, ADD_FAVORITE, DELETE_FAVORITE } from '../types'

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
      // console.log('PAYLOAD: ', payload)
      // console.log('Favs; ', state.favorites)
      return {
        ...state,
        favorites: [...state.favorites, payload]
        // users: [...state.favorites, payload]
      }
    case DELETE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter((character) => {
          return (character.id !== payload)
        })
      }
    default:
      return state
  }
}
