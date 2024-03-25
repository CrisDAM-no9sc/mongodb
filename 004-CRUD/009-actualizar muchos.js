db.clientes.updateMany(
    {email:"info@sdjjs.com"},
    {
        $set:
        {telefono:"000000000"}
    }
)