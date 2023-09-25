// See https://github.com/typicode/json-server#module
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
// Add this before server.use(router)
server.use(jsonServer.rewriter({
    '/api/*': '/$1',
    '/videos/:resource/:id/show': '/:resource/:id'
    '/categorias/:resource/:id/show': '/:resource/:id'
}))
server.use(router)
server.listen(3000, () => {
    console.log('JSON Server is running')
})



// Ruta para actualizar un recurso por su ID
server.put('/api/resource/:id', (req, res) => {
  const resourceId = parseInt(req.params.id);
  const updatedData = req.body; // Datos actualizados en el cuerpo de la solicitud

  // Realiza la actualización en tu archivo db.json o base de datos simulada
  // Debes encontrar el objeto con el ID correspondiente y actualizar sus propiedades con los datos actualizados

  // Envía una respuesta adecuada, por ejemplo, el objeto actualizado
  res.json(updatedData);
});

// Ruta para eliminar un recurso por su ID
server.delete('/api/resource/:id', (req, res) => {
  const resourceId = parseInt(req.params.id);

  // Realiza la eliminación en tu archivo db.json o base de datos simulada
  // Debes encontrar y eliminar el objeto con el ID correspondiente

  // Envía una respuesta adecuada, por ejemplo, un mensaje de éxito
  res.json({ message: 'Registro eliminado con éxito' });
});


// Export the Server API
module.exports = server
