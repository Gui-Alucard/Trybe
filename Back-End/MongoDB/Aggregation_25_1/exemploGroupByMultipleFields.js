db.pokemons.aggregate([
  { $unwind: '$type' },
  { $unwind: '$weaknesses' },
  { $sort: {
    type: 1,
    weaknesses: 1
  } },

  {
    $group: {
      _id: { 
        'type': '$type', 
        'weakness': '$weaknesses' 
      },
      quantidade: { $sum: 1 }
    }
  },
  {
    $sort: {
      '_id.type': 1,
      '_id.weakness': 1,
    }
  },
]);