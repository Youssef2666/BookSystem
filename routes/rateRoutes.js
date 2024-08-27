const express = require('express');
const router = express.Router();
const rateController = require('../controllers/rateController');


router.get('/rates', rateController.getRates);
router.get('/rates/:id', rateController.getRateById);
router.post('/rates', rateController.createRate);
router.patch('/rates/:id', rateController.updateRate);
// router.get('/rates/calculate_rate', rateController.calculateRate);
router.delete('/rates/:id', rateController.deleteRate);

module.exports = router;

