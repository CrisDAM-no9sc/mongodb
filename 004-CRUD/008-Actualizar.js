 Se utiliza para establecer el valor de un campo específico en un documento. Si el campo especificado ya existe en el documento, $set lo actualizará con el nuevo valor. Si el campo no existe, $set lo creará.



db.clientes.updateOne(
    {nombre:'Manuel'},
    {
        $set:
        {email:"info@manuel.com"}
    }
)