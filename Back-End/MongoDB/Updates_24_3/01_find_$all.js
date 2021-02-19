db.burgers.find(
  { ingredientes: { $all: ['pão', 'alface', 'tomate', 'carne']} }
);

// a ordem não influencia a busca
db.burgers.find(
  { ingredientes: { $all: ['frango', 'pão', 'alface']} }
);

