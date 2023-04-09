import React from 'react'

import style from './SearchBar.module.css'

export default function SearchBar () {
  return (
    <div className={style.containerSearchBar}>
      <input type='text' className={style.input} />
      <button className={style.buttonSearch}>Buscar</button>
    </div>
  )
}
