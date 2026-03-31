import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Sprout, Phone, Mail, MapPin, ArrowRight, Instagram, Facebook, Youtube, Heart, Star } from 'lucide-react';

export const Footer = () => (
  <footer className="bg-agri-earth-900 text-white relative overflow-hidden">
    {/* Background Pattern */}
    <div className="absolute inset-0 opacity-5">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.1),transparent_50%)]" />
      <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(34,197,94,0.1),transparent_50%)]" />
    </div>

    <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        {/* Enhanced Brand Section */}
        <motion.div
          className="space-y-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              className="w-9 h-9 bg-agri-green-600 rounded-xl flex items-center justify-center"
              whileHover={{ rotate: 5, scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Sprout size={18} className="text-white" />
            </motion.div>
            <span className="font-black text-lg tracking-tight">IGO GROUPS</span>
          </motion.div>
          <p className="text-agri-earth-400 text-sm leading-relaxed">
            Empowering farmers through guaranteed buyback, fair pricing, and technology-driven logistics across Tamil Nadu.
          </p>
          <div className="flex gap-3">
            {[
              { icon: <Facebook size={16} />, href: '#', color: 'hover:bg-blue-600' },
              { icon: <Instagram size={16} />, href: '#', color: 'hover:bg-pink-600' },
              { icon: <Youtube size={16} />, href: '#', color: 'hover:bg-red-600' },
            ].map((s, i) => (
              <motion.a
                key={i}
                href={s.href}
                className={`w-9 h-9 bg-white/10 ${s.color} rounded-xl flex items-center justify-center transition-all duration-300`}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                {s.icon}
              </motion.a>
            ))}
          </div>
          {/* Trust Indicators */}
          <motion.div
            className="flex items-center gap-2 text-xs text-agri-earth-500"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Heart size={12} className="text-red-400" />
            <span>Made with love for Indian farmers</span>
          </motion.div>
        </motion.div>

        {/* Enhanced Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h4 className="font-bold mb-5 text-sm uppercase tracking-widest text-agri-earth-400">Platform</h4>
          <ul className="space-y-3">
            {[
              { label: 'Sell Your Harvest', to: '/sell' },
              { label: 'Buy Fresh Produce', to: '/buy' },
              { label: 'Market Prices', to: '/market' },
              { label: 'Buyback Programs', to: '/#how-it-works' },
              { label: 'Contact Us', to: '/contact' },
            ].map((l, i) => (
              <motion.li
                key={l.label}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.05 }}
              >
                <Link
                  to={l.to}
                  className="text-sm text-agri-earth-400 hover:text-agri-green-400 transition-all duration-300 flex items-center gap-2 group"
                >
                  <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-300" />
                  <span className="group-hover:underline decoration-agri-green-400 decoration-1 underline-offset-2">
                    {l.label}
                  </span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Enhanced Products */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h4 className="font-bold mb-5 text-sm uppercase tracking-widest text-agri-earth-400">Products</h4>
          <ul className="space-y-3">
            {['Cucumber', 'Oyster Mushroom', 'Microgreens', 'Button Mushroom', 'Exotic Vegetables', 'Agri-Inputs'].map((p, i) => (
              <motion.li
                key={p}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.05 }}
                className="text-sm text-agri-earth-400 hover:text-agri-green-400 transition-all duration-300 flex items-center gap-2 cursor-pointer group"
              >
                <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-300" />
                <span className="group-hover:underline decoration-agri-green-400 decoration-1 underline-offset-2">
                  {p}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Enhanced Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h4 className="font-bold mb-5 text-sm uppercase tracking-widest text-agri-earth-400">Contact</h4>
          <ul className="space-y-4">
            <motion.li
              className="flex items-start gap-3"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <MapPin size={16} className="text-agri-green-500 mt-0.5 shrink-0" />
              <span className="text-sm text-agri-earth-400">IGO Agritech Farms, Tamil Nadu, India</span>
            </motion.li>
            <motion.li
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
            >
              <Phone size={16} className="text-agri-green-500 shrink-0" />
              <a
                href="tel:+919999999999"
                className="text-sm text-agri-earth-400 hover:text-agri-green-400 transition-colors hover:underline decoration-agri-green-400 decoration-1 underline-offset-2"
              >
                +91 99999 99999
              </a>
            </motion.li>
            <motion.li
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Mail size={16} className="text-agri-green-500 shrink-0" />
              <a
                href="mailto:info@igoagritech.com"
                className="text-sm text-agri-earth-400 hover:text-agri-green-400 transition-colors hover:underline decoration-agri-green-400 decoration-1 underline-offset-2"
              >
                info@igoagritech.com
              </a>
            </motion.li>
          </ul>
          {/* Enhanced WhatsApp CTA */}
        </motion.div>
      </div>

      {/* Enhanced Bottom Section */}
      <motion.div
        className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-agri-earth-500"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="flex items-center gap-2">
          <span>© 2026 IGO Agritech Farms. All Rights Reserved.</span>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Heart size={10} className="text-red-400" />
          </motion.div>
        </div>
        <div className="flex gap-6">
          {[
            { label: 'Privacy Policy', href: '#' },
            { label: 'Terms of Service', href: '#' },
            { label: 'Sitemap', href: '#' },
          ].map((link, i) => (
            <motion.span
              key={link.label}
              className="hover:text-agri-green-400 transition-colors cursor-pointer hover:underline decoration-agri-green-400 decoration-1 underline-offset-2"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + i * 0.1 }}
            >
              {link.label}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* Rating Badge */}
      <motion.div
        className="mt-8 flex justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 flex items-center gap-2">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={12} fill="#fbbf24" className="text-yellow-400" />
            ))}
          </div>
          <span className="text-xs text-agri-earth-400 font-medium">4.9/5 from 800+ farmers</span>
        </div>
      </motion.div>
    </div>
  </footer>
);
