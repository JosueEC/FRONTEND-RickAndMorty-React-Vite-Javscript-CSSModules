import { React, useContext, useEffect } from 'react'
import UserContext from '../../context/User/UserContext'

import { useLocation } from 'react-router-dom'
import { pathFavorites } from '../../utilities/routePaths'

import style from './ContainerCards.module.css'

import CardCharacter from '../CardCharacter/CardCharacter'
import Loader from '../Loader/Loader'

export default function ContainerCards () {
  const { favorites, users, getUsers } = useContext(UserContext)
  const location = useLocation()

  useEffect(() => {
    if (location.pathname !== pathFavorites) {
      if (!users) {
        getUsers()
      }
    }
  }, [])

  return (
    <div className={style.containerCards}>
      {
        (location.pathname === pathFavorites)
          ? (
              favorites.length
                ? (
                    favorites.map(({ id, name, gender, specie, status, origin, image }) => {
                      return (
                        <CardCharacter
                          key={id}
                          id={id}
                          name={name}
                          gender={gender}
                          specie={specie}
                          status={status}
                          origin={origin}
                          image={image}
                        />
                      )
                    })
                  )
                : (
                  <Loader />
                  )
            )
          : (
              users.length
                ? (
                    users.map(({ id, name, gender, specie, status, origin, image }) => {
                      return (
                        <CardCharacter
                          key={id}
                          id={id}
                          name={name}
                          gender={gender}
                          specie={specie}
                          status={status}
                          origin={origin}
                          image={image}
                        />
                      )
                    })
                  )
                : (
                  <Loader />
                  )
            )
      }
    </div>
  )
}
