import { React, useContext, useState } from 'react'
import UserContext from '../../context/User/UserContext'

import style from './SearchBar.module.css'

export default function SearchBar () {
  const { getUsers } = useContext(UserContext)
  const [query, setQuery] = useState()

  function handleChange (event) {
    const value = event.target.value
    setQuery(value)
  }

  function handleClick (event) {
    getUsers(query)
  }

  return (
    <div className={style.containerSearchBar}>
      <input
        type='text' className={style.input}
        onChange={handleChange}
        onKeyDown={handleClick}
      />
      <button
        className={style.buttonSearch}
        onClick={handleClick}
      >Search
      </button>
    </div>
  )
}
