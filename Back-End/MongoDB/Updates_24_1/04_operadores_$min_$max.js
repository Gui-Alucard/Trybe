// se o valor atual for **menor** que  8, vai ser alterado para 8.
db.students.find({}, {_id: 1, bestScore: 1});

db.students.updateMany(
  {},
  { $max: { bestScore: 8.0 } }
);

// se o valor atual for **maior** que 9, vai ser alterado para 9.
db.students.updateMany(
  {},
  { $min: { bestScore: 9.0 } }
);