//ordenar
//Nos enseñara de menos a mas
db.Productos1.aggregate([{$sort:{"precio":1}}]);


//Ordenacion descendiente
//Nos enseñara de mas a menos
db.Productos1.aggregate([{$sort:{"precio":-1}}]);