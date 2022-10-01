const { Router } = require("express");
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
