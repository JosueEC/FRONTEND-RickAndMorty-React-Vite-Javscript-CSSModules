import React, { useReducer } from 'react'

import UserContext from './UserContext'
import UserReducer from './UserReducer'

import { GET_USERS, GET_PROFILE } from '../types'

const UserState = (props) => {
  const initialState = {
    users: [],
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
      console.log(res)
      const data = res
      dispatch({ type: GET_USERS, payload: data })
    } catch (error) {
      console.error(error.message)
    }
  }

  const getProfile = async (id) => {
    try {
      const res = await fetch(`http://localhost:3001/rickandmorty/character/?name=${id}`)
        .then((response) => response.json())
        .then((data) => {
          return data
        })
      // console.log(res)
      const data = res
      dispatch({ type: GET_PROFILE, payload: data })
    } catch (error) {
      console.log(error.message)
    }
  }

  // const addFavorite = async (id) => {
  //   try {
  //     // datos mandados con la solicutud POST
  //     // const _datos = {
  //     //   titulo: 'foo',
  //     //   principal: 'bar',
  //     //   Id: 1
  //     // }

  //     fetch(`http://localhost:3001/favorite/${id}`, {
  //       method: 'POST',
  //       // body: JSON.stringify(_datos),
  //       headers: { 'Content-type': 'application/json; charset=UTF-8' }
  //     })
  //       .then(response => response.json())
  //       .then(data => console.log(data))
  //   } catch (error) {
  //     console.log(error.message)
  //   }
  // }

  return (
    <UserContext.Provider
      value={{
        users: state.users,
        selectedUser: state.selectedUser,
        getUsers,
        getProfile
      }}
    >
      {props.children}
    </UserContext.Provider>
  )
}

export default UserState
