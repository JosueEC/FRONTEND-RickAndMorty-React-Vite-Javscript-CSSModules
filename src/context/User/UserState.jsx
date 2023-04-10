import React, { useReducer } from 'react'

import UserContext from './UserContext'
import UserReducer from './UserReducer'

import { GET_USERS, ADD_FAVORITE, DELETE_FAVORITE } from '../types'

const UserState = (props) => {
  const initialState = {
    users: [],
    favorites: [],
    allUsers: [],
    selectedUser: null
  }

  const [state, dispatch] = useReducer(UserReducer, initialState)

  const getUsers = async (query = 'rick') => {
    try {
      const res = await fetch(`http://localhost:3001/rickandmorty/character/?name=${query}`)
        .then((response) => response.json())
        .then((data) => {
          return data
        })
      // console.log(res)
      const data = res
      dispatch({ type: GET_USERS, payload: data })
    } catch (error) {
      console.error(error.message)
    }
  }

  // const getProfile = async (id) => {
  //   try {
  //     const res = await fetch(`http://localhost:3001/rickandmorty/character/?name=${id}`)
  //       .then((response) => response.json())
  //       .then((data) => {
  //         return data
  //       })
  //     // console.log(res)
  //     const data = res
  //     dispatch({ type: GET_PROFILE, payload: data })
  //   } catch (error) {
  //     console.log(error.message)
  //   }
  // }

  const addFavorite = async (character) => {
    // console.log(character)
    dispatch({
      type: ADD_FAVORITE,
      payload: character
    })
  }

  const deleteFavorite = async (id) => {
    dispatch({
      type: DELETE_FAVORITE,
      payload: id
    })
  }

  return (
    <UserContext.Provider
      value={{
        users: state.users,
        favorites: state.favorites,
        selectedUser: state.selectedUser,
        getUsers,
        deleteFavorite,
        addFavorite
      }}
    >
      {props.children}
    </UserContext.Provider>
  )
}

export default UserState
