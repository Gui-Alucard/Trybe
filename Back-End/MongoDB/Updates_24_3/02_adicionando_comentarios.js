db.burgers.updateOne(
  { cod: 1 },
  {
    $push: {
      comentarios: {
        $each: [
          { usuario: 'Gargani', nota: 6.0 },
          { usuario: 'Neto', nota: 9.0 },
          { usuario: 'Renato', nota: 3.0 }
        ]
      }
      
    }
  }
);
  
db.burgers.updateOne(
  { cod: 2 },
  {
    $push: {
      comentarios: {
        $each: [
          { usuario: 'Gargani', nota: 6.0 },
          { usuario: 'Neto', nota: 9.0 },
        ]
      }
    }
  }
);
  
db.burgers.updateOne(
  { cod: 3 },
  {
    $push: {
      comentarios: {
        $each: [
          { usuario: 'Renato', nota: 7.5 },
          { usuario: 'Neto', nota: 6.0 },
        ]
      }
    }
  }
);
    
db.burgers.updateOne(
  { cod: 4 },
  {
    $push: {
      comentarios: {
        $each: [
          { usuario: 'Thiago', nota: 10.0 },
          { usuario: 'Lucas', nota: 9.5 },
        ]
      }
    }
  }
);
  
db.burgers.updateOne(
  { cod: 5 },
  {
    $push: {
      comentarios: {
        $each: [
          { usuario: 'Amanda', nota: 6.5 },
          { usuario: 'Gabi', nota: 2.5 },
        ]
      }
    }
  }
);
    
