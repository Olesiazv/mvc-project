const express = require('express');
const app = express();
const tripController = require('./tripController'); // або ./controllers/tripController

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

// Інші маршрути...
app.post('/trips/:id/delete', tripController.deleteTrip);

// Сервер
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Serwer działa na porcie ${PORT}`);
});


