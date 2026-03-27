/**
 * Centralized product configuration
 * Single source of truth for all product data across the application
 */

export interface Product {
  id: string;
  name: string;
  basePrice: number;
  unit: 'kg' | 'bundles' | 'pieces';
  demand: 'Low' | 'Medium' | 'High' | 'Very High';
  season: string;
  imageUrl: string;
  priceChange: string; // e.g., '+5%'
  emoji?: string; // For calculator display
}

/**
 * All products available for buyback
 * Update prices here and they'll be consistent across the entire app
 */
export const PRODUCTS: Product[] = [
  {
    id: 'cucumber',
    name: 'Cucumber',
    basePrice: 28,
    unit: 'kg',
    demand: 'High',
    season: 'Year Round',
    imageUrl: 'https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?w=400&q=80',
    priceChange: '+5%',
    emoji: '🥒',
  },
  {
    id: 'oyster-mushroom',
    name: 'Oyster Mushroom',
    basePrice: 198,
    unit: 'kg',
    demand: 'Very High',
    season: 'Year Round',
    imageUrl: 'https://images.unsplash.com/photo-1571771019784-3ff35f4f4277?w=400&q=80',
    priceChange: '+12%',
    emoji: '🍄',
  },
  {
    id: 'microgreens',
    name: 'Microgreens',
    basePrice: 289,
    unit: 'kg',
    demand: 'High',
    season: 'Year Round',
    imageUrl: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&q=80',
    priceChange: '+8%',
    emoji: '🌱',
  },
  {
    id: 'button-mushroom',
    name: 'Button Mushroom',
    basePrice: 220,
    unit: 'kg',
    demand: 'Medium',
    season: 'Oct–Mar',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    priceChange: '+3%',
    emoji: '🍄',
  },
  {
    id: 'spinach',
    name: 'Spinach',
    basePrice: 35,
    unit: 'kg',
    demand: 'High',
    season: 'Year Round',
    imageUrl: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&q=80',
    priceChange: '+2%',
    emoji: '🥬',
  },
  {
    id: 'tomato',
    name: 'Tomato',
    basePrice: 42,
    unit: 'kg',
    demand: 'High',
    season: 'Year Round',
    imageUrl: 'https://images.unsplash.com/photo-1546470427-e26264b8094f?w=400&q=80',
    priceChange: '+4%',
    emoji: '🍅',
  },
];

/**
 * Get product by ID
 */
export const getProductById = (id: string): Product | undefined => {
  return PRODUCTS.find((p) => p.id === id);
};

/**
 * Get all product names (for dropdowns, etc.)
 */
export const getProductNames = (): string[] => {
  return PRODUCTS.map((p) => p.name);
};

/**
 * Get product price formatted with unit
 */
export const getFormattedPrice = (productId: string): string => {
  const product = getProductById(productId);
  if (!product) return '';
  return `₹${product.basePrice}/${product.unit}`;
};

/**
 * Get high demand products (for marketing)
 */
export const getHighDemandProducts = (): Product[] => {
  return PRODUCTS.filter((p) => p.demand === 'High' || p.demand === 'Very High');
};
