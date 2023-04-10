import { React, useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

import style from './Details.module.css'
import Loader from '../../components/Loader/Loader'

import { pathCharacters } from '../../utilities/routePaths'

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
                  <div className={style.container} key={id}>
                    <div className={style.contactBox}>
                      <div className={style.right}>
                        <h2>{name}</h2>
                        {
                          status === 'Alive'
                            ? (
                              <h5><span className={style.tituloAbout}>STATUS: <span className={style.detail}>{status}</span>🌀</span></h5>
                              )
                            : (
                              <h5><span className={style.tituloAbout}>STATUS: <span className={style.detail}>{status}</span>💀</span></h5>

                              )
                        }
                        {
                          gender === 'Male'
                            ? (
                              <h5><span className={style.tituloAbout}>GENDER: <span className={style.detail}>{gender}</span>🙎‍♂️</span></h5>
                              )
                            : (
                              <h5><span className={style.tituloAbout}>GENDER: <span className={style.detail}>{gender}</span>🙎</span></h5>

                              )
                        }
                        {
                          specie === 'Alien'
                            ? (
                              <h5><span className={style.tituloAbout}>SPECIE: <span className={style.detail}>{specie}</span>👽</span></h5>
                              )
                            : (
                              <h5><span className={style.tituloAbout}>SPECIE: <span className={style.detail}>{specie}</span>👤</span></h5>
                              )
                        }
                        <h5><span className={style.tituloAbout}>ORIGIN: <span className={style.detail}>{origin}</span>🌐</span></h5>
                        <Link to={pathCharacters}><button className={style.btn}>Back</button></Link>
                      </div>
                      <div className={style.left}>
                        <img src={image} className={style.fotoPersonaje} />
                      </div>
                    </div>
                  </div>
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
