const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

//Routes
const routeQeues = require('./routes/shopping');

//Соединение с БД
mongoose.connect('mongodb://localhost:27017/shopping');

//Создаем новое приложение
let app = new express();
app.set('view engine', 'html');

//Работа с роутингом
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');

    next();
});

//Обработка статических файлов
app.use(express.static(__dirname + '/dist'));

app.use(morgan('combined'));

//Наши запросы
app.use('/api/shopping', routeQeues);
//...

//Обработка ошибок
app.use(function (req, res, next) {
    let error = new Error('Page not Found');
    error.status = 404;
    next(error);
});

app.use(function (error, req, res, next) {
    res.status(error.status || 500);
    res.json({
        message: error.message,
        error
    });
});


app.listen(8082, function () {
    console.log('Server works!');
});