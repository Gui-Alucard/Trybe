db.artists.updateOne(
  { _id: 1 },
  {
    $push: {
      members: { $each: ['Brian Epstein'], $position: 0 }
    }
  }
);

// quando passar mais de um eles vão ser adicionado a partir da posição definida
db.artists.updateOne(
  { _id: 1 },
  {
    $push: {
      members: { $each: ['Eric Clapton', 'Ben Harper'], $position: 2 }
    }
  }
);

