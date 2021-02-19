const Song = require('../models/Song');

const getAll = async  () => await Song.getAll();

const findById = async (id) => await Song.findById(id);

const create = async (name, album) => {
  const existsSong = await Song.findByNameAndAlbum(name, album);

  if (existsSong) return false;

  const song = await Song.create(name, album);

  return song;
}

module.exports = {
  create,
  findById,
  getAll
}