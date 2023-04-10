import { React, useRef } from 'react'
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2'

import style from './Contact.module.css'

export default function Contact () {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_axnlw4x', 'template_1mrf3hk', form.current, 'xkO13cgywu9X4R4dz')
      .then((result) => {
        console.log(result.text)
        Swal.fire(
          'Correo Enviado',
          'Pronto me comunicare contigo',
          'success'
        )
        e.target.reset()
      }, (error) => {
        console.log(error.text)
      })
  }

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className={style.container}>
        <div className={style.contactBox}>
          <div className={style.left} />
          <div className={style.right}>
            <h2>Contactanos</h2>
            <input type='text' name='user_name' className={style.field} placeholder='Nombre' />
            <input type='email' name='user_email' className={style.field} placeholder='Correo Electronico' />
            {/* <input type='text' className={style.field} placeholder='Telefono' /> */}
            <textarea name='message' placeholder='Mensaje' className={style.field} />
            <input type='submit' value='Send' className={style.btn} />
          </div>
        </div>
      </div>
    </form>
  )
}
