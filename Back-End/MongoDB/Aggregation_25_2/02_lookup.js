// Desafio: Vamos descobrir todos os pedidos feito pelo cliente XXXXXX no dia 24/11/2016 entre até o meio dia.

// Passo 1 
db.customers.aggregate([
  { $match: { "_id": 60914 } },
  { 
    $lookup: {
      from: 'orders',
      localField: '_id',
      foreignField: 'CustId',
      as: 'pedidos'
    }
  }
]).pretty();

// Passo 2
db.customers.aggregate([
  { $match: { "_id": 60914 } },
  { 
    $lookup: {
      from: 'orders',
      localField: '_id',
      foreignField: 'CustId',
      as: 'pedidos'
    }
  },
  { $unwind: '$pedidos' },
  { $project: { _id: false, 'pedidoData': '$pedidos.invoiceDate', 'pedidoId': '$pedidos._id' } }
]).pretty();

// Passo 3
db.customers.aggregate([
  { $match: { "_id": 60914 } },
  { 
    $lookup: {
      from: 'orders',
      localField: '_id',
      foreignField: 'CustId',
      as: 'pedidos'
    }
  },
  { $unwind: '$pedidos' },
  { $project: { _id: false, 'pedidoData': '$pedidos.invoiceDate', 'pedidoId': '$pedidos._id' } },
  { 
    $match: {
      pedidoData: { $gt: ISODate("2016-11-24T00:00:00"), $lt: ISODate("2016-11-24T12:00:00") }
    }
  }
]).pretty();

// * Agora usando lookup

// Passo 1
db.customers.aggregate([
  { $match: { "_id": 60914 } },
  { 
    $lookup: {
      from: 'orders',
      as: 'pedidos',
      // substituindo localField e foreignField por let/pipeline
      let: { customerId: '$_id' },
      pipeline: [
        {
          $match: {
            $expr: { $eq: [ '$CustId', '$$customerId'] }
          }
        }
      ] 
    }
  },
  { $unwind: '$pedidos' },
  { $project: { _id: false, 'pedidoData': '$pedidos.invoiceDate', 'pedidoId': '$pedidos._id' } }
]).pretty();

// Passo 2
db.customers.aggregate([
  { $match: { "_id": 60914 } },
  { 
    $lookup: {
      from: 'orders',
      as: 'pedidos',
      let: { customerId: '$_id' },
      pipeline: [
        {
          $match: {
            
            $expr: { $eq: [ '$CustId', '$$customerId'] },
            // adicionando filtros
            invoiceDate: { $gt: ISODate("2016-11-24T00:00:00"), $lt: ISODate("2016-11-24T12:00:00") }
          }
        }
      ] 
    }
  },
  { $unwind: '$pedidos' },
  { $project: { _id: false, 'pedidoData': '$pedidos.invoiceDate', 'pedidoId': '$pedidos._id' } }
]).pretty();







