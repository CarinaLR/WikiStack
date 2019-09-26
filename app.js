const express = require('express');
const app = express();
const morgan = require('morgan');
const models = require('./models/');
const staticMiddleware = express.static(__dirname + '/public');
const PORT = 1339;

// -------- MIDDLEWARE ---------- //
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(staticMiddleware);
app.use('/wiki', require('./routes/wiki'));
app.use('/users', require('./routes/user'));

// ------- HOME PAGE ---------- //
// Redirects to /wiki
app.get('/', (req, res) => {
  res.redirect('/wiki');
});

// -------- DATABASE --------- //
models.db.authenticate().then(() => {
  console.log('connected to database');
});

// --------- APP LISTENER FUNCTION --------- //
const init = async () => {
  await models.db.sync();
  app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`);
  });
};

init();
