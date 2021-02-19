db.products.updateOne(
  { _id: 100 },
  { $mul: { quantity: 4 } }
);

db.products.find({ _id: 100}, { _id: true, quantity: true});
