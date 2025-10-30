# Product Catalog Dashboard - Starter Project

This is the starter project for the Product Catalog Dashboard technical interview.

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start both the mock API server and development server:
```bash
npm start
```

This will start:
- Mock API server on http://localhost:3001
- React development server on http://localhost:5173

Alternatively, you can run them separately:
```bash
npm run api    # Start mock API only
npm run dev    # Start React app only
```

3. Open your browser to http://localhost:5173

## Project Structure

```
provided-project/
├── public/
│   └── products.json     # Mock product data
├── src/
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles (Tailwind imports)
├── server.js            # Express mock API server
├── index.html           # HTML entry point
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── postcss.config.js    # PostCSS configuration
```

## Available Scripts

- `npm start` - Start both mock API and development server (recommended)
- `npm run dev` - Start React development server only
- `npm run api` - Start mock API server only
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Tech Stack

- React 18
- Vite (build tool)
- Tailwind CSS (styling)
- Express (mock API server)

## Mock API Endpoints

The mock API server provides the following endpoints:

- `GET /api/products` - Returns all 20 products
- `GET /api/products/:id` - Returns a single product by ID
- `GET /api/categories` - Returns list of all categories
- `GET /api/products/category/:category` - Returns products filtered by category

Categories available: `electronics`, `accessories`, `clothing`

## Your Task

Refer to the problem statement in the `../prompt/README.md` file for full requirements.

You need to build a product catalog that:
- Fetches products from the mock API (`http://localhost:3001/api/products`)
- Implements category filtering
- Implements search functionality
- Displays products in a responsive card layout

Good luck!
