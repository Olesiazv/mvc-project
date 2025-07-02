// models/TripModel.js
const Trip = require('./Trip');

class TripModel {
  constructor() {
    this.trips = [];
  }

  getAll() {
    return this.trips;
  }

  getById(id) {
    return this.trips[id] || null;
  }

  add(description, date, transport, hotel) {
    const trip = new Trip(description, date, transport, hotel);
    this.trips.push(trip);
  }

  update(id, description, date, transport, hotel) {
    if (!this.trips[id]) return false;
    this.trips[id].description = description;
    this.trips[id].date = date;
    this.trips[id].transport = transport;
    this.trips[id].hotel = hotel;
    return true;
  }

  delete(id) {
    if (!this.trips[id]) return false;
    this.trips.splice(id, 1);
    return true;
  }
}

module.exports = new TripModel();


