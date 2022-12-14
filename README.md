# MotoGP

_En este repositorio se encuentra centralizada toda la informacion relativa al proyecto UT1 - AE1 - Primera Entrega. En mi caso la he realizado de MotoGP_

## Comenzando 馃殌

_Mi primer proyecto consiste en el desarrollo de una aplicaci贸n para controlar el registro de pilotos de MotoGP. La propuesta consiste en aplicar los conceptos vistos en el primer tema del m贸dulo. Implementar una aplicaci贸n utilizando Angular para dise帽ar una p谩gina web y mediante el framework Ionic transformarla en una aplicaci贸n dispositivos m贸viles._

### Instalaci贸n 馃敡

_驴Qu茅 cosas necesitas para instalar el software y como instalarlos?_

```
Necesitas:
 1.- Git
 2.- Postman
 3.- Visual Studio Code
 4.- NodeJS
 5.- Ionic
 6.- Workbench
Instalaci贸n:
 1.- NodeJS
    * Descarga e instala la versi贸n LTS: https://nodejs.org/en/
 2.- Visual Studio Code
    * Descarga e instala la 煤ltima versi贸n: https://developer.android.com/studio/install
 3.- Ionic
    * Abrir un terminar y ejecutar el siguiente comando: npm install -g @ionic/cli 
 4.- Postman  
     * Descarga e instala la 煤ltima versi贸n: https://www.postman.com/downloads/
 5.- Workbench  
     * Descarga e instala la 煤ltima versi贸n: https://www.mysql.com/products/workbench/
```
## Ejecutando las pruebas 鈿欙笍

```
1.- Crear la base de datos en Workbench llamada bd_motogp
   Usuario: root
   Contrase帽a: motogp
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
   * Ejcutar el Put --> Con este podremos realizar una actualizaci贸n de alg煤n dato que tenemos en nuestra base de datos.
   Ejectuar el Delete --> Con el podremos eliminar el dato que elijamos de nuestra base de datos.    
```
### Analice las pruebas end-to-end 馃敥

_驴Qu茅 ejemplos podremos encontrar en el proyecto?_

```
P谩gina (Categor铆as) http://localhost:8100/tabs/tab1
 * En esta p谩gina podremos encontrar una lista de todas las categor铆as con alguno de sus pilotos m谩s destacados.
 * En la parte inferior encontrar谩s un bot贸n llamado !MI CORREO!, si haces click sobre el te mostrar谩 un mensaje con mi correo personal.
P谩gina (Grandes Premios) http://localhost:8100/tabs/tab2
 * En esta p谩gina podremos encontrar de primera un reloj con calendario actual y justo de bajo una foto de todos los piltos.
 * Por 煤ltimo se muestra un listado de todos los grandes premios que existen. 
P谩gina (Pilotos) http://localhost:8100/tabs/tab3
 * Visualizar todos los pilotos que tenemos en nuestra base de datos desde la p谩gina tab3
 * A帽adir piloto con el bot贸n que tenemos en la parte superior de la app
 * Eliminar piloto desde el bot贸n que tenemos en la parte derecha de cada registro en la app
 * Actualizar un piloto desde el bot贸n que tenemos en la parte derecha de cada registro en la app
```
## Construido con 馃洜锔?

_Herramientas que he utilizado para crear mi proyecto_

* [Git](https://git-scm.com/downloads)
* [Postman](https://www.postman.com/downloads/)
* [Visual Studio Code](https://code.visualstudio.com/download)
* [NodeJS](https://nodejs.org/es/download/)
* [MySQL Workbench](https://www.mysql.com/products/workbench/)

## Postman 馃摝
_Enlace a mi cuenta de Postman con los accesos a mis end-points: https://aridaynet.postman.co/workspace/742a9a37-eefa-46cb-9fc5-7194d9119749/collection/20285135-e83ac2aa-b468-4a49-bf6c-7f7c78649154_
---


鈱笍 [Antonio Aridany Gonz谩lez Negr铆n](https://github.com/aridaynet/motogp) 馃槉
