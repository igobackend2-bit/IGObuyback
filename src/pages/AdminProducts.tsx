import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Package, LogOut, Plus, Edit2, Trash2, TrendingUp, DollarSign, Search } from 'lucide-react';
import { useAdminAuth } from '../contexts/AdminAuthContext';
import { supabase, MarketPrice } from '../lib/supabase';

export const AdminProducts = () => {
  const navigate = useNavigate();
  const { user, isAdmin, logout } = useAdminAuth();
  const [products, setProducts] = useState<MarketPrice[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editData, setEditData] = useState<Partial<MarketPrice>>({});
  const [showAddForm, setShowAddForm] = useState(false);
  const [newProduct, setNewProduct] = useState<Partial<MarketPrice>>({
    name: '',
    price: 0,
    unit: 'kg',
    category: '',
    product_id: '',
  });

  // Check admin access
  useEffect(() => {
    if (!isAdmin) {
      navigate('/admin');
    }
  }, [isAdmin, navigate]);

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('market_prices')
          .select('*')
          .order('name', { ascending: true });

        if (error) throw error;
        setProducts(data || []);
      } catch (err) {
        console.error('Error fetching products:', err);
      } finally {
        setLoading(false);
      }
    };

    if (isAdmin) {
      fetchProducts();
    }
  }, [isAdmin]);

  const handleLogout = async () => {
    await logout();
    navigate('/admin');
  };

  const handleAddProduct = async () => {
    if (!newProduct.name || !newProduct.price || !newProduct.product_id) {
      alert('Please fill in all required fields');
      return;
    }

    try {
      const { data, error } = await supabase
        .from('market_prices')
        .insert([newProduct])
        .select()
        .single();

      if (error) throw error;
      setProducts([...products, data]);
      setNewProduct({ name: '', price: 0, unit: 'kg', category: '', product_id: '' });
      setShowAddForm(false);
    } catch (err) {
      console.error('Error adding product:', err);
      alert('Failed to add product');
    }
  };

  const handleUpdateProduct = async (id: string) => {
    try {
      const { error } = await supabase
        .from('market_prices')
        .update(editData)
        .eq('id', id);

      if (error) throw error;

      setProducts(products.map((p) => (p.id === id ? { ...p, ...editData } : p)));
      setEditingId(null);
      setEditData({});
    } catch (err) {
      console.error('Error updating product:', err);
      alert('Failed to update product');
    }
  };

  const handleDeleteProduct = async (id: string) => {
    if (!confirm('Are you sure you want to delete this product?')) return;

    try {
      const { error } = await supabase.from('market_prices').delete().eq('id', id);
      if (error) throw error;
      setProducts(products.filter((p) => p.id !== id));
    } catch (err) {
      console.error('Error deleting product:', err);
      alert('Failed to delete product');
    }
  };

  const filteredProducts = products.filter(
    (p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.product_id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (p.category?.toLowerCase().includes(searchTerm.toLowerCase()) ?? false)
  );

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-agri-earth-50 to-agri-green-50 pt-20">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white border-b border-agri-earth-200 sticky top-16 z-20"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Package className="text-agri-green-600" size={28} />
            <div>
              <h1 className="text-2xl font-black text-agri-earth-900">Product Management</h1>
              <p className="text-sm text-agri-earth-600">Manage all products and pricing</p>
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 bg-red-100 text-red-700 font-semibold rounded-lg hover:bg-red-200 transition-colors"
          >
            <LogOut size={18} />
            Logout
          </motion.button>
        </div>
      </motion.header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl p-6 border border-agri-earth-200 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-agri-earth-600">Total Products</p>
                <p className="text-3xl font-black text-agri-earth-900">{products.length}</p>
              </div>
              <Package className="text-agri-green-600 opacity-30" size={40} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-xl p-6 border border-agri-earth-200 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-agri-earth-600">Avg Price</p>
                <p className="text-3xl font-black text-agri-earth-900">
                  ₹{(products.reduce((sum, p) => sum + (p.price || 0), 0) / products.length || 0).toFixed(0)}
                </p>
              </div>
              <DollarSign className="text-blue-600 opacity-30" size={40} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl p-6 border border-agri-earth-200 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-agri-earth-600">Categories</p>
                <p className="text-3xl font-black text-agri-earth-900">{new Set(products.map((p) => p.category)).size}</p>
              </div>
              <TrendingUp className="text-purple-600 opacity-30" size={40} />
            </div>
          </motion.div>
        </div>

        {/* Search & Add Button */}
        <div className="flex gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-3.5 text-agri-earth-400" size={20} />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border-2 border-agri-earth-200 rounded-lg focus:border-agri-green-600 focus:outline-none"
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowAddForm(!showAddForm)}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-agri-green-600 to-agri-green-700 text-white font-bold rounded-lg hover:shadow-lg transition-all"
          >
            <Plus size={20} />
            Add Product
          </motion.button>
        </div>

        {/* Add Product Form */}
        {showAddForm && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="bg-white rounded-xl p-6 border-2 border-agri-green-200 mb-6"
          >
            <h3 className="text-lg font-bold text-agri-earth-900 mb-4">Add New Product</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              <input
                type="text"
                placeholder="Product ID"
                value={newProduct.product_id || ''}
                onChange={(e) => setNewProduct({ ...newProduct, product_id: e.target.value })}
                className="px-4 py-2 border-2 border-agri-earth-200 rounded-lg focus:border-agri-green-600 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Product Name"
                value={newProduct.name || ''}
                onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                className="px-4 py-2 border-2 border-agri-earth-200 rounded-lg focus:border-agri-green-600 focus:outline-none"
              />
              <input
                type="number"
                placeholder="Price"
                value={newProduct.price || 0}
                onChange={(e) => setNewProduct({ ...newProduct, price: Number(e.target.value) })}
                className="px-4 py-2 border-2 border-agri-earth-200 rounded-lg focus:border-agri-green-600 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Unit (kg, piece, etc)"
                value={newProduct.unit || 'kg'}
                onChange={(e) => setNewProduct({ ...newProduct, unit: e.target.value })}
                className="px-4 py-2 border-2 border-agri-earth-200 rounded-lg focus:border-agri-green-600 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Category"
                value={newProduct.category || ''}
                onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                className="px-4 py-2 border-2 border-agri-earth-200 rounded-lg focus:border-agri-green-600 focus:outline-none"
              />
            </div>
            <div className="flex gap-3 mt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleAddProduct}
                className="flex-1 px-4 py-2 bg-agri-green-600 text-white font-bold rounded-lg hover:bg-agri-green-700 transition-colors"
              >
                Save Product
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowAddForm(false)}
                className="px-4 py-2 bg-agri-earth-200 text-agri-earth-900 font-bold rounded-lg hover:bg-agri-earth-300 transition-colors"
              >
                Cancel
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* Products Table */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white rounded-xl overflow-hidden shadow-lg border border-agri-earth-200">
          {loading ? (
            <div className="p-12 text-center">
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity }} className="inline-block">
                <Package className="text-agri-green-600" size={40} />
              </motion.div>
              <p className="text-agri-earth-600 mt-4">Loading products...</p>
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="p-12 text-center">
              <Package className="text-agri-earth-300 mx-auto" size={40} />
              <p className="text-agri-earth-600 mt-4">No products found</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-agri-green-50 to-agri-earth-50 border-b">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold text-agri-earth-900">Product ID</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-agri-earth-900">Name</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-agri-earth-900">Category</th>
                    <th className="px-6 py-4 text-right text-sm font-bold text-agri-earth-900">Price</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-agri-earth-900">Unit</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-agri-earth-900">Demand</th>
                    <th className="px-6 py-4 text-right text-sm font-bold text-agri-earth-900">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {filteredProducts.map((product, idx) => (
                    <motion.tr
                      key={product.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="hover:bg-agri-green-50 transition-colors"
                    >
                      <td className="px-6 py-4 text-sm font-mono text-agri-earth-700">{product.product_id}</td>
                      <td className="px-6 py-4">
                        {editingId === product.id ? (
                          <input
                            type="text"
                            value={editData.name || product.name}
                            onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                            className="px-3 py-1 border rounded w-full"
                          />
                        ) : (
                          <span className="font-semibold text-agri-earth-900">{product.name}</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-sm text-agri-earth-600">{product.category || '-'}</td>
                      <td className="px-6 py-4 text-right">
                        {editingId === product.id ? (
                          <input
                            type="number"
                            value={editData.price || product.price}
                            onChange={(e) => setEditData({ ...editData, price: Number(e.target.value) })}
                            className="px-3 py-1 border rounded w-24 text-right"
                          />
                        ) : (
                          <span className="font-bold text-agri-green-600 text-lg">₹{product.price}</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-sm text-agri-earth-600">{product.unit}</td>
                      <td className="px-6 py-4">
                        <span
                          className={`text-xs font-bold px-3 py-1 rounded-full ${
                            product.demand === 'Very High'
                              ? 'bg-red-100 text-red-700'
                              : product.demand === 'High'
                              ? 'bg-orange-100 text-orange-700'
                              : product.demand === 'Medium'
                              ? 'bg-yellow-100 text-yellow-700'
                              : 'bg-gray-100 text-gray-700'
                          }`}
                        >
                          {product.demand || 'N/A'}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right space-x-2 flex justify-end gap-2">
                        {editingId === product.id ? (
                          <>
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => handleUpdateProduct(product.id!)}
                              className="px-3 py-1 bg-green-600 text-white rounded font-semibold text-sm hover:bg-green-700"
                            >
                              Save
                            </motion.button>
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => setEditingId(null)}
                              className="px-3 py-1 bg-gray-400 text-white rounded font-semibold text-sm hover:bg-gray-500"
                            >
                              Cancel
                            </motion.button>
                          </>
                        ) : (
                          <>
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => {
                                setEditingId(product.id!);
                                setEditData(product);
                              }}
                              className="p-2 bg-blue-100 text-blue-600 rounded hover:bg-blue-200 transition-colors"
                            >
                              <Edit2 size={16} />
                            </motion.button>
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => handleDeleteProduct(product.id!)}
                              className="p-2 bg-red-100 text-red-600 rounded hover:bg-red-200 transition-colors"
                            >
                              <Trash2 size={16} />
                            </motion.button>
                          </>
                        )}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};
