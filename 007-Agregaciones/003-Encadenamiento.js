db.Productos1.aggregate(
    [
        //FASE 1 DE LA AGREGACIÓN
        {
            $group:{
                _id:"$precio"
            }
        },
        //FASE 2 DE LA AGREGACIÓN
        {
            $limit:1
        }
    ]
);