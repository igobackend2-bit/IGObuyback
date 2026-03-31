import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { LogIn, Eye, EyeOff, AlertCircle } from 'lucide-react';
import { useAdminAuth } from '../contexts/AdminAuthContext';

export const AdminLogin = () => {
  const navigate = useNavigate();
  const { login, loading, error: authError } = useAdminAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please enter email and password');
      return;
    }

    try {
      await login(email, password);
      navigate('/admin/products');
    } catch (err: any) {
      setError(err.message || 'Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-agri-green-900 via-agri-earth-900 to-black flex items-center justify-center px-4 pt-20">
      {/* Background Elements */}
      <motion.div className="absolute inset-0 z-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <div className="absolute inset-0 bg-gradient-to-br from-agri-green-900/30 via-transparent to-agri-earth-900/30" />
        <motion.div
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-agri-green-600/20 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-agri-earth-600/20 to-transparent rounded-full blur-3xl"
        />
      </motion.div>

      {/* Login Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-md"
      >
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-agri-green-600 to-agri-green-700 px-8 py-8 text-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              className="inline-block mb-3"
            >
              <LogIn size={32} className="text-white" />
            </motion.div>
            <h1 className="text-3xl font-black text-white">Admin Login</h1>
            <p className="text-agri-green-100 text-sm mt-2">Manage products & prices</p>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="px-8 py-8 space-y-6">
            {/* Error Alert */}
            {(error || authError) && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-50 border border-red-200 rounded-lg p-4 flex gap-3"
              >
                <AlertCircle className="text-red-600 flex-shrink-0" size={20} />
                <div>
                  <p className="font-semibold text-red-900">{error || authError}</p>
                  <p className="text-xs text-red-700 mt-1">
                    Demo credentials: admin@igo.com / admin123
                  </p>
                </div>
              </motion.div>
            )}

            {/* Email Input */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
              <label className="block text-sm font-semibold text-agri-earth-900 mb-2">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@igo.com"
                className="w-full px-4 py-3 border-2 border-agri-earth-200 rounded-lg focus:border-agri-green-600 focus:outline-none transition-colors"
              />
            </motion.div>

            {/* Password Input */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              <label className="block text-sm font-semibold text-agri-earth-900 mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 border-2 border-agri-earth-200 rounded-lg focus:border-agri-green-600 focus:outline-none transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-3.5 text-agri-earth-600 hover:text-agri-green-600"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </motion.div>

            {/* Submit Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-agri-green-600 to-agri-green-700 text-white font-bold py-3 rounded-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity }}>
                    <LogIn size={18} />
                  </motion.div>
                  Signing in...
                </>
              ) : (
                <>
                  <LogIn size={18} />
                  Sign In
                </>
              )}
            </motion.button>

            {/* Help Text */}
            <div className="bg-agri-green-50 rounded-lg p-4 text-center">
              <p className="text-xs text-agri-earth-600">
                <strong>Demo Account:</strong><br/>
                Email: admin@igo.com<br/>
                Password: admin123
              </p>
            </div>
          </form>

          {/* Footer */}
          <div className="bg-agri-earth-50 px-8 py-6 text-center border-t">
            <p className="text-sm text-agri-earth-600">
              Need help?{' '}
              <Link to="/contact" className="text-agri-green-600 font-semibold hover:underline">
                Contact us
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
