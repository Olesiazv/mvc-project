// routes/trips.js
const express = require('express');
const router = express.Router();
const TripController = require('../controllers/tripController');

router.get('/', TripController.getTriptsPage);
router.get('/new', TripController.getAddTripPage);
router.post('/new', TripController.addTrip);
router.get('/edit/:id', TripController.getEditTripPage);
router.post('/edit/:id', TripController.updateTrip);
router.post('/delete/:id', TripController.deleteTrip);

module.exports = router;

