var categorias = ['Alimentação', 'Limpeza', 'Congelados e frios', 'Higiene pessoal', 'Hortifrúti', 'Bebidas']; 

// Adicionando campo categoria
print(categorias[(Math.random() * categorias.length) | 0]);

db.products.find({}).forEach(function (doc) {
  print(doc._id)
  db.products.updateOne({ _id: doc._id }, {
    $set: { category: categorias[(Math.random() * categorias.length) | 0] }
  })
});

db.products.aggregate([
  {
    $group: { 
      _id: '$category', 
      total: { $sum: 1 }
    } 
  } 
]);


db.orders.aggregate([
  { $unwind: '$lineItems' },
  { $sort: { _id: 1 } },
  {
    $lookup: {
      from: 'products',
      let: { productId: '$lineItems.prodId' },
      pipeline: [
        {
          $match: {
            category: 'Limpeza',
            $expr: { 
              $eq: ['$_id', '$$productId'],
            }  
          }
        }   
      ],
      as: 'product'
    },
  },
  {
    $group: {
      _id: '_id',
      products: { $sum: { $size: '' } }
    }
  }
  {
    $limit: 5
  }
]).pretty();