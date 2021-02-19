db.artists.updateOne(
  { _id: 1 },
  {
    $push: {
      albums: {
        $each: [], 
        $sort: { releaseYear: 1 },
        $slice: 4
      }
    }
  }
);

db.artists.updateOne(
  { _id: 1 },
  {
    $push: {
      albums: {
        $each: [], 
        $slice: 2
      }
    }
  }
);