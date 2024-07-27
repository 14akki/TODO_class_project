const express = require('express');
const app = express();
const mongoose = require('mongoose');

const database_Url = process.env.DATABASE_URL;
const dbName = 'todo';

mongoose.connect(database_Url, { useNewUrlParser: true, useUnifiedTopology: true });

const db= mongoose.connection;

db.on('error',console.error.bind(console, 'MongoDB connection error:'))

db.once('open',()=>{
    console.log('Connected to MongoDB', dbName);
});

app.use(express.json());
app.get('/', (req, res) => {
    res.send("hello from the server")
})
const PORTNo = process.env.PORT_NO;

app.listen(PORTNo, () => {
    console.log(`Application is running on Port number ${PORTNo}`);
});;