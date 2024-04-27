db.Productos1.aggregate(
    [
        {
            //filtramos los documentos que coincidan con este criterio, solo va a seleccionar los documentos que tengan ese nombre
            $match:{
                nombre:"Articulo1"
            }
        },
        {
            //cuenta el numero de documentos que pasa a traves de la etapa de coincidencia
            //$count indica como queremos etiquetar el resultado de la cuenta
            $count:"nombre"
        }
    ]
);

