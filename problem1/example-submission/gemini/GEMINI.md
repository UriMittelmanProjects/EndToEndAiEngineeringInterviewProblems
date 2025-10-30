# Product Catalog Dashboard

## Problem Statement

Build a responsive product catalog dashboard that allows users to browse and filter products from an online store.

## Goal

Create a small frontend application that lists products and lets users filter by category and search for specific items.

## Requirements

### Core Functionality
1. **Data Fetching**: Fetch product data from the provided mock API
   - **Option 1 (Recommended)**: Local mock API at `http://localhost:3001/api/products`
   - **Option 2**: External API at `https://fakestoreapi.com/products`
   - Handle loading and error states appropriately

2. **Category Filtering**: Implement a category filter that allows users to:
   - View all products (default)
   - Filter by specific categories (electronics, accessories, clothing)

3. **Search Functionality**: Add a search bar that filters products by:
   - Product name/title (case-insensitive)

4. **Product Display**: Show product cards with:
   - Product image
   - Product name/title
   - Price (formatted appropriately)
   - Clean, responsive card layout

### Technical Requirements
- Use React for the UI
- Use Tailwind CSS for styling
- Implement clean component architecture
- Use appropriate state management (useState, useEffect)
- Ensure responsive design (mobile-friendly)

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start both the mock API server and development server:
   ```bash
   npm start
   ```

   Or run them separately:
   ```bash
   npm run api    # Starts mock API on http://localhost:3001
   npm run dev    # Starts React app on http://localhost:5173
   ```

## Example Prompt

To get started with your AI tool, you might use a prompt like:

> "Create a responsive React component that displays product cards from http://localhost:3001/api/products with category filters and a search box using Tailwind CSS."

## Time Limit

45-60 minutes

## Evaluation Criteria

Your solution will be evaluated on:

1. **Component Design** (30%)
   - Proper component structure and separation of concerns
   - Reusable and maintainable code
   - Clean file organization

2. **State Management** (25%)
   - Appropriate use of React hooks
   - Efficient state updates
   - Proper handling of async operations

3. **UI/UX Quality** (25%)
   - Clean, intuitive interface
   - Responsive design
   - Proper loading and error states
   - Good visual hierarchy

4. **AI Tool Usage** (20%)
   - Effective prompting to generate components
   - Ability to combine AI-generated code coherently
   - Efficient problem-solving with AI assistance
   - Code understanding and customization

## Mock API Documentation

The provided mock API server includes the following endpoints:

- `GET /api/products` - Returns all products
- `GET /api/products/:id` - Returns a single product by ID
- `GET /api/categories` - Returns list of all categories
- `GET /api/products/category/:category` - Returns products by category

Each product has the following structure:
```json
{
  "id": 1,
  "title": "Product Name",
  "price": 79.99,
  "description": "Product description",
  "category": "electronics",
  "image": "image-url"
}
```

## Submission

Ensure your application:
- Runs without errors (`npm start` should work)
- Displays products correctly
- All filters and search functionality work
- Is responsive on mobile and desktop

## Bonus Points (Optional)

- Add sort functionality (by price, name)
- Implement a "view details" modal or page
- Add smooth animations/transitions
- Include unit tests
- Add TypeScript types
