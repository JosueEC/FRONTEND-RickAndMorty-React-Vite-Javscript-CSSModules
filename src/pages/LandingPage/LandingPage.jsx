import React from 'react'
import style from './LandingPage.module.css'

import { Link } from 'react-router-dom'

import { pathCharacters } from '../../utilities/routePaths'

export default function LandingPage () {
  return (
    <div className={style.fullbackground}>

      <div className={style.containerText}>
        <p>Bienvenido(a) al resgistro intergalactico multiversal de Rick, aqui puedes encontrar los registros detallados de todos los seres galacticos multiversales descubiertos por Rick Sanchez</p>
        <Link to={pathCharacters}>
          <button data-text='Awesome' className={style.button}>
            <span class='actual-text'>&nbsp;COMENZAR&nbsp;</span>
            <span className={style.hoverText} aria-hidden='true'>&nbsp;COMENZAR&nbsp;</span>
          </button>
        </Link>
      </div>

    </div>
  )
}
