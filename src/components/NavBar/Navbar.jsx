import React from 'react'

import style from './Navbar.module.css'
import SearchBar from '../SearchBar/SearchBar'

import { Link } from 'react-router-dom'

import {
  pathHome,
  pathCharacters,
  pathFavorites,
  // pathDetails,
  pathAbout,
  pathContact
} from '../../utilities/routePaths'

export default function Navbar () {
  return (
    <header>
      <nav>
        <label className={style.logo}>
          <Link to={pathHome} className={style.logo}>Rick & Morty</Link>
        </label>

        <ul>

          <li>
            <Link to={pathHome} className={style.link}>HOME</Link>
          </li>

          <li>
            <Link to={pathCharacters} className={style.link}>CHARACTERS</Link>
          </li>

          <li>
            <Link to={pathFavorites} className={style.link}>FAVORITES</Link>
          </li>

          <li>
            <Link to={pathAbout} className={style.link}>ABOUT</Link>
          </li>

          <li>
            <Link to={pathContact} className={style.link}>CONTACT</Link>
          </li>

          <li>
            <SearchBar />
          </li>

        </ul>
      </nav>
    </header>
  )
}
