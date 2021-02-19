db.products.insertMany([
  {
    _id: 100,
    sku: "abc123",
    quantity: 250,
    instock: true,
    reorder: false,
    details: { model: "14Q2", make: "xyz" },
    tags: [ "apparel", "clothing" ],
    ratings: [ { by: "ijk", rating: 4 } ]
  },
  {
    _id: 200,
    sku: "def456",
    quantity: 800,
    instock: true,
    reorder: false,
    details: { model: "15T2", make: "yyz" },
    tags: [ "books" ],
    ratings: [ { by: "ijk", rating: 4 } ]
  }
]);

// atualizando
db.products.updateOne(
  { _id: 100 },
  {
    $set: {
      quantity: 500,
      details: { model: "14Q3", make: "xyz" },
      tags: ["coats", "outerwear", "clothing"]
    }
  }
);

// atualizando atributos de subdocumentos
db.products.updateOne(
  { _id: 100 },
  { $set: { "details.make": "zzz" } }
);

// atualizando valores em arrays
db.products.updateOne(
  { _id: 100 },
  {
    $set: {
      "tags.1": "rain gear",
      "ratings.0.rating": 2
    }
  }
);

db.products.find({ _id: 100});