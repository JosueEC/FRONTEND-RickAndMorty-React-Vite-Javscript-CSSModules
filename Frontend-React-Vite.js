// EN ESTA DEMO TENEMOS UNA GUIA DE UN PROYECTO BASICO DE FRONTEND
// EL CUAL ESTA CREADO CON LA LIBRERIA DE REACT EN CONJUNTO CON VITE

// REACT es una libreria de Javascript para crear interfaces de usuario
// VITE es una herramienta frontend de nueva generación que permite
// crear un servidor de desarrollo y compilar (hacer el build) del
// código para producción.

// 1.-Creamos nuestra carpeta para el proyecto FrontEnd
// 2.-Ejecutamos el comando que crea nuestra plantilla del
// proyecto:
/*  npm create vite@latest name-proyect -- --template react */
// 3.-Ejecutamos los comandos que nos pide la plantilla
/*
  cd name-proyect
  npm install
  npm run dev
*/
// 4.-Y listo, con eso ya tenemos una plantilla de React + Vite
// lista para trabajar

// 5.-Agregamos nuestra configuracion para el esLint (Opcional)
/*  npm install standard -D */
// 6.-Y agregamos la eslintConfig al package.json(Opcional)
/*
"eslintConfig": {
  "extends": "./node_modules/standard/eslintrc.json"
} */

// VAMOS A CREAR NUESTRO REPOSITORIO EN GITHUB PARA SUBIR ESTE PROYECTO
// 0.-Creamos un nuevo repositorio en GitHub
// 1.-Ubicados en la carptea raiz abrimos una terminal y ejecutamos
/*  git init */
// Esto indica que esta carptea ahora es un repositorio de github
// 3.-Agregamos al .gitignore todos los archivos que queremos que se
// ignoren cuando subimos cambios a github
/*
/node_modules
/.env
*/
// 4.-Ejecutamos los comandos que aparecen cuando creamos nuestro repo
// vacio en GitHub y ya estaria creado nuestro repo
/*
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/JosueEC/name_repo.git
git push -u origin main
*/

// VAMOS A CREAR LA ESTRUCTURA UNA ESTRUCUTRA BASICA DE CARPETAS
// DENTRO DE NUESTRA CARPETA SRC
/* mkdir adapters assets components pages hooks */

// adapters--> Aqui vamos a guardar funciones que cambian el formato
//    de la informacion que llega a nuestro Frontend
// assets--> Aqui van todos los archivos multimedia que se usen de
//    forma general en toda la pagina
// components--> Aqui se guardan nuestros componentes de React separados
//    por carpetas cada uno, en cada carptea ira el archivo .jsx del
//    componente y su archivo .css
// pages--> Aqui iran las paginas de nuestro ruteo, secciones como Home,
//    About, Contact, Details, etc. Cada page tendra su carpeta y dentro
//    estara su archivo .jsx y su .css correspondiente
// hooks--> Aqui iran guardados los custom hooks que usamos de forma general

// PODEMOS EMPEZAR CREANDO EL SISTEMA DE RUTAS DE NUESTRO FRONTEND
// ABAJO SE MUESTRA UN EJEMPLO DE RUTAS QUE PODRIA TENER NUESTRA APP
// COMENZARIAMOS CREANDO LOS COMPONENTES PARA CADA PAGE
/*
pages:

Home
Characters
Favorites
Details
About
Contact
*/

// AHORA SI VAMOS A CREAR NUESTRO SISTEMA DE RUTEO USANDO LA LIBRERIA
// REACT-ROUTER-DOM
/*  npm install react-router-dom */

// 1.-Comenzamos en main.jsx (index.js) importando el BrowserRouter de
//  de react-router-dom y envolvemos nuestro App en esta etiqueta
/*
<BrowserRouter>
  <App />
</BrowserRouter>
*/

// 2.-Ahora vamos a App.jsx e importamos el modulo Routes y Router de
// react-router-dom, son necesarios para crear nuestro sistema de rutas
// el componente Routes envuelve todas las rutas y Route es para crear
// cada una de las rutas
// 3.-Creamos un archivo routePaths.js en la carpeta de utilities, este
// archivo guarda la cadena que establece las rutas a las que podemos
// direccionarnos. Esto se hace porque esas rutas son usadas en varias
// partes de la aplicacion, de esa forma si llega a cambiar alguna solo
// debemos modificarla en este archivo y se actualizara en todos los lugares
// donde se este usando
/* Este es un ejemplo de routePaths
const pathHome = '/home'
const pathCharacters = '/characters'
const pathFavorites = '/favorites'
const pathDetails = '/deatils/:detailID'
const pathAbout = '/about'
const pathContact = '/contact'

export {
  pathHome,
  pathCharacters,
  pathFavorites,
  pathDetails,
  pathAbout,
  pathContact
}
*/
// 4.-En el componente App importamos todos los componentes de nuestras
// pages para poder acceder a ellos a traves de nuestro sistema de ruteo
/* import Home from "./pages/Home/components/Home"  */
// 5.-De igual forma importamos nuestras routePaths para poder usarlas
// con el componente Route de react-router-dom
/*
import {pathAbout,
        pathCharacters,
        pathContact,
        pathDetails,
        pathFavorites,
        pathHome,
        pathLogin} from './adapters/routePaths';
*/

// 6.-Vamos a crear una Navbar para poder navegar entre nuestras rutas,
// este sera un nuevo componente que podemos crear en la carpeta components
// de la raiz puesto que va a ser utilizado en varias partes de nuestra SPA
// 7.-Importamos el componente Link de react-router-dom, el cual nos
// va a permitir crear nuestros links hacia las rutas
// 8.-Importamos nuestro routePaths para especificar las rutas a las
// que nos vamos a direccionar cuando se de click en algun Link

// 9.-Ahora si creamos nuestros Links como una lista de elemntos dentro
// de una etiqueta nav
/*
<header>
  <nav>
    <ul>
      <li>
      <Link to={pathHome}>HOME</Link>
      </li>
    </ul>
  </nav>
</header>
*/

// 10.-Por ultimo creamos nuestras rutas en App.jsx usando los componentes
// Routes y Route de react-router-dom
/*
<main>
      <Navbar />
      <Routes>

        <Route
          path={pathHome}
          element={<Home />}
        />

      </Routes>
    </main>
*/
