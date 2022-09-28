const { Router } = require("express");
const axios = require("axios");
const { Dog, Temperament } = require("../db.js");
const { API, API_KEY } = process.env;
const { formateoDb, formateoApi } = require("../controllers/controllers");
const { Op } = require("sequelize");
const router = Router();

router.get("/", async (req, res, next) => {
  // Guardo el nombre por si el usuario busca algo en particular
  const { name } = req.query;
  try {
    const dogApi = (await axios.get(`${API}?api_key=${API_KEY}`)).data;
    const dogDb = await Dog.findAll({
      where: { name: { [Op.iLike]: `${name}%` } },
      include: Temperament,
    });

    const validandoDogsDb = await formateoDb(dogDb);
    const validandoDogsApi = await formateoApi(dogApi);

    const allDog = await validandoDogsApi.concat(validandoDogsDb);

    if (!name) {
      res.send(allDog);
    } else {
      const dog = await allDog.filter((dog) =>
        dog.name.toLowerCase().includes(name.toLowerCase())
      );
      return res.status(200).send(dog);
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
