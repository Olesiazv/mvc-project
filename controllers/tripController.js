// controllers/TripController.js
const TripModel = require('../models/TripModel');
const path = require('path');

exports.getTriptsPage = (req, res) => {
    const trips = TripModel.getAll();
    res.render('triplist', { trips });
};

exports.getAddTripPage = (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'formNew.html'));
};

exports.addTrip = (req, res) => {
    const { description, date, transport, hotel } = req.body;
    TripModel.add(description, date, transport, hotel);
    res.redirect('/');
};

exports.getEditTripPage = (req, res) => {
    const id = req.params.id;
    const trip = TripModel.getById(id);
    if (!trip) {
        res.status(404).send('Trip not found');
    } else {
        trip.id = id; // передаємо id для форми
        res.render('formUpdate', { trip });
    }
};

exports.updateTrip = (req, res) => {
    const id = req.params.id;
    const { description, date, transport, hotel } = req.body;
    const updated = TripModel.update(id, description, date, transport, hotel);
    if (!updated) {
        res.status(404).send('Trip not found');
    } else {
        res.redirect('/');
    }
};

exports.deleteTrip = (req, res) => {
    const id = req.params.id;
    const deleted = TripModel.delete(id);
    if (!deleted) {
        res.status(404).send('Trip not found');
    } else {
        res.redirect('/');
    }
};
