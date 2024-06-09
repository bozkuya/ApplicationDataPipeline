// Import necessary modules and middleware
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// Import route handlers
const indexRouter = require('./routes/index');
const logsRouter = require('./routes/logs');
const usersRouter = require('./routes/users');
const publishRouter = require('./routes/publish');
const queryRouter = require('./routes/query');
const viewRouter = require('./routes/view');

const app = express();

// Set up view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Use middleware for logging, parsing request bodies, and serving static files
app.use(logger('dev'));
app.use(express.json({ limit: '25mb' }));
app.use(express.urlencoded({ limit: '25mb', extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Define routes
app.use('/', indexRouter);
app.use('/logs', logsRouter);
app.use('/users', usersRouter);
app.use('/publish', publishRouter);
app.use('/query', queryRouter);
app.use('/view', viewRouter);

// Catch 404 errors and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// Error handler
app.use((err, req, res, next) => {
  // Set locals, only providing error details in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
