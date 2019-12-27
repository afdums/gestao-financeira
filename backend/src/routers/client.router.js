const express = require('express');
const clientController = require('../controllers/client.controller')
const router = express.Router();


router.get('/client', clientController.getClients);
router.post('/client', clientController.saveClient);

module.exports = router;