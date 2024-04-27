db.Productos1.aggregate([
    {
        $addFields: {
            //Definimos el nuevo campo IVA y calculando su valor
            IVA: {
                //es una funcion de agegacion va a sumar todos los valores 
                $sum: {
                    //funcion que itera sobre la matriz y le aplica una expresion a cada elemento
                    $map: {
                        //matriz de entrada iteramos sobre cada documento de la coleccion
                        input: "$Productos1",
                        //cada documento de Productos1 se representa como productos dentro de in
                        as: "producto",
                        in: { $multiply: ["$$producto.precio", 0.21] }
                    }
                }
            }
        }
    }
]);
