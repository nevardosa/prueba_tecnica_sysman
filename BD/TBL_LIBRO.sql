/*
Nombre: TBL_LIBRO
Objetivo: Almacena la informacion de los libros
Realizado por: Danilo Sanchez Daza
*/
CREATE TABLE TBL_LIBRO (
	ID NUMBER(38,0) NOT NULL,
	TITULO VARCHAR2(1000) NOT NULL,
	DESCRIPCION VARCHAR2(4000) NOT NULL,
	FECHA_PUBLICACION TIMESTAMP DEFAULT sysdate NOT NULL,
	ID_AUTOR NUMBER(38,0) NOT NULL
);
	
ALTER TABLE TBL_LIBRO
ADD CONSTRAINT LIBRO_PK PRIMARY KEY (ID)
ENABLE;

ALTER TABLE TBL_LIBRO
ADD CONSTRAINT AUTOR_FK FOREIGN KEY (ID_AUTOR) REFERENCES TBL_AUTOR(ID);

COMMENT ON TABLE TBL_LIBRO IS 'Tabla que pertenece a la base de datos de biblioteca de libros';
COMMENT ON COLUMN TBL_LIBRO.ID IS 'Identificacion del libro, se genera de manera secuencial al momento de la creacion';
COMMENT ON COLUMN TBL_LIBRO.TITULO IS 'Nombre del libro';
COMMENT ON COLUMN TBL_LIBRO.DESCRIPCION IS 'Descripcion general del libro';
COMMENT ON COLUMN TBL_LIBRO.FECHA_PUBLICACION IS 'Fecha en la que fue publicado el libro';
COMMENT ON COLUMN TBL_LIBRO.ID_AUTOR IS 'Codigo de identificacion del autor que ha escrito el libro';


CREATE SEQUENCE LIBRO_SQ
START WITH 1
INCREMENT BY 1;

INSERT INTO INH_SMO.TBL_LIBRO (ID, TITULO, DESCRIPCION, FECHA_PUBLICACION, ID_AUTOR) 
VALUES(1, 'El cuervo', 'Se trata sobre la inteligencia del cuervo', sysdate , 1);
INSERT INTO INH_SMO.TBL_LIBRO (ID, TITULO, DESCRIPCION, FECHA_PUBLICACION, ID_AUTOR) 
VALUES(2, 'El gato negro', 'Cuantos pelos negros tiene el gato', sysdate , 1);
INSERT INTO INH_SMO.TBL_LIBRO (ID, TITULO, DESCRIPCION, FECHA_PUBLICACION, ID_AUTOR) 
VALUES(3, 'El alcoholismo', 'historia de un hombre alcoholico', sysdate , 1);
INSERT INTO INH_SMO.TBL_LIBRO (ID, TITULO, DESCRIPCION, FECHA_PUBLICACION, ID_AUTOR) 
VALUES(4, 'Cien años de soledad', 'historia de la familia', sysdate , 2);
INSERT INTO INH_SMO.TBL_LIBRO (ID, TITULO, DESCRIPCION, FECHA_PUBLICACION, ID_AUTOR) 
VALUES(5, 'Cronica de una muerte anunciada', 'historia de una familia que esta amenzada', sysdate , 2);
INSERT INTO INH_SMO.TBL_LIBRO (ID, TITULO, DESCRIPCION, FECHA_PUBLICACION, ID_AUTOR) 
VALUES(6, 'Del amor y otros demonios', 'Novela sobre el amor y sus sufrimientos', sysdate , 2);
INSERT INTO INH_SMO.TBL_LIBRO (ID, TITULO, DESCRIPCION, FECHA_PUBLICACION, ID_AUTOR) 
VALUES(7, 'Orgullo y prejuicio', 'Cuenta la historia de una mujer orgullosa', sysdate , 3);
INSERT INTO INH_SMO.TBL_LIBRO (ID, TITULO, DESCRIPCION, FECHA_PUBLICACION, ID_AUTOR) 
VALUES(8, 'El Quijote de la Mancha', 'Novela sobre el gran caballero de la Mancha', sysdate , 4);
INSERT INTO INH_SMO.TBL_LIBRO (ID, TITULO, DESCRIPCION, FECHA_PUBLICACION, ID_AUTOR) 
VALUES(8, 'La Galatea', 'Novela de una galan', sysdate , 4);