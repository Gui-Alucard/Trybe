// Onde a entrega é maior que o preço
db.burgers.find({ $expr: { $gt: [ "$entrega", "$preco" ] } }, { cod: 1, preco: 1, entrega: 1});

// Onde a entrega é menor que o preço
db.burgers.find({ $expr: { $lt: [ "$entrega", "$preco" ] } }, { cod: 1, preco: 1, entrega: 1})

// Onde a entrega é igual ao preço
db.burgers.find({ $expr: { $eq: [ "$entrega", "$preco" ] } }, { cod: 1, preco: 1, entrega: 1})


