// Exercício 14: Remova o campo class dos documentos que possuem esse campo com o valor unknown.
db.xmen.find({ class: { $exists: false } }, { class: 1});
db.xmen.updateMany(
  { class: 'unknown' },
  {
    $unset: {
      class: ''
    }
  }
)

// Exercício 15: Produza uma query que renomeie os campos de name para hero_name, 
// e de true_name para full_name e adicione o campo power com valor 100, em todos os documentos.
db.xmen.updateMany(
  {},
  {
    $rename: {
      name: "hero_name",
      true_name: "full_name"
    },
    $set: {
      power: 100
    }
  }
)


// Exercício 16: Produza uma query onde, os mutantes class omega ou gama 
// passam a ter seu poder de 500 somente se seu poder for menor que 500.
db.xmen.find(
  {
    class: { $in: ["omega", "gama"] }
  }
);

db.xmen.updateMany(
  {
    class: { $in: ["omega", "gama"] }
  },
  {
    $max: { power: 500 }
  }
);

db.xmen.find({}, { power: 1, class: 1 });



// Exercício 20 : Em apenas uma query adicione o campo áreas com [ "outside" ] a todos os Junior Staff (occupation)
// que não tenham o campo áreas definido.
