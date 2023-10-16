const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());

const products = [
  { id: 1, name: 'JUliana 1', price: 10.99 },
  { id: 2, name: 'Juliana 2', price: 19.99 },
  { id: 3, name: 'Juliana 3', price: 29.99 },
  { id: 4, name: 'Juliana 4', price: 39.99 },
  { id: 5, name: 'Juliana 5', price: 49.99 },
  { id: 6, name: 'Juliana 6', price: 59.99 },
  { id: 7, name: 'Juliana 7', price: 69.99 },
];

// Listar todos os produtos
app.get('/api/products', (req, res) => {
  res.json(products);
});

// Adicionar um novo produto (para administradores)
app.post('/api/products', (req, res) => {
  if (req.body && req.body.name && req.body.price) {
    const newProduct = {
      id: products.length + 1,
      name: req.body.name,
      price: req.body.price,
    };
    products.push(newProduct);
    res.status(201).json(newProduct);
  } else {
    res.status(400).json({ error: 'Nome e preço são campos obrigatórios.' });
  }
});

// Editar um produto (para administradores)
app.put('/api/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const updatedProduct = products.find((product) => product.id === id);
  if (updatedProduct) {
    if (req.body && req.body.name) {
      updatedProduct.name = req.body.name;
    }
    if (req.body && req.body.price) {
      updatedProduct.price = req.body.price;
    }
    res.json(updatedProduct);
  } else {
    res.status(404).json({ error: 'Produto não encontrado.' });
  }
});

// Remover um produto (para administradores)
app.delete('/api/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = products.findIndex((product) => product.id === id);
  if (index !== -1) {
    products.splice(index, 1);
    res.json({ message: 'Produto removido com sucesso.' });
  } else {
    res.status(404).json({ error: 'Produto não encontrado.' });
  }
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
