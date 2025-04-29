// routes/notes.js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/noteController');

router.post('/', controller.create);        // Crear nota
router.get('/', controller.findAll);        // Listar notas
router.get('/:id', controller.findOne);     // Detalle de una nota
router.put('/:id', controller.update);      // Actualizar nota
router.delete('/:id', controller.remove);   // Eliminar nota

module.exports = router;
