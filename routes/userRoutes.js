const express = require('express');
const router  = express.Router();
const userCtrl = require('../controllers/userController');

// Rutas para usuarios
router.post('/users',   userCtrl.create);
router.get('/users',    userCtrl.findAll);
router.get('/users/:id',userCtrl.findOne);
router.put('/users/:id',userCtrl.update);
router.delete('/users/:id',userCtrl.delete);

module.exports = router;
