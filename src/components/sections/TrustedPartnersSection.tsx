import { motion } from 'motion/react';
import { Award, Users, ShoppingBag } from 'lucide-react';

/* ══════════════════════════════════════════════════════
   Partner brand logos — using uploaded images
   ══════════════════════════════════════════════════════ */

/** Farmers Factory logo component */
const FarmerFactoryLogo = () => (
  <img src="/partners/farmers-factory.jpg" alt="Farmers Factory" className="w-56 h-20 object-contain" />
);

/** Zepto logo component */
const ZeptoLogo = () => (
  <img src="/partners/zepto.jpg" alt="Zepto" className="w-32 h-11 object-contain" />
);

/** Blinkit logo component */
const BlinkitLogo = () => (
  <img src="/partners/blinkit.jpg" alt="Blinkit" className="w-32 h-11 object-contain" />
);

/** Instamart logo component */
const InstamrtLogo = () => (
  <img src="/partners/instamart.jpg" alt="Instamart" className="w-24 h-24 object-contain" />
);

/** bigbasket logo component */
const BigBasketLogo = () => (
  <img src="/partners/bigbasket.jpg" alt="BigBasket" className="w-40 h-14 object-contain" />
);

/** DMart logo component */
const DMartLogo = () => (
  <img src="/partners/dmart.jpg" alt="DMart" className="w-36 h-14 object-contain" />
);

/** TAJ logo component */
const TajLogo = () => (
  <img src="/partners/taj.jpg" alt="TAJ" className="w-32 h-20 object-contain" />
);

/* ══════════════════════════════════════════════════════
   Partner data — FARMERS FACTORY FIRST
   ══════════════════════════════════════════════════════ */
const PARTNERS = [
  { name: 'Zepto',           Logo: ZeptoLogo,      tagline: 'Quick commerce'     },
  { name: 'Blinkit',         Logo: BlinkitLogo,    tagline: '10-min delivery'    },
  { name: 'Swiggy Instamart',Logo: InstamrtLogo,   tagline: 'Grocery delivery'   },
  { name: 'bigbasket',       Logo: BigBasketLogo,  tagline: 'Online grocery'     },
  { name: 'DMart',           Logo: DMartLogo,      tagline: 'Retail chain'       },
  { name: 'TAJ',             Logo: TajLogo,        tagline: 'Royal hospitality'  },
];

/* ══════════════════════════════════════════════════════
   Section
   ══════════════════════════════════════════════════════ */
export const TrustedPartnersSection = () => (
  <section className="py-20 bg-gray-950 text-white overflow-hidden relative" id="partners">
    {/* Glow */}
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-green-600/5 rounded-full blur-3xl" />
    </div>

    <div className="relative max-w-7xl mx-auto px-6">

      {/* ── Section Header ── */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-lime-500/10 border border-lime-500/30 rounded-full text-lime-400 text-sm font-semibold mb-4">
          <Award size={15} />
          Our Buyer Partners
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-white mb-3">
          Our Buyer Partners &amp;{' '}
          <span className="text-lime-400">Royal Brands</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-base">
          Your produce reaches India's top retailers, quick-commerce platforms, and luxury hotel chains — directly, transparently.
        </p>
      </motion.div>

      {/* ── FARMERS FACTORY — MAIN FEATURED FIRST ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-8 rounded-3xl bg-gradient-to-r from-green-900/70 via-green-800/60 to-green-900/70 border border-green-600/40 p-8 flex flex-col md:flex-row items-center gap-8"
      >
        {/* Badge */}
        <div className="shrink-0 flex flex-col items-center gap-3">
          <span className="text-xs font-black text-lime-400 uppercase tracking-widest bg-lime-500/15 border border-lime-500/30 px-4 py-1.5 rounded-full">
            ⭐ Main Partner — India's Farmer Network
          </span>
          {/* Farmers Factory Logo */}
          <div className="bg-white rounded-2xl px-6 py-4 shadow-xl">
            <FarmerFactoryLogo />
          </div>
        </div>

        {/* Info */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-2xl md:text-3xl font-black text-white mb-2">Farmers Factory</h3>
          <p className="text-green-300 text-base font-medium mb-4">
            Direct farmer collective partnership · FPO network integration
          </p>
          <p className="text-gray-400 text-sm leading-relaxed max-w-lg">
            IGO Farmgate Mandi's primary farmer-network partner. Together we bring 1,200+ small and marginal farmers into a transparent, fair-price buyback system — zero middlemen, on-time payment, grade-based pricing.
          </p>
          {/* Stat pills */}
          <div className="flex flex-wrap gap-3 mt-5 justify-center md:justify-start">
            {[
              { icon: <Users size={14}/>, val: '1,200+', sub: 'Partner Farmers India-wide' },
              { icon: <ShoppingBag size={14}/>, val: 'FPO', sub: 'Network integration' },
              { icon: '🌾', val: '26', sub: 'Crop verticals' },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-2 bg-green-900/50 border border-green-700/50 rounded-xl px-4 py-2">
                <span className="text-lime-400">{s.icon}</span>
                <div>
                  <p className="text-sm font-black text-lime-400 leading-none">{s.val}</p>
                  <p className="text-xs text-gray-400 leading-none mt-0.5">{s.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ── 6 Buyer Partners Grid ── */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
        {PARTNERS.map((p, idx) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08 }}
            whileHover={{ scale: 1.06, y: -5 }}
            className="flex flex-col items-center gap-3 p-5 bg-white/5 border border-white/8 rounded-2xl hover:bg-white/10 hover:border-lime-500/30 transition-all cursor-default"
          >
            <div className="flex items-center justify-center h-16">
              <p.Logo />
            </div>
            <div className="text-center">
              <p className="text-xs font-bold text-white">{p.name}</p>
              <p className="text-[11px] text-gray-500 mt-0.5">{p.tagline}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ── Bottom note ── */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-sm text-gray-600"
      >
        Partnered with trusted F&amp;B buyers, retailers, and farmer networks for consistent, large-volume market demand across India.
      </motion.p>
    </div>
  </section>
);
