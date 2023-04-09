import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import CardCharacter from '../../components/CardCharacter/CardCharacter'

export default function Details () {
  const URL_BASE = 'http://localhost:3001/rickandmorty/character'
  const [data, setData] = useState()
  const { characterID } = useParams()

  useEffect(() => {
    fetch(`${URL_BASE}/${characterID}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data)
      })
  }, [])

  return (
    <div>
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
            <h3>Loading...</h3>
            )
      }
    </div>
  )
}
