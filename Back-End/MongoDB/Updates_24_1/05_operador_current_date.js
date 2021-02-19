db.students.updateMany(
  {},
  { 
    $currentDate: { 
      dataDaMatricula: true,
      dataDeAnivesario: { $type: 'timestamp' }
    } 
  }
);

db.students.find({});