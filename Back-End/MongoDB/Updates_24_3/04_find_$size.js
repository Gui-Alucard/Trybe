db.burgers.find({
  comentarios: { $size: 3.5 }
})

// Dá erro
db.burgers.find({
  comentarios: { $size: { $lt: 2.5 } }
})

db.burgers.find({
  comentarios: { $size: [2, 3] }
})

// Error: error: {
//   "ok": 0,
//   "errmsg": "$size needs a number",
//   "code": 2,
//   "codeName": "BadValue"
// }