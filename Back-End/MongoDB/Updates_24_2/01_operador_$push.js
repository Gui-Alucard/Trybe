use colecaoCDs;

db.artists.insertOne({
  _id: 1,
  name: "The Beatles"
});

db.artists.updateOne(
  { _id: 1 },
  {
    $push: { members: 'John Lennon' }
  }
);