const express = require('express');
const app = express();
const path = require('path');
const indexRouter = require('./routes/index');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);

const PORT = process.env.PORT || 3000;
app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});


