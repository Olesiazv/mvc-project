// routes/trips.js
const express = require('express');
const router = express.Router();
const tripController = require('../controllers/tripController');

router.get('/', tripController.getTriptsPage);
router.get('/new', tripController.getAddTripPage);
router.post('/new', tripController.addTrip);
router.get('/edit/:id', tripController.getEditTripPage);
router.post('/edit/:id', tripController.updateTrip);
router.post('/delete/:id', tripController.deleteTrip);

module.exports = router;
