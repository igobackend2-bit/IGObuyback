import { motion } from 'motion/react';
import { Award, Users, ShoppingBag } from 'lucide-react';

/* ══════════════════════════════════════════════════════
   Accurate inline SVG logos matching uploaded brand logos
   ══════════════════════════════════════════════════════ */

/** Farmers Factory — green circle, F-leaf design, shovel */
const FarmersFactoryLogo = ({ size = 120 }: { size?: number }) => (
  <svg viewBox="0 0 200 220" width={size} height={size * 1.1} xmlns="http://www.w3.org/2000/svg">
    {/* Circle background */}
    <circle cx="100" cy="95" r="90" fill="#3a7d50"/>
    {/* Upper white leaf (top of F) */}
    <path d="M90 30 Q130 30 145 60 Q130 80 90 75 Z" fill="white"/>
    {/* Middle green leaf */}
    <path d="M85 75 Q130 75 140 100 Q125 120 85 115 Z" fill="#7dc85a"/>
    {/* Water drop */}
    <path d="M100 130 Q88 150 88 160 Q88 175 100 175 Q112 175 112 160 Q112 150 100 130Z" fill="white"/>
    <circle cx="100" cy="172" r="5" fill="#3a7d50"/>
    {/* Shovel/pick handle */}
    <line x1="55" y1="25" x2="145" y2="160" stroke="#7a3010" strokeWidth="7" strokeLinecap="round"/>
    {/* Shovel head */}
    <path d="M42 18 L68 18 L65 32 L45 32 Z" fill="#8a8a8a"/>
    {/* Brand text */}
    <text x="100" y="205" fontFamily="Arial Black, sans-serif" fontSize="18" fontWeight="900"
          fill="#2d6840" textAnchor="middle" letterSpacing="1">FARMERS FACTORY</text>
  </svg>
);

/** DMart — cream bg, green star-D pyramid logo + tagline */
const DMartLogo = () => (
  <svg viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="80" rx="6" fill="#f5f0e0"/>
    {/* D shape */}
    <text x="12" y="52" fontFamily="Arial Black, sans-serif" fontSize="44" fontWeight="900" fill="#1a6b30">D</text>
    {/* Star above D */}
    <text x="46" y="24" fontSize="14" fill="#1a6b30">★</text>
    {/* Mart text */}
    <text x="58" y="52" fontFamily="Arial Black, sans-serif" fontSize="38" fontWeight="900" fill="#1a6b30">Mart</text>
    {/* Tagline */}
    <text x="12" y="70" fontFamily="Arial, sans-serif" fontSize="10" fill="#1a6b30" letterSpacing="0.5">Daily Savings  Daily Discounts</text>
  </svg>
);

/** BigBasket — bb square + text + TATA Enterprise */
const BigBasketLogo = () => (
  <svg viewBox="0 0 220 70" xmlns="http://www.w3.org/2000/svg">
    <rect width="220" height="70" rx="6" fill="white"/>
    {/* bb green square */}
    <rect x="6" y="8" width="48" height="48" rx="8" fill="#5aaa1e"/>
    <text x="30" y="44" fontFamily="Arial Black, sans-serif" fontSize="28" fontWeight="900"
          fill="white" textAnchor="middle">bb</text>
    {/* bigbasket text */}
    <text x="65" y="38" fontFamily="Arial Black, sans-serif" fontSize="24" fontWeight="900" fill="#cc1f27">big</text>
    <text x="107" y="38" fontFamily="Arial Black, sans-serif" fontSize="24" fontWeight="900" fill="#5aaa1e">basket</text>
    {/* A TATA Enterprise */}
    <text x="65" y="56" fontFamily="Arial, sans-serif" fontSize="11" fill="#1a5caa" letterSpacing="0.3">A </text>
    <text x="76" y="56" fontFamily="Arial Black, sans-serif" fontSize="11" fontWeight="900" fill="#1a5caa">TATA</text>
    <text x="103" y="56" fontFamily="Arial, sans-serif" fontSize="11" fill="#1a5caa"> Enterprise</text>
  </svg>
);

/** Instamart (Swiggy) — orange square, pin icon + instamart text */
const InstamartLogo = () => (
  <svg viewBox="0 0 180 80" xmlns="http://www.w3.org/2000/svg">
    <rect width="180" height="80" rx="8" fill="white"/>
    {/* Orange rounded square icon */}
    <rect x="8" y="8" width="58" height="64" rx="14" fill="#fc5734"/>
    {/* Location pin shape */}
    <path d="M37 20 Q52 20 52 34 Q52 46 37 60 Q22 46 22 34 Q22 20 37 20Z" fill="white"/>
    {/* Inner swoosh */}
    <path d="M29 34 Q37 28 45 34 Q37 40 29 34Z" fill="#fc5734"/>
    {/* instamart text */}
    <text x="74" y="36" fontFamily="Arial Black, sans-serif" fontSize="18" fontWeight="900" fill="#1a1a1a">insta</text>
    <text x="74" y="58" fontFamily="Arial Black, sans-serif" fontSize="18" fontWeight="900" fill="#1a1a1a">mart</text>
  </svg>
);

/** TAJ Hotels — gold serif TAJ + geometric snowflake ornament */
const TajLogo = () => (
  <svg viewBox="0 0 160 100" xmlns="http://www.w3.org/2000/svg">
    <rect width="160" height="100" rx="6" fill="#faf6ee"/>
    {/* Snowflake/geometric ornament */}
    <g transform="translate(80,28)">
      {[0,45,90,135,180,225,270,315].map((a, i) => (
        <line key={i}
          x1="0" y1="0"
          x2={Math.cos(a * Math.PI / 180) * 16}
          y2={Math.sin(a * Math.PI / 180) * 16}
          stroke="#b8960c" strokeWidth="2.5" strokeLinecap="round"/>
      ))}
      <circle cx="0" cy="0" r="5" fill="#b8960c"/>
    </g>
    {/* TAJ text in gold serif */}
    <text x="80" y="80" fontFamily="Georgia, 'Times New Roman', serif" fontSize="40"
          fontWeight="700" fill="#b8960c" textAnchor="middle" letterSpacing="8">TAJ</text>
  </svg>
);

const PARTNERS = [
  { Logo: InstamartLogo,  name: 'Swiggy Instamart', tagline: 'Grocery delivery'  },
  { Logo: BigBasketLogo,  name: 'bigbasket',         tagline: 'Online grocery'   },
  { Logo: DMartLogo,      name: 'DMart',             tagline: 'Retail chain'     },
  { Logo: TajLogo,        name: 'TAJ Hotels',        tagline: 'Royal hospitality'},
];

export const TrustedPartnersSection = () => (
  <section className="py-20 bg-gray-950 text-white overflow-hidden relative" id="partners">
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-green-600/5 rounded-full blur-3xl" />
    </div>

    <div className="relative max-w-7xl mx-auto px-6">

      {/* ── Header ── */}
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

      {/* ── FARMERS FACTORY — MAIN FEATURED ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10 rounded-3xl bg-gradient-to-r from-green-900/70 via-green-800/60 to-green-900/70 border border-green-600/40 p-8 flex flex-col md:flex-row items-center gap-8"
      >
        <div className="shrink-0 flex flex-col items-center gap-4">
          <span className="text-xs font-black text-lime-400 uppercase tracking-widest bg-lime-500/15 border border-lime-500/30 px-4 py-1.5 rounded-full">
            ⭐ Main Partner — India's Farmer Network
          </span>
          <FarmersFactoryLogo size={140} />
        </div>

        <div className="flex-1 text-center md:text-left">
          <h3 className="text-2xl md:text-3xl font-black text-white mb-2">Farmers Factory</h3>
          <p className="text-green-300 text-base font-medium mb-4">
            Direct farmer collective partnership · FPO network integration
          </p>
          <p className="text-gray-400 text-sm leading-relaxed max-w-lg">
            IGO Farmgate Mandi's primary farmer-network partner. Together we bring 1,200+ small and marginal
            farmers into a transparent, fair-price buyback system — zero middlemen, on-time payment, grade-based pricing.
          </p>
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

      {/* ── 4 Buyer Partner Logos ── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
        {PARTNERS.map((p, idx) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="flex flex-col items-center gap-3 p-5 bg-white/5 border border-white/8 rounded-2xl hover:border-lime-500/30 transition-all cursor-default"
          >
            <div className="w-full flex items-center justify-center h-20 rounded-xl overflow-hidden">
              <p.Logo />
            </div>
            <div className="text-center">
              <p className="text-xs font-bold text-white">{p.name}</p>
              <p className="text-[11px] text-gray-500 mt-0.5">{p.tagline}</p>
            </div>
          </motion.div>
        ))}
      </div>

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
