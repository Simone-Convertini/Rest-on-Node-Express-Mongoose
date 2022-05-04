const express = require('express');
const dataRouter = require('./routes/userRouter');
const tourRouter = require('./routes/tourRouter');

const app = express();

//MIDDLEWARES:

app.use(express.static(`${__dirname}/public`));
app.use(express.json());
app.use((req, res, next) => {
    req.timestamp = new Date().toISOString();
    next();
});

//MOUNTING:

app.use('/api/v1/datas', dataRouter);
app.use('/api/v1/tours', tourRouter);

module.exports = app;
