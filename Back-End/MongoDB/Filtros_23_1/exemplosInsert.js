show dbs;
show collections;

use class;
db.inventory.insertOne({ item: "journal", qty: 25, size: { h: 14, w: 21, uom: "cm" }, status: "A" });

show dbs;
show collections;

db.inventory.insertOne({ _id: 2, item: "notebook", qty: 50, size: { h: 8.5, w: 11, uom: "in" }, status: "A" });

db.inventory.insertMany([
  { item: "paper", qty: 100, size: { h: 8.5, w: 11, uom: "in" }, status: "D" },
  { item: "planner", qty: 75, size: { h: 22.85, w: 30, uom: "cm" }, status: "D" },
  { item: "postcard", qty: 45, size: { h: 10, w: 15.25, uom: "cm" }, status: "A" }
]);

// https://docs.mongodb.com/manual/reference/method/db.createCollection/#db.createCollection
db.createCollection( "content", { collation: { locale: "fr" } } );