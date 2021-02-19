use Tryburger;

db.burgers.insertMany(
  [
    {
      cod: 1,
      nome: 'X-Burger',
      ingredientes: ['pão', 'alface', 'tomate', 'carne', 'queijo']
    },
    {
      cod: 2,
      nome: 'X-Frango',
      ingredientes: ['pão', 'alface', 'tomate', 'frango', 'queijo']
    },
    {
      cod: 3,
      nome: 'X-Bacon',
      ingredientes: ['pão', 'alface', 'tomate', 'bacon', 'queijo']
    },
    {
      cod: 4,
      nome: 'X-Calabresa',
      ingredientes: ['pão', 'alface', 'tomate', 'calabresa', 'queijo']
    },
    {
      cod: 5,
      nome: 'X-Tudo',
      ingredientes: ['pão', 'alface', 'tomate', 'carne', 'frango', 'bacon', 'calabresa', 'queijo']
    }
  ]
);

