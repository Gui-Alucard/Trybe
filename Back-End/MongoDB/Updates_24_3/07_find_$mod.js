db.burgers.find({ preco: { $mod: [ 3, 0 ] } }, { cod: 1, preco: 1});

// retornou o documento onde o preço era igual a 8.5
db.burgers.find({ preco: { $mod: [ 4.0, 0 ] } }, { cod: 1, preco: 1});


db.burgers.find({ preco: { $mod: [] } }, { cod: 1, preco: 1});
db.burgers.find({ preco: { $mod: [1] } }, { cod: 1, preco: 1});
db.burgers.find({ preco: { $mod: [1,2,3] } }, { cod: 1, preco: 1});
