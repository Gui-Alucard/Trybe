// Remove o primeiro elemento de uma array
db.artists.updateOne(
  { _id: 1 },
  { $pop: { albums: 1 } }
);

// Remove o último elemento de uma array
db.artists.updateOne(
  { _id: 1 },
  { $pop: { members: -1 } }
);

// só funciona com 1 e -1
db.artists.updateOne(
  { _id: 1 },
  { $pop: { members: -2 } }
);
// "$pop expects 1 or -1, found: -2"