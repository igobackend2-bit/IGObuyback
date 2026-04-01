import { useState, useEffect } from 'react';
import { Calculator, TrendingUp, Package, AlertCircle } from 'lucide-react';

interface PriceCalculation {
  basePrice: number;
  qualityBonus: number;
  quantityBonus: number;
  totalPrice: number;
  pricePerKg: number;
}

export const PriceCalculatorSection = () => {
  const [product, setProduct] = useState('tomato');
  const [quantity, setQuantity] = useState(1000);
  const [quality, setQuality] = useState('A');
  
  // Product base prices (per kg)
  const basePrices: Record<string, number> = {
    tomato: 25,
    potato: 20,
    onion: 30,
    chili: 45,
    brinjal: 35,
    cauliflower: 25,
    cabbage: 15,
    carrot: 40,
    beans: 50,
    gourds: 20
  };

  // Quality multipliers
  const qualityMultipliers: Record<string, number> = {
    'A++': 1.15,
    'A+': 1.10,
    'A': 1.00,
    'B': 0.90,
    'C': 0.80
  };

  // Quantity bonuses
  const getQuantityBonus = (qty: number): number => {
    if (qty >= 5000) return 0.05;
    if (qty >= 3000) return 0.03;
    if (qty >= 1000) return 0.02;
    return 0;
  };

  const [calculation, setCalculation] = useState<PriceCalculation>({
    basePrice: 0,
    qualityBonus: 0,
    quantityBonus: 0,
    totalPrice: 0,
    pricePerKg: 0
  });

  useEffect(() => {
    const basePrice = basePrices[product] ?? 0;
    const base = basePrice * quantity;
    const qualityMultiplier = qualityMultipliers[quality] ?? 1;
    const qualityBonusAmt = base * (qualityMultiplier - 1);
    const quantityBonusAmt = base * getQuantityBonus(quantity);
    const total = base + qualityBonusAmt + quantityBonusAmt;
    
    setCalculation({
      basePrice: base,
      qualityBonus: qualityBonusAmt,
      quantityBonus: quantityBonusAmt,
      totalPrice: total,
      pricePerKg: total / quantity
    });
  }, [product, quantity, quality]);

  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 via-white to-lime-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-green-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-lime-200/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Calculator size={16} />
            Smart Pricing Tool
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Farm Price Calculator
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get instant price estimates for your produce. Our transparent pricing ensures you get the best value for your quality crops.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Calculator Form */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Package size={24} className="text-green-600" />
              Calculate Your Price
            </h3>

            {/* Product Selection */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Select Product
              </label>
              <select
                value={product}
                onChange={(e) => setProduct(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors text-gray-900"
              >
                {Object.entries(basePrices).map(([name, price]) => (
                  <option key={name} value={name}>
                    {name.charAt(0).toUpperCase() + name.slice(1)} - ₹{price}/kg (base price)
                  </option>
                ))}
              </select>
            </div>

            {/* Quantity Input */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Quantity (kg)
              </label>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 0))}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors text-gray-900"
                min="1"
                step="100"
              />
              <p className="text-xs text-gray-500 mt-2">
                {quantity >= 5000 && "🎉 Bulk discount applied (5%)"}
                {quantity >= 3000 && quantity < 5000 && "✨ Volume discount applied (3%)"}
                {quantity >= 1000 && quantity < 3000 && "📈 Standard discount applied (2%)"}
                {quantity < 1000 && "No minimum quantity required"}
              </p>
            </div>

            {/* Quality Selection */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Quality Grade
              </label>
              <div className="grid grid-cols-5 gap-2">
                {Object.keys(qualityMultipliers).map((grade) => (
                  <button
                    key={grade}
                    onClick={() => setQuality(grade)}
                    className={`px-3 py-2 rounded-lg font-medium transition-all ${
                      quality === grade
                        ? 'bg-green-600 text-white border-2 border-green-600'
                        : 'bg-gray-100 text-gray-700 border-2 border-gray-200 hover:border-green-300'
                    }`}
                  >
                    {grade}
                  </button>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-2">
                {quality === 'A++' && "⭐ Premium quality - 15% bonus"}
                {quality === 'A+' && "🌟 Excellent quality - 10% bonus"}
                {quality === 'A' && "✅ Good quality - Standard price"}
                {quality === 'B' && "⚠️ Fair quality - 10% adjustment"}
                {quality === 'C' && "📉 Basic quality - 20% adjustment"}
              </p>
            </div>
          </div>

          {/* Price Breakdown */}
          <div className="space-y-6">
            {/* Price Display Card */}
            <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-3xl shadow-xl p-8 text-white">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold">Estimated Price</h3>
                <TrendingUp size={28} className="text-green-200" />
              </div>
              
              <div className="text-center mb-6">
                <div className="text-5xl font-bold mb-2">
                  {formatPrice(calculation.totalPrice)}
                </div>
                <div className="text-green-100 text-lg">
                  {formatPrice(calculation.pricePerKg)} per kg
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-white/10 rounded-xl p-3">
                  <div className="text-green-200 mb-1">Base Amount</div>
                  <div className="font-semibold">{formatPrice(calculation.basePrice)}</div>
                </div>
                <div className="bg-white/10 rounded-xl p-3">
                  <div className="text-green-200 mb-1">Total Bonus</div>
                  <div className="font-semibold text-green-200">
                    +{formatPrice(calculation.qualityBonus + calculation.quantityBonus)}
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed Breakdown */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Price Breakdown</h3>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Base Price ({quantity} kg × ₹{basePrices[product]}/kg)</span>
                  <span className="font-semibold text-gray-900">{formatPrice(calculation.basePrice)}</span>
                </div>
                
                {calculation.qualityBonus !== 0 && (
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Quality Bonus ({quality} grade)</span>
                    <span className="font-semibold text-green-600">
                      {calculation.qualityBonus > 0 ? '+' : ''}{formatPrice(calculation.qualityBonus)}
                    </span>
                  </div>
                )}
                
                {calculation.quantityBonus !== 0 && (
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Volume Bonus</span>
                    <span className="font-semibold text-green-600">
                      +{formatPrice(calculation.quantityBonus)}
                    </span>
                  </div>
                )}
                
                <div className="flex justify-between items-center py-3">
                  <span className="text-lg font-bold text-gray-900">Total Price</span>
                  <span className="text-xl font-bold text-green-600">{formatPrice(calculation.totalPrice)}</span>
                </div>
              </div>
            </div>

            {/* Info Card */}
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 flex items-start gap-3">
              <AlertCircle size={20} className="text-blue-600 mt-0.5 shrink-0" />
              <div className="text-sm text-blue-800">
                <strong>Note:</strong> These are estimated prices. Final prices are determined after quality inspection at our collection centers. Prices are updated daily based on market conditions.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
