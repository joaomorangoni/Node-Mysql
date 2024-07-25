const express = require('express');
const bodyParser = require('body-parser');
const customerRoutes = require('./routes/customerRoutes');
const path = require('path');

const app = express();

// Configurar o body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configurar a pasta de arquivos públicos
app.use(express.static(path.join(__dirname, 'public')));

// Configurar o motor de visualização EJS
app.set('view engine', 'ejs');

// Rotas
app.use('/customers', customerRoutes);

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});