const lineItems = [
  { label: 'Front bumper removal & prep', cost: 180 },
  { label: 'Paint matching & application', cost: 320 },
  { label: 'Clear coat & polish', cost: 160 },
  { label: 'Parts & materials', cost: 140 },
  { label: 'Labor (est. 4 hrs)', cost: 40 },
];

const confidence = 94;

export default function EstimateCard({ onApprove }) {
  const total = lineItems.reduce((s, i) => s + i.cost, 0);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden w-full max-w-xl mx-auto">
      {/* Header */}
      <div className="bg-blue-600 px-6 py-5 text-white">
        <div className="flex items-center gap-2 mb-1">
          <svg className="w-5 h-5 opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2 2h10l2-2z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 6l2 4h4l-1 6" />
          </svg>
          <span className="text-sm font-medium opacity-80">2019 Honda Civic LX · VIN •••• 4812</span>
        </div>
        <h2 className="text-2xl font-bold">Repair Estimate</h2>
        <p className="text-blue-100 text-sm mt-1">Front bumper damage — photo-based AI analysis</p>
      </div>

      {/* Confidence badge */}
      <div className="px-6 pt-4 pb-2 flex items-center gap-2">
        <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-emerald-200">
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          {confidence}% confidence
        </div>
        <span className="text-xs text-gray-400">Based on 3 photos uploaded</span>
      </div>

      {/* Line items */}
      <div className="px-6 pb-2">
        <div className="divide-y divide-gray-50">
          {lineItems.map((item) => (
            <div key={item.label} className="flex justify-between items-center py-3">
              <span className="text-sm text-gray-700">{item.label}</span>
              <span className="text-sm font-medium text-gray-900">${item.cost.toFixed(2)}</span>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center pt-3 border-t border-gray-200 mt-1">
          <span className="font-semibold text-gray-900">Estimated Total</span>
          <span className="text-xl font-bold text-blue-600">${total.toFixed(2)}</span>
        </div>
        <p className="text-xs text-gray-400 mt-2">
          Final price confirmed after mechanic inspection. Estimate may vary ±10%.
        </p>
      </div>

      {/* Actions */}
      <div className="px-6 py-5 bg-gray-50 flex flex-col sm:flex-row gap-3">
        <button
          onClick={onApprove}
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-150 flex items-center justify-center gap-2 cursor-pointer"
        >
          Approve & Schedule Repair
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
        <button className="sm:w-auto text-gray-500 hover:text-gray-700 font-medium py-3 px-4 rounded-xl border border-gray-200 bg-white transition-colors duration-150 text-sm cursor-pointer">
          Request Review
        </button>
      </div>
    </div>
  );
}
