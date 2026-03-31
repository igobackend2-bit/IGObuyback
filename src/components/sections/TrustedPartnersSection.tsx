import { Shield, Factory } from 'lucide-react';
import { motion } from 'motion/react';

const PARTNERS = [
  { name: 'Zepto', logo: '⚡', color: 'bg-purple-100', textColor: 'text-purple-600' },
  { name: 'Blinkit', logo: '🚀', color: 'bg-yellow-100', textColor: 'text-yellow-600' },
  { name: 'DMart', logo: '🏪', color: 'bg-blue-100', textColor: 'text-blue-600' },
  { name: 'Instamart', logo: '📦', color: 'bg-green-100', textColor: 'text-green-600' },
  { name: 'Taj', logo: '🏰', color: 'bg-orange-100', textColor: 'text-orange-600' },
];

const FARMER_NETWORKS = [
  { name: 'Farmers Factory', logo: '🌾', color: 'bg-agri-green-100', textColor: 'text-agri-green-700' },
];

export const TrustedPartnersSection = () => (
  <section className="py-16 bg-gradient-to-b from-agri-earth-50 to-white" id="trusted-by">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="badge-green mx-auto mb-3 w-fit"
        >
          <Shield size={14} /> Partner Trust
        </motion.div>
        <h2 className="text-3xl md:text-4xl font-black text-agri-earth-900">Trusted by top marketplaces</h2>
        <p className="max-w-2xl mx-auto text-agri-earth-600 mt-3">Supply chain reliability for large brands, retailers and cloud kitchens.</p>
      </div>

      {/* Marketplace Partners */}
      <div className="mb-12">
        <h3 className="text-lg font-bold text-agri-earth-900 mb-6 text-center">Leading B2B & Retail Partners</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 items-center">
          {PARTNERS.map((p, idx) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="card p-6 text-center rounded-xl shadow-sm border border-agri-earth-200 bg-white hover:shadow-lg transition-all cursor-pointer"
            >
              <div className={`mx-auto w-16 h-16 rounded-full ${p.color} flex items-center justify-center mb-3 text-2xl`}>
                {p.logo}
              </div>
              <p className={`font-bold text-agri-earth-900 ${p.textColor}`}>{p.name}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Farmer Networks */}
      <div className="bg-gradient-to-r from-agri-green-50 to-agri-earth-50 rounded-2xl p-8 border border-agri-green-200">
        <div className="flex items-center gap-3 mb-6">
          <Factory className="text-agri-green-700" size={24} />
          <h3 className="text-lg font-bold text-agri-earth-900">Farmer Networks & Groups</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {FARMER_NETWORKS.map((network, idx) => (
            <motion.div
              key={network.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="card p-6 text-center rounded-xl bg-white border-2 border-agri-green-300 shadow-md hover:shadow-lg transition-all"
            >
              <div className={`mx-auto w-16 h-16 rounded-full ${network.color} flex items-center justify-center mb-3 text-3xl`}>
                {network.logo}
              </div>
              <p className={`font-bold text-lg ${network.textColor}`}>{network.name}</p>
              <p className="text-xs text-agri-earth-600 mt-2">Direct farmer collective partnerships</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm text-agri-earth-600">Partnered with trusted F&B buyers, retailers, and farmer networks for consistent, large-volume market demand.</p>
      </div>
    </div>
  </section>
);
