/* eslint-disable no-param-reassign */
const express = require('express');

function routes(Airport) {
  const airportRouter = express.Router();

  airportRouter.route('/airports')
    .get((req, res) => {
      // Filtering
      const query = {};
      if (req.query.country) {
        query.country = req.query.country;
      }

      Airport.find(query, (err, airports) => {
        if (err) {
          return res.send(err);
        }

        return res.json(airports);
      });
    })
    .post((req, res) => {
      const airport = new Airport(req.body);
      airport.save();

      return res.status(201).json(airport);
    });

  // Single Airport
  airportRouter.use('/airports/:id', (req, res, next) => {
    Airport.findById(req.params.id, (err, airport) => {
      if (err) {
        return res.send(err);
      }
      if (airport) {
        req.airport = airport;
        return next();
      }
      return res.status(404);
    });
  });
  airportRouter.route('/airports/:id')
    .get((req, res) => res.json(req.airport))
    .put((req, res) => {
      const { airport } = req;

      airport.code = req.body.code;
      airport.lat = req.body.lat;
      airport.lon = req.body.lon;
      airport.name = req.body.name;
      airport.city = req.body.city;
      airport.state = req.body.state;
      airport.country = req.body.country;
      airport.woeid = req.body.woeid;
      airport.tz = req.body.tz;
      airport.phone = req.body.phone;
      airport.type = req.body.type;
      airport.email = req.body.email;
      airport.url = req.body.url;
      airport.runway_length = req.body.runway_length;
      airport.elev = req.body.elev;
      airport.icao = req.body.icao;
      airport.direct_flights = req.body.direct_flights;
      airport.carriers = req.body.carriers;

      airport.save();

      return res.json(airport);
    });

  return airportRouter;
}

module.exports = routes;