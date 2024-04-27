db.Productos1.aggregate([{$group:{_id:"$precio"}}]);

//Utilizamos el metodo aggregate para realizar una peticion de agrupacion.
//estamos agrupandolo por el campo de precio el campo _id contiene el valor de agrupacion