import { Routes, Route } from 'react-router-dom'

import Navbar from './components/NavBar/Navbar'

import Home from './pages/Home/Home'
import Characters from './pages/Characters/Characters'
import Favorites from './pages/Favorites/Favorites'
import Details from './pages/Details/Details'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'

import {
  pathHome,
  pathCharacters,
  pathFavorites,
  pathDetails,
  pathAbout,
  pathContact
} from './utilities/routePaths'

function App () {
  return (
    <main>
      <Navbar />
      <Routes>

        <Route
          path={pathHome}
          element={<Home />}
        />

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
