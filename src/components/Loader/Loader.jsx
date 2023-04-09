import React from 'react'
import style from './Loader.module.css'

export default function Loader () {
  return (
    <div className={style.loading}>
      <div className={style.i} />
      <div className={style.a} />
      <div className={style.u} />
    </div>
  )
}
