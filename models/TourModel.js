const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({ 
    name: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    duration: {
        type: Number,
        required: true
    },
    maxGroupSize: {
        type: Number,
        required: true
    },
    difficulty: {
        type: String,
        required: true
    },
    ratingAverage: {
        type: Number,
        default: 3
    },
    ratingQuantity: {
        type: Number,
        default: 0,
    },
    price: {
        type: Number,
        required: true
    },
    priceDiscount: Number,
    summary: {
        type: String,
        trim: true
    },
    description: {
        type: String,
        trim: true,
        required: true
    },
    imageCover: {
        type: String,
        required: true
    },
    images: [String],
    ceratedAt: {
        type: Date,
        default: Date.now(),
        select: false
    },
    startDates: [Date]
});

 module.exports = mongoose.model('Tour', tourSchema);