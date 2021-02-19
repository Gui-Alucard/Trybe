const SongService = require('../services/SongService');

const getAll = async (req, res) =>  {
  const songs = await SongService.getAll();

  res.status(200).json(songs);
}

const findById = async (req, res) =>  {
  const song = await SongService.findById(req.params.id);

  if (!song) return res.status(404).json({message: "Música não encontrada"})

  res.status(200).json(song);
}

const create = async (req, res) =>  {
  const { name, album } = req.body;

  const song = await SongService.create(name, album);

  if (!song) return res.status(400).json({ message: 'Já existe uma música com esse nome e album'});

  res.status(201).json({ message: "Cadastrado com sucesso!", song });
}

module.exports = {
  getAll,
  findById,
  create
}