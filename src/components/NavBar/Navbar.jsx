import React from 'react'

import { Link } from 'react-router-dom'

import {
  pathHome,
  pathCharacters,
  pathFavorites,
  pathDetails,
  pathAbout,
  pathContact
} from '../../utilities/routePaths'

export default function Navbar () {
  return (
    <header>
      <nav>

        <ul>

          <li>
            <Link to={pathHome}>HOME</Link>
          </li>

          <li>
            <Link to={pathCharacters}>CHARACTERS</Link>
          </li>

          <li>
            <Link to={pathFavorites}>FAVORITES</Link>
          </li>

          <li>
            <Link to={pathDetails}>DETAILS</Link>
          </li>

          <li>
            <Link to={pathAbout}>ABOUT</Link>
          </li>

          <li>
            <Link to={pathContact}>CONTACT</Link>
          </li>

        </ul>

      </nav>
    </header>
  )
}
