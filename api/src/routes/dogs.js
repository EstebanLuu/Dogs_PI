const { Router } = require("express");
const axios = require("axios");
const { Dog, Temperament } = require("../db.js");
const { API, API_KEY } = process.env;
const { formateoDb, formateoApi } = require("../controllers/controllers");

// Importar todos los routers;
const router = Router();

router.get("/", async (req, res, next) => {
  try {
    const dogApi = (await axios.get(`${API}?api_key=${API_KEY}`)).data;
    const dogDb = await Dog.findAll({ include: Temperament });

    const validandoDogsDb = await formateoDb(dogDb);
    const validandoDogsApi = await formateoApi(dogApi);

    const allDog = await validandoDogsApi.concat(validandoDogsDb);

    res.json(allDog);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res) => {
  const {
    name,
    height_min,
    height_max,
    weight_min,
    weight_max,
    temperament,
    image,
  } = req.body;

  if (
    !name ||
    !height_min ||
    !height_max ||
    !weight_min ||
    !weight_max ||
    !temperament
  ) {
    return res.status(404).send("Faltan Datos");
  }
  try {
    const dogCreated = await Dog.create({
      name,
      height_min,
      height_max,
      weight_min,
      weight_max,
      image,
      temperament,
    });

    let temperDb = await Temperament.findAll({ where: { name: temperament } });
    await dogCreated.addTemperament(temperDb);
    return res.status(202).send(dogCreated);
  } catch (e) {
    console.log(e);
    return res.status(404).send("No se pudo crear la raza del perro");
  }
});

router.get("/:idRaza", async (req, res, next) => {
  const { idRaza } = req.params;
  if (!idRaza) {
    return res.status(400).send({ msg: "Falta enviar datos obligatorios" });
  }
  try {
    const dogApi = (await axios.get(`${API}?api_key=${API_KEY}`)).data;
    const dogDb = await Dog.findAll({ include: Temperament });

    const validandoDogsDb = await formateoDb(dogDb);
    const validandoDogsApi = await formateoApi(dogApi);

    const allDog = await validandoDogsDb.concat(validandoDogsApi);

    const dog = allDog.filter((d) => d.id == idRaza);

    return res.status(200).send(dog);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
