/*
Nombre: TBL_AUTOR
Objetivo: Almacena la informacion de los autores de los libros
Realizado por: Danilo Sanchez Daza
*/
CREATE TABLE TBL_AUTOR (
	ID NUMBER(38,0) NOT NULL,
	NOMBRE VARCHAR2(100) NOT NULL,
	APELLIDO VARCHAR2(100) NOT NULL
);
	

ALTER TABLE TBL_AUTOR
ADD CONSTRAINT AUTOR_PK PRIMARY KEY (ID)
ENABLE;


COMMENT ON TABLE TBL_AUTOR IS 'Tabla que pertenece a la base de datos de biblioteca de libros';
COMMENT ON COLUMN TBL_AUTOR.ID IS 'Identificacion del autor del libro, se genera de manera secuencial al momento de la creacion';
COMMENT ON COLUMN TBL_AUTOR.NOMBRE IS 'Nombre del autor del libro';
COMMENT ON COLUMN TBL_AUTOR.APELLIDO IS 'Apellido del autor del libro';


INSERT INTO TBL_AUTOR (ID, NOMBRE, APELLIDO) VALUES(1, 'Edgar', 'Allan Poe');
INSERT INTO TBL_AUTOR (ID, NOMBRE, APELLIDO) VALUES(1, 'Gabriel', 'Garcia Marquez');
INSERT INTO TBL_AUTOR (ID, NOMBRE, APELLIDO) VALUES(1, 'Jane', 'Austen');
INSERT INTO TBL_AUTOR (ID, NOMBRE, APELLIDO) VALUES(1, 'Miguel ', 'De Cervantes');
INSERT INTO TBL_AUTOR (ID, NOMBRE, APELLIDO) VALUES(1, 'Agatha', 'Chistie');