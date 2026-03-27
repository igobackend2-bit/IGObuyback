import { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { TrendingUp, TrendingDown, Minus, RefreshCw, MapPin, Search } from 'lucide-react';
import { PRODUCTS, getAllCategories } from '../config/products';
import { MarketPriceGraph } from '../components/MarketPriceGraph';
import { PriceCalculator } from '../components/PriceCalculator';

export const Market = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Get all categories
  const categories = getAllCategories();

  // Filter and search products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const categoryMatch = !selectedCategory || product.category === selectedCategory;
      const searchMatch =
        !searchQuery ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase());
      return categoryMatch && searchMatch;
    });
  }, [selectedCategory, searchQuery]);
  const now = new Date().toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' });

  return (
    <div className="pt-16 min-h-screen bg-agri-earth-50">
      {/* Header */}
      <div className="bg-white border-b border-agri-earth-100">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="badge-green w-fit mb-3"><TrendingUp size={14} /> Live Market Data</div>
              <h1 className="text-4xl font-black tracking-tighter text-agri-earth-900">IGO Market Dashboard</h1>
              <p className="text-agri-earth-500 mt-2 flex items-center gap-2 text-sm">
                <MapPin size={14} /> Tamil Nadu Region
                <span className="text-agri-earth-300">·</span>
                <RefreshCw size={13} /> Updated: {now}
              </p>
            </div>
            <a
              href="https://wa.me/919999999999?text=Subscribe%20to%20price%20alerts"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm px-5 py-2.5 w-fit"
            >
              Get WhatsApp Price Alerts
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10 space-y-10">
        {/* Filters */}
        <div className="space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-agri-earth-400" />
            <input
              type="text"
              placeholder="Search products by name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-agri-earth-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-agri-green-500"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                selectedCategory === null
                  ? 'bg-agri-green-600 text-white'
                  : 'bg-agri-earth-100 text-agri-earth-900 hover:bg-agri-earth-200'
              }`}
            >
              All Categories
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
                {category} ({PRODUCTS.filter((p) => p.category === category).length})
              </button>
            ))}
          </div>
        </div>

        {/* Price Table */}
        <div className="card overflow-hidden">
          <div className="p-6 border-b border-agri-earth-100">
            <h2 className="font-bold text-agri-earth-900">Today's Buyback Rates</h2>
            <p className="text-sm text-agri-earth-500">
              IGO guaranteed prices — no negotiation needed · {filteredProducts.length} products
            </p>
          </div>
          <div className="overflow-x-auto">
            {filteredProducts.length > 0 ? (
              <table className="w-full">
                <thead>
                  <tr className="bg-agri-earth-50 text-left">
                    <th className="px-6 py-3 text-xs font-semibold text-agri-earth-500 uppercase tracking-wide">
                      Product
                    </th>
                    <th className="px-6 py-3 text-xs font-semibold text-agri-earth-500 uppercase tracking-wide">
                      Category
                    </th>
                    <th className="px-6 py-3 text-xs font-semibold text-agri-earth-500 uppercase tracking-wide">
                      IGO Rate
                    </th>
                    <th className="px-6 py-3 text-xs font-semibold text-agri-earth-500 uppercase tracking-wide">
                      Demand
                    </th>
                    <th className="px-6 py-3 text-xs font-semibold text-agri-earth-500 uppercase tracking-wide">
                      Season
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-agri-earth-50">
                  {filteredProducts.map((product, i) => (
                    <motion.tr
                      key={product.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 }}
                      className="hover:bg-agri-green-50/50 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{product.emoji}</span>
                          <span className="font-semibold text-agri-earth-900">{product.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="badge-green text-[11px]">{product.category}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-lg font-black text-agri-green-600">
                          ₹{product.basePrice}/{product.unit}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`badge-${
                            product.demand === 'Very High' || product.demand === 'High' ? 'green' : 'amber'
                          } text-[10px]`}
                        >
                          {product.demand}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-agri-earth-600">{product.season}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="p-12 text-center">
                <p className="text-agri-earth-500">No products found matching your search.</p>
              </div>
            )}
          </div>
        </div>

        {/* Chart + Calculator */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 card p-6 md:p-8">
            <h2 className="font-bold text-agri-earth-900 mb-6">6-Month Price Trends</h2>
            <MarketPriceGraph />
          </div>
          <PriceCalculator />
        </div>
      </div>
    </div>
  );
};
