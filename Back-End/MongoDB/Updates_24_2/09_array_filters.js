db.artists.updateOne(
  { _id: 1 },
  { 
    $set: { 
      "albums.$[album].releaseYear": 1991,
    }
  },
  {
    arrayFilters: [ {"album.title": "Let it Be"} ]
  }
);

// Bônus: Fazer o mesmo comportamento usando <array>.$.<atributo>
db.artists.updateOne(
  { 
    _id: 1,
    'albums.title': 'The Beatles'
  },
  { 
    $push: { 
      'albums.$.ratingCritic': { $each: [10,9] },
      'albums.$.ratingPublic': 10,
    }
  }
);






