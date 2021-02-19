db.burgers.find({
  comentarios: {
    $elemMatch: { usuario: 'Renato' }
  }
});

db.burgers.find({
  comentarios: {
    $elemMatch: { nota: { $lt: 5 } }
  }
})