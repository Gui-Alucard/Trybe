db.burgers.updateOne(
  { cod: 1 },
  { $set: { preco: 7.00, entrega: 10.00 } }
);

db.burgers.updateOne(
  { cod: 2 },
  { $set: { preco: 7.50, entrega: 10.00 } }
);
  
db.burgers.updateOne(
  { cod: 3 },
  { $set: { preco: 8.00, entrega: 10.00 } }
);

db.burgers.updateOne(
  { cod: 4 },
  { $set: { preco: 8.50, entrega: 10.00 } }
);

db.burgers.updateOne(
  { cod: 5 },
  { $set: { preco: 12.00, entrega: 10.00 } }
);

// Onde a entrega é maior que o preço
db.burgers.find({ $expr: { $gt: [ "$entrega", "$preco" ] } }, { cod: 1, preco: 1, entrega: 1});

// Onde a entrega é menor que o preço
db.burgers.find({ $expr: { $lt: [ "$entrega", "$preco" ] } }, { cod: 1, preco: 1, entrega: 1})

db.burgers.find({ $expr: { $gt: [ "$preco", "$entrega" ] } }, { cod: 1, preco: 1, entrega: 1})

db.burgers.find({ $expr: { $eq: [ "$preco", "$entrega" ] } }, { cod: 1, preco: 1, entrega: 1})
