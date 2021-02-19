db.students.updateMany(
  {},
  { 
    $unset: { 
      dataDeAnivesario: ''
    } 
  }
);