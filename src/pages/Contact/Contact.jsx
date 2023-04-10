import React from 'react'
import style from './Contact.module.css'

export default function Contact () {
  return (
    <div>
      <div className={style.container}>
        <div className={style.contactBox}>
          <div className={style.left} />
          <div className={style.right}>
            <h2>Contactanos</h2>
            <input type='text' className={style.field} placeholder='Nombre' />
            <input type='text' className={style.field} placeholder='Correo Electronico' />
            <input type='text' className={style.field} placeholder='Telefono' />
            <textarea placeholder='Mensaje' className={style.field} />
            <button className={style.btn}>Enviar</button>
          </div>
        </div>
      </div>
    </div>
  )
}
