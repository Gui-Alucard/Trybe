db.comidas.insertOne(
  {
    nome: "Hamburguer",
    descricao: "Um hambúrguer é um sanduíche que consiste em um ou mais hambúrgueres cozidos de carne moída, geralmente carne bovina, colocados dentro de um pão ou pão fatiado. O hambúrguer pode ser frito, grelhado, defumado ou grelhado."
  }
)

db.comidas.createIndex({ descricao: "text" }, { default_language: "portuguese" });
db.comidas.dropIndex('descricao_text');

db.comidas.find(
  { $text: { $search: "grelhado" }},
  { score: { $meta: "textScore" } }
);

db.comidas.find(
  { $text: { $search: "grelhar" }},
  { score: { $meta: "textScore" } }
);



