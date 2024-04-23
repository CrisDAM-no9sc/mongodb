//ordenar
//Nos enseñara de menos a mas
db.productos.aggregate([{$sort:{"precio":1}}]);


//Ordenacion descendiente
//Nos enseñara de mas a menos
db.produstos.aggregate([{$sort:{"precio":1}}]);