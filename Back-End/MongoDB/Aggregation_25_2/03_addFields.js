db.orders.aggregate([
  { $match: { "_id": 59 } },
  {
    $addFields: {
      loja: 'Familho',
      totalItems: { $sum: '$lineItems.prodCount' },
      itemMaisBarato: { $min: '$lineItems.Cost' },
      itemMaisCaro: { $max: '$lineItems.Cost' },
    }
  }
]).pretty();

// calcular o total de um pedido
db.orders.aggregate([
  { $match: { "_id": 59 } },
  { $unwind: '$lineItems' },
  { $addFields: { subtotal: { $multiply: [ '$lineItems.prodCount', '$lineItems.Cost'] } } },
  { 
    $group: {  
      _id: '$_id',
      totalPedido: { $sum: '$subtotal'}
    } 
  }
]).pretty();




