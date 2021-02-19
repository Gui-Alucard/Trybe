db.students.updateMany(
  {},
  { 
    $rename: { 
      name: 'nomeCompleto'
    } 
  }
);