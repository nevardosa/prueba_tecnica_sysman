create or replace PACKAGE BODY PKG_BIBLIOTECA
AS

	/* *********************************************************************************************************************************
		* OBJETO : PROCEDURE
		* NOMBRE : PRC_AUTORREAD
		* OBJETIVO : CONSULTA CUANTOS LIBROS TIENE EL AUTOR REGISTRADOS EN ESTA BD.
		* REALIZADO POR: DANILO SANCHEZ DAZA.
		*********************************************************************************************************************************** */
	PROCEDURE PRC_AUTORREAD (	PI_ID_AUTOR				IN NUMBER,
								PO_CODIGO	   			OUT NUMBER,
								PO_DESCRIPCION 			OUT	VARCHAR2,
								PO_CURSOR	   			OUT SYS_REFCURSOR
							) AS
				
	QUERY CLOB;
	BEGIN							
	
        IF(	PI_ID_AUTOR IS NULL ) THEN
            RAISE_APPLICATION_ERROR(-20001, 'Debe ingresar el id del autor');
        END IF;
		
		OPEN PO_CURSOR FOR SELECT COUNT(ID_AUTOR) AS TOTAL_LIBROS  FROM TBL_LIBRO WHERE ID_AUTOR = PI_ID_AUTOR;

		PO_CODIGO := 0;
		PO_DESCRIPCION := 'PROCESO_EXITOSO';             

			EXCEPTION
			WHEN OTHERS THEN
				PO_CODIGO := SQLCODE;
				PO_DESCRIPCION := SQLERRM;

	      		DBMS_OUTPUT.PUT_LINE('PO_CODIGO: '||PO_CODIGO);
	      		DBMS_OUTPUT.PUT_LINE('PO_DESCRIPCION: '||PO_DESCRIPCION);

	END PRC_AUTORREAD;

END PKG_BIBLIOTECA;