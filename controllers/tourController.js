const Tour = require('./../models/TourModel');
const APIfeatures = require('./../util/APIfeatures');

//CRUD

const createTour = async (req, res) => {
    try {

        const newTour = await Tour.create(req.body);
        res.status(201).json({ status: 'success', data: {newTour} });

    } catch(err) {
        req.status(400).json({ message: 'Azz' });
        console.log(err);
    }
};
const readAllTours = async (req, res) => {
    try {
        
        const features = new APIfeatures(Tour.find(), req.query)
            .filter()
            .sort()
            .fieldLimit()
            .pageAndLimiting();

        //Executing Query:
        const tours = await features.query;
        res.status(200).json({ status: 'success', result: tours.length, data: {tours} });

    } catch(err) {
        res.status(404).json({ message: 'Azz' });
        console.log(err);
    }
};
const readTour = async (req, res) => {
    try {

        const tour = await Tour.findById(req.params.id);
        res.status(200).json({ status: 'success', data: {tour} });

    } catch(err) {
        res.status(404).json({ message: 'Azz' });
        console.log(err);
    }
};
const updateTour = async (req, res) => {
    try {

        const upTour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        res.status(201).json({ status: 'updated', data: {upTour} });

    } catch(err) {
        res.status(404).json({ message: 'Azz' });
        console.log(err);
    }
};
const deleteTour = async (req, res) => {
    try {

        const delTour = await Tour.findByIdAndDelete(req.params.id, {
            returnDocument: 'before'
        });
        res.status(204).json({ status:'deleted', data: {delTour} });

    } catch(err) {
        res.status(404).json({ message: 'Azz' });
        console.log(err);
    }
};

//MiddleWares:

const aliasTopCheap = (req, res, next) => {
    req.query.limit = 5;
    req.query.sort = '-ratingsAverage,price';
    req.query.fields = 'name,price,ratingsAverage,summary, difficulty';
    next();
};

module.exports = {createTour, readAllTours, readTour, updateTour, deleteTour, aliasTopCheap};