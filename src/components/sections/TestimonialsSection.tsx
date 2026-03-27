import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

/**
 * Testimonials Section - Customer reviews and success stories
 */
export const TestimonialsSection = () => {
  const reviews = [
    {
      name: 'Ramesh Kumar',
      role: 'Cucumber Farmer, Madurai',
      text: 'IGO Agritech changed everything for me. I used to lose 30% to middlemen. Now I get full market price in 7 days — directly in my account.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
    },
    {
      name: 'Anitha Selvam',
      role: 'Restaurant Owner, Chennai',
      text: "The freshness and quality of microgreens from IGO is outstanding. Delivery is always on time. Best B2B supplier I've worked with.",
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&q=80',
    },
    {
      name: 'Senthil Nathan',
      role: 'Mushroom Farmer, Coimbatore',
      text: 'Transparent pricing and farm pickup — I just focus on growing. IGO handles everything else. Highly recommend to all farmers.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
    },
    {
      name: 'Priya Muthukumar',
      role: 'Homemaker, Salem',
      text: 'We get fresh vegetables delivered directly from farms. The quality difference is night and day compared to supermarkets.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
    },
  ];

  return (
    <section className="py-24 bg-agri-earth-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="badge-green mx-auto w-fit mb-4">
            <Star size={14} /> Testimonials
          </div>
          <h2 className="text-4xl font-black tracking-tighter text-agri-earth-900">
            Trusted by Farmers & Buyers
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={`review-${i}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card p-6 relative"
            >
              <Quote size={32} className="absolute top-4 right-4 text-agri-earth-100" />
              <div className="flex gap-0.5 mb-3">
                {[...Array(r.rating)].map((_, j) => (
                  <Star
                    key={`star-${j}`}
                    size={12}
                    fill="#16a34a"
                    className="text-agri-green-600"
                  />
                ))}
              </div>
              <p className="text-sm text-agri-earth-600 italic mb-5 leading-relaxed">
                "{r.text}"
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={r.image}
                  alt={r.name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-agri-green-100"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="font-semibold text-sm text-agri-earth-900">{r.name}</div>
                  <div className="text-[11px] text-agri-earth-400">{r.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
