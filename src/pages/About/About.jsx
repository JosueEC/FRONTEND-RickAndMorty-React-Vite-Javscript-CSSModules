import React from 'react'
import style from './About.module.css'

export default function About () {
  return (
    <body>
      <div className={style.container}>
        <div className={style.contactBox}>
          <div className={style.right}>
            <h2>Acerca del Desarrollador</h2>
            <h5><span className={style.tituloAbout}>Back-End</span> Developer</h5>
            <p className={style.parrafoAbout}>Mi nombre es Josue, soy Back-End Developer
              este proyecto es una Aplicacion compuesta por un FrontEnd y un Back-End.

              Para el BackEnd use Javascript, NodeJS, Express, Sequelize, y PostgreSQL.
              Para el FrontEnd use Javascript, ReactJS, UseContext, CSSModules
            </p>
            <button className={style.btn}>Contactar</button>
          </div>
          <div className={style.left} />
        </div>
      </div>
    </body>
  )
}
