import { React, useState, useEffect } from 'react'

import style from './ContainerCards.module.css'

import CardCharacter from '../CardCharacter/CardCharacter'

export default function ContainerCards () {
  const BASE_URL = 'http://localhost:3001/rickandmorty/character/?name=rick'
  const [data, setData] = useState()

  useEffect(() => {
    fetch(BASE_URL)
      .then((response) => response.json())
      .then((data) => {
        setData(data)
      })
  }, [])

  return (
    <div className={style.containerCards}>
      {
        data
          ? (
              data.map(({ id, name, gender, specie, status, origin, image }) => {
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
