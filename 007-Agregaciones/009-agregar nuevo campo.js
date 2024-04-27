db.Productos1.updateMany({}, [
  {
    $set: {
      nuevoCampo: "IVA"
    }
  }
]);
