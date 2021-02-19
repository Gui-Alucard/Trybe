db.artists.find({}, { _id: false, name: true, members: true}); 

// ordenar de forma crescente
db.artists.updateOne(
  { _id: 1 },
  {
    $push: {
      members: {
        $each: [], 
        $sort: 1
      }
    }
  }
);

// ordenar de forma decrescente
db.artists.updateOne(
  { _id: 1 },
  {
    $push: {
      members: {
        $each: ['George Martin'], 
        $sort: -1
      }
    }
  }
);

db.artists.find({}, { _id: false, name: true, albums: true});

// ordenando por atributo em uma array de documentos
db.artists.updateOne(
  { _id: 1 },
  {
    $push: {
      albums: {
        $each: [
          { title: "Abbey Road", releaseYear: 1969 },
          { title: "Revolver", releaseYear: 1966 },
        ], 
        $sort: { releaseYear: -1 }
      }
    }
  }
);