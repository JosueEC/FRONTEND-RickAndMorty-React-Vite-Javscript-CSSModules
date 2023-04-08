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
