import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, BadgeCheck } from 'lucide-react';

/**
 * CTA Section — IGO Group Guaranteed Buyback Program
 * India-wide, 0 Middlemen, On-time payments, Strict quality checks
 */
export const CTASection = () => (
  <section className="py-24 relative overflow-hidden bg-gradient-to-br from-green-800 via-green-700 to-green-600">
    {/* Background glows */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-0 left-0 w-96 h-96 bg-lime-400/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
    </div>

    <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-lime-300 text-sm font-semibold mb-6"
      >
        <BadgeCheck size={15} />
        IGO Group Guaranteed Buyback Program
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-4 leading-tight"
      >
        Expand Your Farm Profitability
        <br />
        <span className="text-lime-300">with IGOBuyback</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-green-100 text-lg mb-8 max-w-2xl mx-auto"
      >
        Join 1,200+ farmers across India already earning more — 0 middlemen, on-time payments, strict quality checks, and a transparent buyback promise.
      </motion.p>

      {/* Benefit pills */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="flex flex-wrap justify-center gap-3 mb-10"
      >
        {['0 Middlemen', 'On-time Payment', 'Strict Quality Checks', 'India-wide', '7-Day Guarantee'].map((pill) => (
          <span key={pill} className="px-4 py-1.5 bg-white/12 border border-white/20 rounded-full text-white text-xs font-semibold backdrop-blur">
            ✓ {pill}
          </span>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.35 }}
        className="flex flex-wrap justify-center gap-4"
      >
        <Link
          to="/enroll"
          className="inline-flex items-center gap-2 bg-lime-400 hover:bg-lime-300 text-green-900 font-black px-8 py-4 rounded-2xl text-base shadow-xl shadow-green-900/30 transition-all group"
        >
          Register as Farmer
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </Link>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-bold px-8 py-4 rounded-2xl text-base hover:bg-white/10 transition-colors backdrop-blur"
        >
          Talk to Our Team
        </Link>
      </motion.div>
    </div>
  </section>
);
