import { React, useContext, useEffect, useState } from 'react'
import UserContext from '../../context/User/UserContext'
import { Link } from 'react-router-dom'

import style from './CardCharacter.module.css'
import Portal from './assets/portal1.png'

export default function CardCharacter (props) {
  // const { id, name, gender, specie, status, origin, image, favorite } = props
  const { id, name, status, image } = props
  const { favorites, addFavorite, deleteFavorite } = useContext(UserContext)

  const [isFav, setIsFav] = useState(false)

  function handleFavorite (event) {
    // event.preventDefault()
    if (isFav) {
      setIsFav(false)
      deleteFavorite(id)
    } else {
      setIsFav(true)
      addFavorite(props)
    }
  }

  useEffect(() => {
    console.log('FAVORITES: ', favorites)
    favorites.forEach(char => {
      // console.log('CHAR ID: ', char.id)
      if (char.id === id) {
        setIsFav(true)
      }
    })
  }, [favorites])

  return (
    <div className={style.containerCard} key={id}>
      {
        isFav
          ? (
            <button onClick={handleFavorite} className={style.buttonFav}>❤️</button>
            )
          : (
            <button onClick={handleFavorite} className={style.buttonFav}>🤍</button>
            )
      }

      <button className={style.buttonClose}>X</button>

      <Link to={`/details/${id}`} className={style.link}>
        <div className={style.boxImg}>
          <img className={style.portal} src={Portal} alt='portal' />
          <img src={image} alt='foto' />
        </div>
        <div className={style.boxContent}>
          <span>{name}</span>
          {
            status === 'Alive'
              ? (
                <span>🌀{status}</span>
                )
              : (
                <span>💀{status}</span>
                )
          }
        </div>
      </Link>

    </div>
  )
}

// "id": 1,
// "name": "Rick Sanchez",
// "gender": "Male",
// "specie": "Human",
// "status": "Alive",
// "origin": "Earth (C-137)",
// "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
// "favorite": false
