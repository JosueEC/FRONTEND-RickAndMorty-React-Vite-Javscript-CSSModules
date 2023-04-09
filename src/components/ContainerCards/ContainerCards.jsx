// import { React, useState, useEffect } from 'react'
import { React, useContext, useEffect } from 'react'
import UserContext from '../../context/User/UserContext'

import style from './ContainerCards.module.css'

import CardCharacter from '../CardCharacter/CardCharacter'

export default function ContainerCards () {
  // const BASE_URL = 'http://localhost:3001/rickandmorty/character/?name=rick'
  // const [data, setData] = useState()

  const { users, getUsers } = useContext(UserContext)

  useEffect(() => {
    // fetch(BASE_URL)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setData(data)
    //   })
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
            <h2>Loading...</h2>
            )
      }
    </div>
  )
}
