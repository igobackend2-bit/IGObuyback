import { Trophy, Globe2, Feather } from 'lucide-react';

export const VisionMissionSection = () => (
  <section className="py-20 bg-white" id="vision-mission">
    <div className="max-w-7xl mx-auto px-6 text-center">
      <div className="badge-green mx-auto mb-4 w-fit">
        <Globe2 size={14} /> Our Vision
      </div>
      <h2 className="text-4xl font-black text-agri-earth-900 mb-3">Our Vision & Mission</h2>
      <p className="max-w-3xl mx-auto text-agri-earth-600 mb-12">
        A transparent, technology-driven agricultural ecosystem where farmers receive fair value and consumers receive world-class produce.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="card p-6 border-l-4 border-agri-green-600">
          <div className="flex items-center gap-2 text-agri-green-600 mb-3">
            <Trophy size={20} />
            <h3 className="text-lg font-bold">Grade A Quality</h3>
          </div>
          <p className="text-agri-earth-600 text-sm">
            Only Grade-A products across fruits, vegetables, spices, dry fruits and honey with rigorous quality checks.
          </p>
        </div>
        <div className="card p-6 border-l-4 border-agri-green-600">
          <div className="flex items-center gap-2 text-agri-green-600 mb-3">
            <Feather size={20} />
            <h3 className="text-lg font-bold">100% On-Time Payments</h3>
          </div>
          <p className="text-agri-earth-600 text-sm">
            Promise of full payment in 24 hours for verified deliveries—farmers and sellers get money fast.
          </p>
        </div>
        <div className="card p-6 border-l-4 border-agri-green-600">
          <div className="flex items-center gap-2 text-agri-green-600 mb-3">
            <Globe2 size={20} />
            <h3 className="text-lg font-bold">Real-Time Market Data</h3>
          </div>
          <p className="text-agri-earth-600 text-sm">
            Continuous live mandi prices show transparent fair rates so sellers can choose when to sell.
          </p>
        </div>
      </div>
    </div>
  </section>
);
