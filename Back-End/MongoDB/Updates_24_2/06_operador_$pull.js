// Reinserindo albums
db.artists.updateOne(
  { _id: 1 },
  {
    $push: {
      albums: {
        $each: [
          { title: "The Beatles", releaseYear: 1968 },
          { title: "Let it Be", releaseYear: 1970 },
          { title: "Sgt. Pepper's Lonely Hearts Club Band", releaseYear: 1967 },
          { title: "Help!", releaseYear: 1965 },
          { title: "Magical Mistery Tour!", releaseYear: 1967 },
          { title: "Abbey Road", releaseYear: 1969 }
        ]
      }
    }
  }
);


db.artists.updateOne(
  { _id: 1 },
  {
    $pull: {
      members: 'George Martin',
      albums: { title: 'Revolver'}
    }
  }
);

db.artists.updateOne(
  { _id: 1 },
  {
    $pull: {
      albums: { 
        releaseYear: { $lt: 1967 }
      }
    }
  }
);