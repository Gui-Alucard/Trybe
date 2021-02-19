db.artists.updateOne(
  { _id: 1 },
  { 
    $addToSet: {
      members: { 
        $each: ['Paul McCartney', 'George Harrison', 'Ringo Starr', 'John Lennon']
      }
    }
  }
);

// Obs: $sort e $slice não funcionam com $addToSet

db.artists.updateOne(
  { _id: 1 },
  { 
    $addToSet: {
      similarBands: {
        $each: ['Rolling Stones', 'The Who', 'The Beach Boys', 'The Kinks']
      },
      singles: {
        $each: [
          { title: 'Hey Jude', releaseYear: 1968 },
          { title: 'Come Together', releaseYear: 1969 },
          { title: 'Blackbird', releaseYear: 1968 }
        ]
      }
    }
  }
);

// não insere elementos repetidos
db.artists.updateOne(
  { _id: 1 },
  { 
    $addToSet: {
      similarBands: 'Rolling Stones',
      singles: {
        $each: [
          { title: 'Blackbird', releaseYear: 1968 },
          { title: 'Get Back', releaseYear: 1970 }
        ]
      }
    }
  }
);