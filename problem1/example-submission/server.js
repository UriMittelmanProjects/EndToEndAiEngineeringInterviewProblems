import express from 'express';
import cors from 'cors';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Load products data
const products = JSON.parse(
  readFileSync(join(__dirname, 'public', 'products.json'), 'utf-8')
);

// Get all products
app.get('/api/products', (req, res) => {
  // Simulate network delay
  setTimeout(() => {
    res.json(products);
  }, 300);
});

// Get product by id
app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (product) {
    setTimeout(() => {
      res.json(product);
    }, 300);
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
});

// Get unique categories
app.get('/api/categories', (req, res) => {
  const categories = [...new Set(products.map(p => p.category))];
  setTimeout(() => {
    res.json(categories);
  }, 200);
});

// Get products by category
app.get('/api/products/category/:category', (req, res) => {
  const categoryProducts = products.filter(
    p => p.category.toLowerCase() === req.params.category.toLowerCase()
  );
  setTimeout(() => {
    res.json(categoryProducts);
  }, 300);
});

app.listen(PORT, () => {
  console.log(`Mock API server running on http://localhost:${PORT}`);
  console.log(`Available endpoints:`);
  console.log(`  GET http://localhost:${PORT}/api/products`);
  console.log(`  GET http://localhost:${PORT}/api/products/:id`);
  console.log(`  GET http://localhost:${PORT}/api/categories`);
  console.log(`  GET http://localhost:${PORT}/api/products/category/:category`);
});
