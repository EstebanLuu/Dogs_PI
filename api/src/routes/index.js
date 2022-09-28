const { Router } = require("express");
const axios = require("axios");
const { Dog, Temperament } = require("../db.js");
const { API, API_KEY } = process.env;
const { formateoDb, formateoApi } = require("../controllers/controllers");
const search = require("./search");
const dogs = require("./dogs");
const temperaments = require("./temperaments");

// Importar todos los routers;
const router = Router();

// // Configurar los routers
router.use("/search", search);
router.use("/dogs", dogs);
router.use("/temperaments", temperaments);

module.exports = router;

// const data = async () => {
//   const arr = await axios.get(`${API}`);
//   return arr.data.results;
// };

// router.get("/data", async (req, res) => {
//   const name = req.query.name;
//   // Guando el name por si el usuario busca algo en concreto

//   const apiDogs = await data();

//   try {
//     const find = await Dog.findAll();

//     if (!find.length) await Dog.bulkCreate(apiDogs);
//   } catch (error) {
//     console.log(error);
//   }
//   if (name) {
//     try {
//       const ParticularDog = await Dog.findAll({
//         where: { name: { [Op.iLike]: `${name}%` } },
//       });
//       return res.json(ParticularDog);
//     } catch (error) {
//       console.log(error);
//     }
//   } else if (req.query.filter) {
//     // respuesta para busqueda con filtro

//     try {
//       const ParticularsDogs = await Dog.findAll({
//         where: {
//           temperament: req.query.filter,
//         },
//         limit: 6,
//         offset: req.query.page,
//         order: [["name", req.query.order]],
//       });
//       return res.json(ParticularsDogs);
//     } catch (error) {
//       console.log(error);
//     }
//   } else {
//     try {
//       const dogs = await Dog.findAll({
//         limit: 6,
//         offset: req.query.page,
//         order: [["name", req.query.order]],
//       });
//       return res.json(dogs);
//     } catch (error) {
//       console.log(error);
//     }
//   }
// });
