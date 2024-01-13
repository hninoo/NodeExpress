var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
const dbConnect = require("./libs/db_connect");

//Router
var indexRouter = require('./routes/index');
var authRouter = require('./routes/auth');


const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public'))); // to call home page

//DB connect
dbConnect.then(() => {
    console.log("Database connected successfully");
});

app.use('/', indexRouter);
app.use('/auth/user', authRouter);

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });

  
module.exports = app;