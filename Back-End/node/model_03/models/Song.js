const connection = require('./connection');
const { ObjectId } = require('mongodb');

const getAll = async () => {
  return await connection().then((db) => db.collection('songs').find().toArray())
}

const findById = async (id) => {
  return await connection().then((db) => db.collection('songs').findOne(ObjectId(id)))
}

const findByNameAndAlbum = async (name, album) => {
  return await connection().then((db) => db.collection('songs').findOne({name, album}));
}

const create = async (name, album) => {
  const { insertedId } = await connection().then((db) => db.collection('songs').insertOne({ name, album}))

  return {
    insertedId,
    name,
    album
  }
}

module.exports = { 
  getAll,
  findById,
  create, 
  findByNameAndAlbum
}