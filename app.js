const express = require('express');
const app = express();
const morgan = require('morgan');
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))
const layout = require('./views/layout')
const { db } = require('./models')

const staticMiddleware = express.static('public');
app.use(staticMiddleware);

app.get('/', (req, res) => {
    res.send(layout(""))
})

db.authenticate().then(() => {
    console.log('connected to database');
})

const PORT = 1339;

app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`)
})