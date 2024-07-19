# prueba_tecnica_sysman
Prueba tecnica desarrollador fullstack

En el repositorio encuentra la carpeta: prueba_tecnica_sysman

Dentro de ella estan las carpetas: 
	- Back
	- Front
	- BD

#Despliegue front 

1. Descargar el codigo fuente del proyecto bibliotecaFront, que se encuentra en la carpeta Front del repositorio
2. Cargarlo en su editor favorito, como recomendacion usar visual studio code
3. Abril la terminal de visual estudio
4. Ingresar desde la consola a la ruta donde se encuentre descargado el proyecto
5  Una vez se encuentre dentro del proyecto, ejecutar el comando npm i (para instalar los paquetes necesarios para el proyecto)
6. Ejecutar el comando ng serve -o (para que abra de una vez el navegador cuando este listo)

#Despliegue del back

1. Descargar el codigo fuente del proyecto que se llama Biblioteca, que se encuentra en la carpeta Back en el repositorio
2. Abrirlo en spring boot
3. Descargar las depencias del maven 
4. Ejecutar el proyecto --> clic derecho sobre el proyecto --> run as --> Spring Boot App
5. Si todo sale bien abrir el navegador con la siguiente ruta: http://localhost:8105/libros

Nota: la base de datos para el proyecto, se ha implmentado en H2, la cual contiene la informacion de autores y libros.

#Bases de datos

En el repositorio se encuentra la carpeta BD, alli se encuentran los difrentes scripts
1. Consulta_titulo.sql
2. PKG_BIBLIOTECA.sql
3. TBL_AUTOR.sql
4. TBL_LIBRO.sql