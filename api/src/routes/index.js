const express = require("express");
const Dogs = require("./dogs");
const Temperaments = require("./temperaments");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = express.Router();

router.use("/dogs", Dogs);
router.use("/temperaments", Temperaments);
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
