use test;

db.articles.drop()
db.articles.insertMany(
    [
        { _id: 1, subject: "coffee", author: "xyz", views: 50 },
        { _id: 2, subject: "Coffee Shopping", author: "efg", views: 5 },
        { _id: 3, subject: "Baking a cake", author: "abc", views: 90  },
        { _id: 4, subject: "baking", author: "xyz", views: 100 },
        { _id: 5, subject: "Café Com Leite", author: "abc", views: 200 },
        { _id: 6, subject: "Сырники", author: "jkl", views: 80 },
        { _id: 7, subject: "coffee and cream", author: "efg", views: 10 },
        { _id: 8, subject: "Cafe com Leite", author: "xyz", views: 10 }
    ]
)

db.articles.createIndex({ subject: "text" })

// Vamos listar todos os documentos que contenham coffee
db.articles.find({ $text: { $search: "coffee" } });

db.articles.getIndexes();

db.articles.dropIndex('subject_text');

// Vamos listar todos os documentos que contenham bake, coffee OU cake
db.articles.find({ $text: { $search: "bake coffee cake" } })

db.articles.find({ $text: { $search: "\"coffee shop\"" } })

db.articles.find({ $text: { $search: "coffee" } },{ score: { $meta: "textScore" } })