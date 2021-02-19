// incremento
db.products.updateOne(
  { _id: 100 },
  { $inc: { quantity: 50 } }
);

db.products.find({ _id: 100}, { _id: true, quantity: true});

// decremento
db.products.updateOne(
  { _id: 100 },
  { $inc: { quantity: -200 } }
);

db.products.find({ _id: 200}, { _id: true, quantity: true});
