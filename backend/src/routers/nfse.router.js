const express = require('express');
const nfseController = require('../controllers/nfse.controller')
const router = express.Router();


//router.get('/client', clientController.getClients);
router.post('/nfse', nfseController.generate);

module.exports = router;