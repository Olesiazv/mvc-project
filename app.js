const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const tripsPath = path.join(__dirname, 'data', 'trips.json');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

function loadTrips() {
  try {
    const data = fs.readFileSync(tripsPath, 'utf8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

function saveTrips(trips) {
  fs.writeFileSync(tripsPath, JSON.stringify(trips, null, 2));
}

app.get('/', (req, res) => res.redirect('/trips'));

app.get('/trips', (req, res) => {
  const trips = loadTrips();
  res.render('trips/index', { trips });
});

app.get('/trips/new', (req, res) => {
  res.render('trips/new');
});

app.post('/trips', (req, res) => {
  const trips = loadTrips();
  const { name, date, hotel, transport, places } = req.body;
  trips.push({ id: Date.now(), name, date, hotel, transport, places });
  saveTrips(trips);
  res.redirect('/trips');
});

app.get('/trips/:id/edit', (req, res) => {
  const trips = loadTrips();
  const trip = trips.find(t => t.id == req.params.id);
  if (!trip) return res.status(404).send('Not found');
  res.render('trips/edit', { trip });
});

app.post('/trips/:id', (req, res) => {
  const trips = loadTrips();
  const trip = trips.find(t => t.id == req.params.id);
  if (!trip) return res.status(404).send('Not found');
  Object.assign(trip, req.body);
  saveTrips(trips);
  res.redirect('/trips');
});

app.post('/trips/:id/delete', (req, res) => {
  let trips = loadTrips();
  trips = trips.filter(t => t.id != req.params.id);
  saveTrips(trips);
  res.redirect('/trips');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
