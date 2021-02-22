db.orders.aggregate(
  {
    $group: {
      _id: ['$orderStatus', '$invoiceDate'],
      total: { $sum:1  }
    }
  },
  { $sort: { total: -1 } }
);

db.orders.aggregate(
  {
    $group: {
       _id: { orderStatus: '$orderStatus', invoiceDate: '$invoiceDate' } ,
      total: { $sum:1  }
    }
  },
  { $sort: { total: -1, '_id.invoiceDate': 1 } }
);

db.orders.aggregate(
  {
    $group: {
      _id: { _id: ['$orderStatus', '$invoiceDate'] },
      total: { $sum:1  }
    }
  }
);


