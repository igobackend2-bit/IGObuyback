import { motion } from 'motion/react';
import { Eye, Target, Shield, TrendingUp, Users, Leaf } from 'lucide-react';

const PILLARS = [
  {
    icon: Shield,
    color: 'bg-green-600',
    title: '0 Middlemen',
    body: 'We cut every layer of commission between the farmer and the buyer — what buyers pay is what farmers receive.',
  },
  {
    icon: TrendingUp,
    color: 'bg-lime-600',
    title: 'On-Time Payment',
    body: 'Guaranteed payment within 7 working days of quality-approved delivery. 85% of farmers are paid within 5 days.',
  },
  {
    icon: Leaf,
    color: 'bg-emerald-600',
    title: 'Strict Quality Checks',
    body: 'Grade A & B certified produce only. Our quality network ensures buyers receive consistent, premium Indian farm output.',
  },
  {
    icon: Users,
    color: 'bg-teal-600',
    title: 'India-wide Reach',
    body: 'From small farms in Tamil Nadu to FPO collectives across India — every farmer deserves fair market access.',
  },
];

export const VisionMissionSection = () => (
  <section className="py-24 bg-white relative overflow-hidden" id="vision-mission">
    {/* Subtle background pattern */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-50 rounded-full -translate-y-1/2 translate-x-1/3 opacity-60" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-lime-50 rounded-full translate-y-1/3 -translate-x-1/4 opacity-50" />
    </div>

    <div className="relative max-w-7xl mx-auto px-6">

      {/* ── Vision / Mission side-by-side ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">

        {/* Vision */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-green-700 to-green-900 rounded-3xl p-10 text-white relative overflow-hidden"
        >
          <div className="absolute -top-8 -right-8 w-40 h-40 bg-white/5 rounded-full" />
          <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-white/5 rounded-full" />

          <div className="relative">
            <div className="w-14 h-14 bg-white/15 rounded-2xl flex items-center justify-center mb-6">
              <Eye size={26} className="text-lime-300" />
            </div>
            <div className="text-xs font-black uppercase tracking-[0.2em] text-lime-400 mb-3">Our Vision</div>
            <h3 className="text-2xl md:text-3xl font-black leading-tight mb-4">
              Eliminate the middleman from Indian agriculture — forever.
            </h3>
            <p className="text-green-200 leading-relaxed text-base">
              We envision an India where every farmer, regardless of size or geography, has direct access to top-tier national buyers — with transparent prices, zero commission, and dignity in trade.
            </p>
          </div>
        </motion.div>

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-10 text-white relative overflow-hidden"
        >
          <div className="absolute -top-8 -left-8 w-40 h-40 bg-lime-500/5 rounded-full" />
          <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-lime-500/5 rounded-full" />

          <div className="relative">
            <div className="w-14 h-14 bg-lime-500/15 rounded-2xl flex items-center justify-center mb-6">
              <Target size={26} className="text-lime-400" />
            </div>
            <div className="text-xs font-black uppercase tracking-[0.2em] text-lime-400 mb-3">Our Mission</div>
            <h3 className="text-2xl md:text-3xl font-black leading-tight mb-4">
              Guaranteed buyback. On-time payment. For every Indian farmer.
            </h3>
            <p className="text-gray-300 leading-relaxed text-base">
              Through IGOBuyback, we provide a guaranteed market, strict quality grading, and 7-day payment assurance — building a sustainable agricultural supply chain from farm gate to India's top buyers.
            </p>
          </div>
        </motion.div>
      </div>

      {/* ── 4 Pillars ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <p className="text-xs font-black uppercase tracking-[0.2em] text-green-600 mb-2">Our Commitments</p>
        <h2 className="text-3xl md:text-4xl font-black text-gray-900">
          Built on <span className="text-green-600">Four Promises</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {PILLARS.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className="bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:border-green-200 hover:shadow-lg transition-all duration-300"
          >
            <div className={`w-12 h-12 ${p.color} rounded-xl flex items-center justify-center mb-4 shadow-sm`}>
              <p.icon size={22} className="text-white" />
            </div>
            <h4 className="text-lg font-black text-gray-900 mb-2">{p.title}</h4>
            <p className="text-sm text-gray-500 leading-relaxed">{p.body}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
