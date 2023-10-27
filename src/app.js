// src/app.js
const express = require('express');
const app = express();
const productsRouter = require('./routes/products');

app.use(express.json());
app.use('/', productsRouter);

const port = process.env.PORT || 8000
app.listen(port, ()  => {
   console.log(`API: Server is up at port:${port}` )
})

module.exports = app;