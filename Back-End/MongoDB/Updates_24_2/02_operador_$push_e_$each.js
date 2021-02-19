db.artists.updateOne(
  { _id: 1 },
  {
    $push: {
      members: { $each: ['Paul McCartney', 'George Harrison', 'Ringo Starr'] }
    }
  }
);

db.artists.updateOne(
  { _id: 1 },
  {
    $push: {
      albums: {
        title: "Sgt. Pepper's Lonely Hearts Club Band",
        releaseYear: 1967
      }
    }
  }
);

db.artists.updateOne(
  { _id: 1 },
  {
    $push: {
      albums: {
        $each: [
          { title: "The Beatles", releaseYear: 1968 },
          { title: "Rubber Soul", releaseYear: 1965 },
          { title: "Let it Be", releaseYear: 1970 }
        ]
      }
    }
  }
);



db.artists.updateOne(
  { _id: 1 },
  {
    $push: {
      members: { $each: ['Brian Epstein'], $position: 0 }
    }
  }
);

