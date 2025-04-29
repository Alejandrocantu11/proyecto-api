const express = require('express');
const app     = express();
const port    = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());

// Importa y usa las rutas de usuario
const userRoutes = require('./routes/userRoutes');
app.use('/api', userRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('API corriendo 🔥');
});

// Inicia el servidor
const notesRouter = require('./routes/notes');
app.use('/api/notes', notesRouter);

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
