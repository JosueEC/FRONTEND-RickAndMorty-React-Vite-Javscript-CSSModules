import React from 'react'
import style from './About.module.css'

import { Link } from 'react-router-dom'
import { pathContact } from '../../utilities/routePaths'

export default function About () {
  return (
    <div className={style.containerAbout}>
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
            <Link to={pathContact}><button className={style.btn}>Contactar</button></Link>
          </div>
          <div className={style.left} />
        </div>
      </div>
    </div>
  )
}
