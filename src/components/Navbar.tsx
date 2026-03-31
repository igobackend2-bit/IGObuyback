import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { Sprout, Menu, X, ChevronDown } from 'lucide-react';
import { LanguageToggle } from './LanguageToggle';
import { useI18n } from '../lib/i18n';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isLogoMissing, setIsLogoMissing] = useState(false);
  const location = useLocation();
  const { t } = useI18n();
  const isHome = location.pathname === '/';

  const { scrollY } = useScroll();
  const navOpacity = useTransform(scrollY, [0, 100], [0.95, 1]);
  const navBlur = useTransform(scrollY, [0, 100], [0, 8]);

  const navLinks = [
    { label: t('nav_home'), to: '/' },
    { label: t('nav_market'), to: '/market' },
    { label: t('nav_earn_rewards'), to: '/referrals' },
    { label: t('nav_contact'), to: '/contact' },
  ];

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setIsMobileOpen(false); }, [location]);

  const navBg = isHome
    ? isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-agri-earth-100/50' : 'bg-transparent'
    : 'bg-white/95 backdrop-blur-md border-b border-agri-earth-100/50 shadow-sm';

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}
      style={{
        opacity: navOpacity,
        backdropFilter: `blur(${navBlur}px)`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Enhanced new logo (logo-royal.svg replaced with inline branded SVG) */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Link to="/" className="flex items-center gap-3 shrink-0 group">
            <motion.div
              className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center border border-white/30 shadow-lg"
              whileHover={{ rotate: 6, scale: 1.08 }}
              transition={{ type: 'spring', stiffness: 280 }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 6H5L8.68 14.39C8.86 14.85 9.27 15.16 9.77 15.19L19.4 15.88C19.92 15.92 20.36 15.56 20.46 15.04L21.72 10.15C21.78 9.83 21.64 9.51 21.34 9.34C21.04 9.16 20.68 9.17 20.39 9.36L9.47 15.05L8.53 12H17.5C17.78 12 18 11.78 18 11.5C18 11.22 17.78 11 17.5 11H8.12L7.2 8H20.5C20.78 8 21 7.78 21 7.5C21 7.22 20.78 7 20.5 7H6.21L5.27 4.5C5.13 4.05 4.7 3.75 4.23 3.75H3C2.45 3.75 2 4.2 2 4.75C2 5.3 2.45 5.75 3 5.75V6ZM7 20C5.9 20 5 19.1 5 18C5 16.9 5.9 16 7 16C8.1 16 9 16.9 9 18C9 19.1 8.1 20 7 20ZM17 20C15.9 20 15 19.1 15 18C15 16.9 15.9 16 17 16C18.1 16 19 16.9 19 18C19 19.1 18.1 20 17 20Z" fill="white"/>
                <path d="M14.2 4.5C12.76 4.5 11.44 5.15 10.5 6.29C10.18 6.69 10 7.2 10 7.74C10 8.68 10.66 9.5 11.59 9.83L12 10.02L12.41 9.83C13.34 9.5 14 8.67 14 7.74C14 6.82 13.2 6.08 12.3 5.82C12.14 5.77 11.99 5.75 11.84 5.75C11.77 5.75 11.71 5.75 11.64 5.76C11.17 5.8 10.75 5.59 10.45 5.23C10.15 4.86 10.03 4.4 10.12 3.96C10.22 3.5 10.52 3.13 10.94 2.96C11.5 2.73 12.21 2.84 12.72 3.22C13.26 3.64 13.56 4.33 13.46 5.06C13.41 5.46 13.28 5.83 13.08 6.15C13.41 6.05 13.73 5.92 14.02 5.77C14.67 5.43 15.06 4.8 15.06 4.12C15.06 3.22 14.35 2.5 13.45 2.5C12.55 2.5 11.83 3.2 11.83 4.1C11.83 4.22 11.84 4.34 11.86 4.45C11.2 4.25 10.45 4.35 9.9 4.65C9.54 4.85 9.16 5.14 8.81 5.49C8.57 5.74 8.42 6.1 8.42 6.47C8.42 7.33 9.09 8.04 9.95 8.06C10.3 8.06 10.63 7.92 10.9 7.68C11.37 7.25 11.61 6.69 11.59 6.11C11.59 5.64 11.44 5.23 11.17 4.91C11.41 4.93 11.66 4.94 11.9 4.97C12.49 5.05 13.06 4.92 13.54 4.61C13.86 4.39 14.11 4.1 14.28 3.75C14.43 4.04 14.35 4.39 14.12 4.61C13.87 4.84 13.51 4.94 13.15 4.88C13.04 4.7 13 4.5 13 4.3C13 4.17 13.01 4.03 13.04 3.9C13.17 4.17 13.36 4.41 13.59 4.62C13.85 4.88 14.13 5.1 14.42 5.26C14.5 4.99 14.48 4.7 14.37 4.45C14.21 4.24 13.94 4.14 13.67 4.16C13.75 4.16 13.83 4.18 13.92 4.22C14.07 4.29 14.16 4.43 14.16 4.58C14.16 4.68 14.13 4.78 14.08 4.86C14.04 4.95 14 5.03 13.93 5.09C13.95 4.95 14.01 4.82 14.09 4.7C14.13 4.64 14.17 4.57 14.2 4.5Z" fill="#BBF7D0"/>
              </svg>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
            >
              <div className="text-base font-black tracking-tight text-slate-900 leading-none">IGO FARMGATE</div>
              <div className="text-xs font-semibold text-agri-earth-700 leading-none uppercase">MANDI</div>
            </motion.div>
          </Link>
        </motion.div>

        {/* Enhanced Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 flex-1 justify-center">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.to}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={link.to}
                className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 whitespace-nowrap group ${
                  location.pathname === link.to
                    ? 'text-agri-green-700 bg-agri-green-50 shadow-sm'
                    : 'text-agri-earth-600 hover:text-agri-green-700 hover:bg-agri-green-50/80'
                }`}
              >
                <span className="relative z-10">{link.label}</span>
                {location.pathname === link.to && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute inset-0 bg-agri-green-50 rounded-xl"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <motion.div
                  className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-agri-green-600 group-hover:w-full group-hover:left-0 transition-all duration-300"
                  whileHover={{ width: '100%', left: 0 }}
                />
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Enhanced Right side */}
        <div className="hidden md:flex items-center gap-3">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <LanguageToggle />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/settings"
              className="px-3 py-2 rounded-xl text-sm font-medium text-agri-earth-600 hover:text-agri-green-700 hover:bg-agri-green-50 transition-all duration-300 flex items-center gap-1 group"
            >
              {t('nav_settings')}
              <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/sell"
              className="btn-secondary py-2 px-4 text-sm hover:shadow-lg transition-all duration-300"
            >
              {t('nav_sell')}
            </Link>
          </motion.div>
        </div>

        {/* Enhanced Mobile toggle */}
        <motion.button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="md:hidden p-2 rounded-xl text-agri-earth-600 hover:bg-agri-earth-100 hover:text-agri-green-700 transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            animate={{ rotate: isMobileOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
          </motion.div>
        </motion.button>
      </div>

      {/* Enhanced Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-white/95 backdrop-blur-md border-t border-agri-earth-100/50 overflow-hidden shadow-lg"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={link.to}
                    className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                      location.pathname === link.to
                        ? 'text-agri-green-700 bg-agri-green-50 shadow-sm'
                        : 'text-agri-earth-700 hover:bg-agri-green-50 hover:text-agri-green-700'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                className="pt-3 pb-1"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <LanguageToggle />
              </motion.div>
              <motion.div
                className="grid grid-cols-2 gap-2 pt-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    to="/sell"
                    className="btn-secondary py-2.5 text-sm text-center block hover:shadow-md transition-all duration-300"
                  >
                    {t('nav_sell')}
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
