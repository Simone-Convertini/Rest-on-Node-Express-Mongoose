const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const app = require('./app');

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

mongoose.connect(DB, { 
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
 }).then(() => {
     console.log('Connected to Mongo Atlas');
 });

app.listen(process.env.PORT, () => {
    console.log(`On port ${process.env.PORT}`);
});