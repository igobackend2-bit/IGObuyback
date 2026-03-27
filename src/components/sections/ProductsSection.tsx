import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronRight, TrendingUp } from 'lucide-react';
import { PRODUCTS, getProductsByCategory, getHighDemandProducts } from '../../config/products';

/**
 * Products Section - Featured products with buyback prices
 * Shows high-demand products and categories available
 */
export const ProductsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Get all unique categories
  const categories = Array.from(new Set(PRODUCTS.map((p) => p.category)));

  // Show featured products: high demand if no category selected, or category-specific
  const displayProducts = selectedCategory
    ? getProductsByCategory(selectedCategory as any)
    : getHighDemandProducts().slice(0, 8);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="badge-green w-fit mb-4">
              <TrendingUp size={14} /> Live Rates
            </div>
            <h2 className="text-4xl font-black tracking-tighter text-agri-earth-900">
              Products We Buy
            </h2>
            <p className="text-agri-earth-600 mt-2">
              {selectedCategory
                ? `Browse all ${selectedCategory} products`
                : 'Featured high-demand products'}
            </p>
          </div>
          <Link to="/market" className="btn-ghost text-sm">
            View All Market Prices <ChevronRight size={16} />
          </Link>
        </div>

        {/* Category Filter */}
        <div className="mb-8 flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              selectedCategory === null
                ? 'bg-agri-green-600 text-white'
                : 'bg-agri-earth-100 text-agri-earth-900 hover:bg-agri-earth-200'
            }`}
          >
            All Featured
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                selectedCategory === category
                  ? 'bg-agri-green-600 text-white'
                  : 'bg-agri-earth-100 text-agri-earth-900 hover:bg-agri-earth-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayProducts.map((product, i) => (
            <motion.div
              key={`product-${product.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="card overflow-hidden group"
            >
              <div className="relative h-44 overflow-hidden bg-agri-earth-100">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
                <div className="absolute top-3 right-3 bg-agri-green-600 text-white text-[11px] font-bold px-2 py-1 rounded-full">
                  {product.priceChange}
                </div>
                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur text-[10px] font-semibold text-agri-earth-900 px-2 py-1 rounded-full">
                  {product.category}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-agri-earth-900">{product.name}</h3>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xl font-black text-agri-green-600">
                    ₹{product.basePrice}/{product.unit}
                  </span>
                  <span
                    className={`badge-${
                      product.demand === 'Very High' || product.demand === 'High' ? 'green' : 'amber'
                    } text-[10px]`}
                  >
                    {product.demand}
                  </span>
                </div>
                <div className="text-xs text-agri-earth-400 mt-1">Season: {product.season}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {displayProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-agri-earth-600">No products found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};
