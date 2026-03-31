import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import {
  ArrowRight,
  ShieldCheck,
  Star,
  Zap,
  Leaf,
  TrendingUp,
  CheckCircle2,
  Truck,
  Clock,
  Users,
  Award,
  Globe,
} from 'lucide-react';

/**
 * Hero Section - Ultra-enhanced with advanced animations, better UX, and premium design
 */
export const HeroSection = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, 50]);
  const opacity = useTransform(scrollY, [0, 200], [1, 0.8]);

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Enhanced gradient background with parallax */}
      <motion.div className="absolute inset-0 z-0" style={{ y: y1, opacity }}>
        <div className="absolute inset-0 bg-gradient-to-br from-agri-earth-50 via-white to-agri-green-50" />
        {/* Animated background elements with improved motion */}
        <motion.div
          animate={{
            x: [0, 120, 0],
            y: [0, 60, 0],
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-agri-green-200 to-agri-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 80, 0],
            scale: [1, 0.9, 1],
            rotate: [0, -3, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
          className="absolute -bottom-32 -left-40 w-96 h-96 bg-gradient-to-br from-agri-earth-300 to-agri-earth-200 rounded-full mix-blend-multiply filter blur-3xl opacity-35"
        />
        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -40, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full mix-blend-multiply filter blur-2xl opacity-25"
        />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="space-y-8"
          >
            {/* Enhanced animated badge */}
            <motion.div
              initial={{ opacity: 0, y: -30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1, type: 'spring', stiffness: 100 }}
              className="badge-green w-fit flex items-center gap-2"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                className="inline-block"
              >
                <ShieldCheck size={16} />
              </motion.div>
              <span className="font-semibold">Trusted by 1,200+ Farmers · Tamil Nadu</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 bg-green-400 rounded-full"
              />
            </motion.div>

            {/* Main headline with enhanced animation */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-6xl xl:text-7xl font-black text-agri-earth-900 leading-[0.95] tracking-tighter"
              >
                Best Price.<br />
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-gradient-to-r from-agri-green-600 via-agri-green-500 to-emerald-500 bg-clip-text text-transparent"
                >
                  Fast Payment.
                </motion.span>
                <br />
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-agri-earth-800"
                >
                  Zero Middlemen.
                </motion.span>
              </motion.h1>
            </div>

            {/* Enhanced subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg text-agri-earth-600 max-w-2xl leading-relaxed font-medium"
            >
              Sell your produce from any farm, FPO, aggregator or seller to our mandi with live rate discovery, Grade-A certification, and guaranteed fast settlement. We don't pickup ourselves; we connect you to trusted logistics partners.
            </motion.p>

            {/* Special announcement */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200 rounded-xl p-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
                  <Zap size={16} className="text-white" />
                </div>
                <div>
                  <p className="font-bold text-amber-800">26 Product Verticals Covered</p>
                  <p className="text-sm text-amber-700">Vegetables, Fruits, Microgreens, Spices, Dry Fruits, Honey & more</p>
                </div>
              </div>
            </motion.div>

            {/* Enhanced CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/sell"
                  className="btn-primary text-base px-8 py-4 hover:shadow-2xl transition-all hover:scale-105 flex items-center gap-2 group"
                >
                  <span>Start Selling</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/catalog"
                  className="btn-secondary text-base px-8 py-4 hover:shadow-lg transition-all hover:scale-105 flex items-center gap-2 group"
                >
                  <Leaf size={18} className="group-hover:rotate-12 transition-transform" />
                  <span>Browse Products</span>
                </Link>
              </motion.div>
            </motion.div>

            {/* Enhanced Key Benefits Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-agri-earth-200"
            >
              {[
                { icon: <Clock size={20} />, title: '7 Days', sub: 'Payment', color: 'text-blue-600' },
                { icon: <CheckCircle2 size={20} />, title: 'Best Price', sub: 'Guaranteed', color: 'text-green-600' },
                { icon: <Truck size={20} />, title: 'Smart Logistics', sub: 'Reliable Transport', color: 'text-purple-600' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="group cursor-pointer"
                >
                  <div className="space-y-2">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-white to-gray-50 flex items-center justify-center border border-gray-200 group-hover:shadow-lg transition-all ${item.color}`}>
                      {item.icon}
                    </div>
                    <p className="font-bold text-agri-earth-900 group-hover:text-agri-green-700 transition-colors">{item.title}</p>
                    <p className="text-sm text-agri-earth-600">{item.sub}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Enhanced Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center gap-6"
            >
              <div className="flex -space-x-2">
                {['🌾', '🥕', '🍅', '🌱', '🍎'].map((emoji, i) => (
                  <motion.div
                    key={`avatar-${i}`}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.6 + i * 0.1, type: 'spring', stiffness: 200 }}
                    className="w-10 h-10 rounded-full bg-agri-green-600 border-3 border-white flex items-center justify-center text-base font-bold shadow-lg"
                  >
                    {emoji}
                  </motion.div>
                ))}
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={`star-${i}`}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.7 + i * 0.05 }}
                    >
                      <Star key={`star-${i}`} size={16} fill="#16a34a" className="text-agri-green-600" />
                    </motion.div>
                  ))}
                  <span className="font-bold text-agri-earth-900">4.9/5</span>
                </div>
                <p className="text-xs text-agri-earth-600 font-medium">800+ verified farmer reviews</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Enhanced Visual Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Main Showcase Card with enhanced animations */}
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [0, 1, 0, -1, 0]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-agri-green-600/20 to-agri-earth-200/20 rounded-3xl blur-2xl" />
              <div className="relative card overflow-hidden bg-gradient-to-br from-white to-agri-green-50 p-8">
                <div className="space-y-6">
                  {/* Enhanced Stats Section */}
                  <div className="space-y-4">
                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-2xl font-black text-agri-earth-900 flex items-center gap-2"
                    >
                      <Award size={24} className="text-agri-green-600" />
                      Trusted by Farmers
                    </motion.h3>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { value: '₹4.5 Cr', label: 'Paid Out', icon: <TrendingUp size={16} /> },
                        { value: '1,200+', label: 'Farmers', icon: <Users size={16} /> },
                        { value: '24/7', label: 'Support', icon: <Globe size={16} /> },
                        { value: '7 Days', label: 'Payment', icon: <Clock size={16} /> },
                      ].map((stat, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 10, scale: 0.9 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          transition={{ delay: 0.5 + i * 0.1, type: 'spring', stiffness: 150 }}
                          whileHover={{ scale: 1.05 }}
                          className="bg-gradient-to-br from-agri-green-50 to-agri-earth-50 rounded-lg p-4 text-center border border-agri-green-200 hover:shadow-lg transition-all cursor-pointer"
                        >
                          <div className="flex items-center justify-center mb-2">
                            <div className="text-agri-green-600">{stat.icon}</div>
                          </div>
                          <p className="text-2xl font-black text-agri-green-600">{stat.value}</p>
                          <p className="text-xs font-semibold text-agri-earth-600 mt-1">{stat.label}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Enhanced How It Works Quick */}
                  <div className="space-y-3 pt-4 border-t border-agri-earth-200">
                    <p className="text-sm font-bold text-agri-earth-900 flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-agri-green-600" />
                      Simple Process
                    </p>
                    {[
                      { step: '1', text: 'Register your farm', icon: '📝' },
                      { step: '2', text: 'List your harvest', icon: '📦' },
                      { step: '3', text: 'Get fair price guarantee', icon: '💰' },
                      { step: '4', text: 'Payment in 7 days', icon: '🚚' },
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + i * 0.08 }}
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-3 group cursor-pointer"
                      >
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-agri-green-600 text-white text-xs font-bold flex items-center justify-center group-hover:scale-110 transition-transform">
                          {item.step}
                        </div>
                        <span className="text-sm text-agri-earth-700 font-medium group-hover:text-agri-green-700 transition-colors">{item.icon} {item.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Enhanced Product Categories Preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="card p-6"
            >
              <p className="text-sm font-bold text-agri-earth-900 mb-3 flex items-center gap-2">
                <Leaf size={16} className="text-agri-green-600" />
                We Buy From
              </p>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { emoji: '🥬', label: 'Vegetables', color: 'from-green-100 to-green-50' },
                  { emoji: '🍎', label: 'Fruits', color: 'from-red-100 to-red-50' },
                  { emoji: '🌾', label: 'Grains', color: 'from-yellow-100 to-yellow-50' },
                ].map((cat, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`text-center p-3 rounded-lg bg-gradient-to-br ${cat.color} border border-agri-green-200 cursor-pointer hover:shadow-md transition-all`}
                  >
                    <p className="text-2xl mb-1">{cat.emoji}</p>
                    <p className="text-xs font-semibold text-agri-earth-700">{cat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};