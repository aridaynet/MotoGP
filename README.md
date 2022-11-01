# MotoGP

_En este repositorio se encuentra centralizada toda la informacion relativa al proyecto UT1 - AE1 - Primera Entrega. En mi caso la he realizado de MotoGP_

## Comenzando 🚀

_Mi primer proyecto consiste en el desarrollo de una aplicación para controlar el registro de pilotos de MotoGP. La propuesta consiste en aplicar los conceptos vistos en el primer tema del módulo. Implementar una aplicación utilizando Angular para diseñar una página web y mediante el framework Ionic transformarla en una aplicación dispositivos móviles._

### Instalación 🔧

_¿Qué cosas necesitas para instalar el software y como instalarlos?_

```
Necesitas:
 1.- Git
 2.- Postman
 3.- Visual Studio Code
 4.- NodeJS
 5.- Ionic
 6.- Workbench
Instalación:
 1.- NodeJS
    * Descarga e instala la versión LTS: https://nodejs.org/en/
 2.- Visual Studio Code
    * Descarga e instala la última versión: https://developer.android.com/studio/install
 3.- Ionic
    * Abrir un terminar y ejecutar el siguiente comando: npm install -g @ionic/cli 
 4.- Postman  
     * Descarga e instala la última versión: https://www.postman.com/downloads/
 5.- Workbench  
     * Descarga e instala la última versión: https://www.mysql.com/products/workbench/
```
## Ejecutando las pruebas ⚙️

```
1.- Crear la base de datos en Workbench llamada bd_motogp
   Usuario: root
   Contraseña: motogp
2.- Abrir el proyecto MotoGP
   * Abrir una terminal de Git bash
   * Situarse en la ruta backend
   * Ejectuar node index.js
   * Abrir otro terminal de Git bash
   * Situarse en la ruta frontend
   * Ejectuar ionic serve
3.- Abrir Postman (https://aridaynet.postman.co/workspace/742a9a37-eefa-46cb-9fc5-7194d9119749/collection/20285135-e83ac2aa-b468-4a49-bf6c-7f7c78649154)
   * Ejecutar el Get --> Muestra una prueba de lo que tenemos en nuestra base de datos
   * Ejecutar el Post --> Con el podremos insertar datos en nuestra base de datos
   * Ejcutar el Put --> Con este podremos realizar una actualización de algún dato que tenemos en nuestra base de datos.
   Ejectuar el Delete --> Con el podremos eliminar el dato que elijamos de nuestra base de datos.    
```
### Analice las pruebas end-to-end 🔩

_¿Qué ejemplos podremos encontrar en el proyecto?_

```
Página (Categorías) http://localhost:8100/tabs/tab1
 * En esta página podremos encontrar una lista de todas las categorías con alguno de sus pilotos más destacados.
 * En la parte inferior encontrarás un botón llamado !MI CORREO!, si haces click sobre el te mostrará un mensaje con mi correo personal.
Página (Grandes Premios) http://localhost:8100/tabs/tab2
 * En esta página podremos encontrar de primera un reloj con calendario actual y justo de bajo una foto de todos los piltos.
 * Por último se muestra un listado de todos los grandes premios que existen. 
Página (Pilotos) http://localhost:8100/tabs/tab3
 * Visualizar todos los pilotos que tenemos en nuestra base de datos desde la página tab3
 * Añadir piloto con el botón que tenemos en la parte superior de la app
 * Eliminar piloto desde el botón que tenemos en la parte derecha de cada registro en la app
 * Actualizar un piloto desde el botón que tenemos en la parte derecha de cada registro en la app
```
## Construido con 🛠️

_Herramientas que he utilizado para crear mi proyecto_

* [Git](https://git-scm.com/downloads)
* [Postman](https://www.postman.com/downloads/)
* [Visual Studio Code](https://code.visualstudio.com/download)
* [NodeJS](https://nodejs.org/es/download/)
* [MySQL Workbench](https://www.mysql.com/products/workbench/)

## Postman 📦
_Enlace a mi cuenta de Postman con los accesos a mis end-points: https://aridaynet.postman.co/workspace/742a9a37-eefa-46cb-9fc5-7194d9119749/collection/20285135-e83ac2aa-b468-4a49-bf6c-7f7c78649154_
---


⌨️ [Antonio Aridany González Negrín](https://github.com/aridaynet/motogp) 😊
