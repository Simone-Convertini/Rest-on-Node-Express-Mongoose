const express = require('express');
const tourController = require('./../controllers/tourController');
const tourRouter = express.Router();

tourRouter
    .route('/')
    .post(tourController.createTour)
    .get(tourController.readAllTours);
tourRouter
    .route('/top-cheap')
    .get(tourController.aliasTopCheap, tourController.readAllTours);
tourRouter
    .route('/:id')
    .get(tourController.readTour)
    .patch(tourController.updateTour)
    .delete(tourController.deleteTour);

    module.exports = tourRouter;