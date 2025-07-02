const express = require('express');
const router = express.Router();
const TripController = require('../controllers/tripController');

// Strona główna — lista podróży
router.get('/', TripController.getTriptsPage);

// Formularz dodawania nowej podróży
router.get('/new', TripController.getAddTripPage);
router.post('/new', TripController.addTrip);

// Edytowanie podróży
router.get('/edit/:id', TripController.getEditTripPage);
router.post('/edit/:id', TripController.updateTrip);

// Usuwanie podróży
router.post('/delete/:id', TripController.deleteTrip);

// Gorące oferty — statyczna strona
router.get('/hot', (req, res) => {
  const hotTrips = [
    {
      description: 'Hiszpania – Barcelona',
      date: '10.08.2025',
      transport: 'Samolot',
      hotel: 'SunHotel'
    },
    {
      description: 'Grecja – Ateny',
      date: '15.08.2025',
      transport: 'Samolot',
      hotel: 'BlueSky Resort'
    },
    {
      description: 'Włochy – Rzym',
      date: '20.08.2025',
      transport: 'Pociąg',
      hotel: 'BellaRoma'
    }
  ];

  res.render('hotTrips', { hotTrips });
});

module.exports = router;


