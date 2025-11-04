const { Router } = require('express');
const { obtenerPreguntasAleatorias } = require('../middlewares/preguntas');

const router = Router();

router.get('/', (req, res) => {
  const preguntas = obtenerPreguntasAleatorias(8);
  res.json(preguntas.texto);
});

module.exports = router;