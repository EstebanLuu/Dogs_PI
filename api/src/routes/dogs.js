const express = require("express");
const { Router } = require("express");
const { API, API_SEARCH, API_KEY } = process.env;
const axios = require("axios");
const { formateoDb, formateoApi } = require("../controllers/controllers");

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

module.exports = router;
