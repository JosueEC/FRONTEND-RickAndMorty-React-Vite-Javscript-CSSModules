import { React, useContext } from 'react'
import UserContext from '../../context/User/UserContext'

import ContainerCards from '../../components/ContainerCards/ContainerCards'

export default function Favorites () {
  const { favorites } = useContext(UserContext)
  return (
    <main>
      <ContainerCards characters={favorites} />
    </main>
  )
}
