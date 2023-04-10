import React from 'react'
import style from './FiltersPanel.module.css'

export default function FiltersPanel () {
  return (
    <div className={style.containerPanel}>
      <label className={style.cont}>
        <input type='checkbox' checked='' />
        <span />
      </label>
    </div>
  )
}
