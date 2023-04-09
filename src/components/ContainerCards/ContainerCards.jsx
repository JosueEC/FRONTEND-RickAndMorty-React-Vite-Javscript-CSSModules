import { React, useContext, useEffect } from 'react'
import UserContext from '../../context/User/UserContext'

import style from './ContainerCards.module.css'

import CardCharacter from '../CardCharacter/CardCharacter'
import Loader from '../Loader/Loader'

export default function ContainerCards () {
  const { users, getUsers } = useContext(UserContext)

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div className={style.containerCards}>
      {
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
      }
    </div>
  )
}
