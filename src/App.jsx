import { Routes, Route, useLocation } from 'react-router-dom'

import './App.css'

import Navbar from './components/NavBar/Navbar'

import Characters from './pages/Characters/Characters'
import Favorites from './pages/Favorites/Favorites'
import Details from './pages/Details/Details'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import LandingPage from './pages/LandingPage/LandingPage'

import {
  pathCharacters,
  pathFavorites,
  pathDetails,
  pathAbout,
  pathContact
} from './utilities/routePaths'

function App () {
  const location = useLocation()
  return (
    <main>
      {
        (location.pathname === '/home')
          ? (
            <LandingPage />
            )
          : (
            <Navbar />
            )
      }
      <Navbar />
      <Routes>

        <Route
          path={pathCharacters}
          element={<Characters />}
        />

        <Route
          path={pathFavorites}
          element={<Favorites />}
        />

        <Route
          path={pathDetails}
          element={<Details />}
        />

        <Route
          path={pathAbout}
          element={<About />}
        />

        <Route
          path={pathContact}
          element={<Contact />}
        />

      </Routes>
    </main>
  )
}

export default App
