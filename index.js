const express = require('express');
const app = express();
const mongoose = require('mongoose');

// const todoRouter = require('./route/todo.route');
// const userRouter = require('./route/user.routes');
// const loginRouter = require('./route/login.route');
// require('dotenv').config();

const database_Url = "mongodb+srv://ankitsingh2312:ankit@2312@cluster123.1xn75ic.mongodb.net/todo";

mongoose.connect(database_Url, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

db.once('open', () => {
    console.log('Connected to MongoDB');
});


app.use(express.json());
// app.use('/todo', todoRouter);

// app.use('/user', userRouter);

// app.use('/auth', loginRoute);

app.get('/', (req, res) => {
    res.send("hello from the server")
})

const PORTNo = 3030;


app.listen(PORTNo, () => {
    console.log(`Application is running on Port number ${PORTNo}`);
});