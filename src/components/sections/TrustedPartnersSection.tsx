import { motion } from 'motion/react';
import { Award } from 'lucide-react';

/* ── Real inline SVG brand logos ── */
const ZeptoLogo = () => (
  <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-24 h-8">
    <rect width="120" height="40" rx="4" fill="#7C3AED"/>
    <text x="14" y="28" fontFamily="Arial Black, Arial, sans-serif" fontSize="22" fontWeight="900" fill="white">Zepto</text>
    <circle cx="106" cy="12" r="8" fill="#A78BFA"/>
    <path d="M102 12 L106 8 L110 12 L106 16Z" fill="white"/>
  </svg>
);

const BlinkitLogo = () => (
  <svg viewBox="0 0 130 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-28 h-8">
    <rect width="130" height="40" rx="4" fill="#F8D90C"/>
    <text x="10" y="28" fontFamily="Arial Black, Arial, sans-serif" fontSize="21" fontWeight="900" fill="#1a1a1a">blinkit</text>
    <path d="M108 20 L116 10 L124 20 L116 30Z" fill="#1a1a1a" opacity="0.7"/>
  </svg>
);

const InstamrtLogo = () => (
  <svg viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-32 h-8">
    <rect width="160" height="40" rx="4" fill="#FC8019"/>
    <text x="8" y="27" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="700" fill="white">Swiggy</text>
    <text x="8" y="38" fontFamily="Arial, sans-serif" fontSize="11" fontWeight="900" fill="white" letterSpacing="1">INSTAMART</text>
    <circle cx="145" cy="20" r="10" fill="white" opacity="0.15"/>
    <path d="M141 20 Q145 13 149 20 Q145 27 141 20Z" fill="white" opacity="0.5"/>
  </svg>
);

const BigBasketLogo = () => (
  <svg viewBox="0 0 150 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-32 h-8">
    <rect width="150" height="40" rx="4" fill="#84C225"/>
    <text x="8" y="27" fontFamily="Arial Black, Arial, sans-serif" fontSize="16" fontWeight="900" fill="white">bigbasket</text>
    <rect x="130" y="8" width="14" height="24" rx="3" fill="white" opacity="0.2"/>
    <path d="M133 15 L143 15 L141 28 L135 28Z" fill="white" opacity="0.4"/>
  </svg>
);

const DMartLogo = () => (
  <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-24 h-8">
    <rect width="120" height="40" rx="4" fill="#1B4AA0"/>
    <text x="12" y="28" fontFamily="Arial Black, Arial, sans-serif" fontSize="22" fontWeight="900" fill="white">DMart</text>
  </svg>
);

const TajLogo = () => (
  <svg viewBox="0 0 140 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-28 h-10">
    <rect width="140" height="50" rx="4" fill="#1a1008"/>
    {/* Arch */}
    <path d="M55 38 Q70 12 85 38" stroke="#C9A84C" strokeWidth="2.5" fill="none"/>
    <path d="M60 38 Q70 18 80 38" fill="#C9A84C" fillOpacity="0.15"/>
    {/* Dome */}
    <circle cx="70" cy="14" r="5" fill="#C9A84C"/>
    {/* Columns */}
    <rect x="55" y="30" width="3" height="10" fill="#C9A84C" rx="1"/>
    <rect x="82" y="30" width="3" height="10" fill="#C9A84C" rx="1"/>
    {/* Text */}
    <text x="70" y="47" fontFamily="Georgia, serif" fontSize="11" fontWeight="700" fill="#C9A84C" textAnchor="middle" letterSpacing="3">TAJ</text>
  </svg>
);

const FarmerFactoryLogo = () => (
  <svg viewBox="0 0 160 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-36 h-10">
    <rect width="160" height="44" rx="6" fill="#14532d"/>
    <text x="34" y="28" fontFamily="Arial Black, Arial, sans-serif" fontSize="13" fontWeight="900" fill="white">Farmers Factory</text>
    <text x="14" y="30" fontSize="18">🌾</text>
  </svg>
);

const PARTNERS = [
  { name: 'Zepto', Logo: ZeptoLogo, tagline: 'Quick commerce' },
  { name: 'Blinkit', Logo: BlinkitLogo, tagline: '10-min delivery' },
  { name: 'Swiggy Instamart', Logo: InstamrtLogo, tagline: 'Grocery delivery' },
  { name: 'BigBasket', Logo: BigBasketLogo, tagline: 'Online grocery' },
  { name: 'DMart', Logo: DMartLogo, tagline: 'Retail chain' },
  { name: 'Taj Hotels', Logo: TajLogo, tagline: 'Royal hospitality' },
];

export const TrustedPartnersSection = () => (
  <section className="py-20 bg-gray-950 text-white overflow-hidden" id="partners">
    {/* Subtle green glow */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-green-600/8 rounded-full blur-3xl" />
    </div>

    <div className="relative max-w-7xl mx-auto px-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-lime-500/10 border border-lime-500/30 rounded-full text-lime-400 text-sm font-semibold mb-4">
          <Award size={15} />
          Our Buyer Partners
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-white mb-3">
          Our Buyer Partners &{' '}
          <span className="text-lime-400">Royal Brands</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-base">
          Your produce reaches India's top retailers, quick-commerce platforms, and luxury hotel chains — directly, transparently.
        </p>
      </motion.div>

      {/* Partner Logo Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5 mb-14">
        {PARTNERS.map((p, idx) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08 }}
            whileHover={{ scale: 1.06, y: -4 }}
            className="flex flex-col items-center gap-3 p-5 bg-white/5 border border-white/8 rounded-2xl hover:bg-white/10 hover:border-lime-500/30 transition-all cursor-default"
          >
            <p.Logo />
            <span className="text-xs text-gray-500 font-medium text-center">{p.tagline}</span>
          </motion.div>
        ))}
      </div>

      {/* Farmer Network */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-green-900/30 border border-green-800/50 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6"
      >
        <div className="flex items-center gap-5">
          <FarmerFactoryLogo />
          <div>
            <p className="font-bold text-white text-lg">Farmers Factory</p>
            <p className="text-sm text-gray-400">Direct farmer collective partnership · FPO network integration</p>
          </div>
        </div>
        <div className="text-center md:text-right">
          <p className="text-2xl font-black text-lime-400">1,200+</p>
          <p className="text-xs text-gray-500 font-medium">Partner Farmers India-wide</p>
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-8 text-center text-sm text-gray-600"
      >
        Partnered with trusted F&amp;B buyers, retailers, and farmer networks for consistent, large-volume market demand across India.
      </motion.p>
    </div>
  </section>
);
