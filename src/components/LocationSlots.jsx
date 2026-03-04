import { useState } from 'react';

const LOCATIONS = [
  {
    id: 1,
    name: 'AutoCare Central',
    address: '842 Main St, Chicago, IL',
    distance: '1.2 mi',
    rating: 4.8,
    reviews: 312,
    slots: [
      { id: 'a1', date: 'Mon, Mar 10', time: '9:00 AM' },
      { id: 'a2', date: 'Wed, Mar 12', time: '1:00 PM' },
      { id: 'a3', date: 'Thu, Mar 13', time: '10:00 AM' },
    ],
  },
  {
    id: 2,
    name: 'AutoCare Westside',
    address: '2210 W Lake Ave, Chicago, IL',
    distance: '2.8 mi',
    rating: 4.6,
    reviews: 189,
    slots: [
      { id: 'b1', date: 'Mon, Mar 10', time: '2:00 PM' },
      { id: 'b2', date: 'Sat, Mar 15', time: '8:00 AM' },
    ],
  },
];

function Stars({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((n) => (
        <svg
          key={n}
          className={`w-3.5 h-3.5 ${n <= Math.round(rating) ? 'text-amber-400' : 'text-gray-200'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function LocationSlots({ onSelect }) {
  const [selected, setSelected] = useState(null); // { locationId, slotId }

  const handleSlot = (loc, slot) => {
    setSelected({ locationId: loc.id, slotId: slot.id });
  };

  const handleConfirm = () => {
    if (!selected) return;
    const loc = LOCATIONS.find((l) => l.id === selected.locationId);
    const slot = loc.slots.find((s) => s.id === selected.slotId);
    onSelect({ ...slot, shop: loc.name, distance: loc.distance });
  };

  return (
    <div className="w-full max-w-xl mx-auto flex flex-col gap-4">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 px-6 pt-6 pb-4">
        <h2 className="text-xl font-bold text-gray-900">Available Slots Nearby</h2>
        <p className="text-sm text-gray-500 mt-1">Select an open appointment at a location near you.</p>
      </div>

      {LOCATIONS.map((loc) => (
        <div key={loc.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {/* Location header */}
          <div className="px-6 py-4 border-b border-gray-50">
            <div className="flex items-start justify-between">
              <div>
                <p className="font-semibold text-gray-900">{loc.name}</p>
                <p className="text-xs text-gray-400 mt-0.5">{loc.address}</p>
                <div className="flex items-center gap-2 mt-1.5">
                  <Stars rating={loc.rating} />
                  <span className="text-xs text-gray-500 font-medium">{loc.rating}</span>
                  <span className="text-xs text-gray-400">({loc.reviews} reviews)</span>
                </div>
              </div>
              <span className="text-xs bg-gray-100 text-gray-600 font-semibold px-2.5 py-1 rounded-full shrink-0">
                {loc.distance}
              </span>
            </div>
          </div>

          {/* Slot buttons */}
          <div className="px-6 py-4">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">Open slots</p>
            <div className="flex flex-wrap gap-2">
              {loc.slots.map((slot) => {
                const isSelected = selected?.locationId === loc.id && selected?.slotId === slot.id;
                return (
                  <button
                    key={slot.id}
                    onClick={() => handleSlot(loc, slot)}
                    className={`px-4 py-2.5 rounded-xl border text-sm font-medium transition-all duration-150 cursor-pointer
                      ${isSelected
                        ? 'border-blue-600 bg-blue-600 text-white'
                        : 'border-gray-200 bg-white text-gray-700 hover:border-blue-400 hover:text-blue-600'
                      }`}
                  >
                    <span className="block font-semibold">{slot.time}</span>
                    <span className="block text-xs opacity-75 mt-0.5">{slot.date}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      ))}

      {/* Confirm bar */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 px-6 py-5">
        <button
          onClick={handleConfirm}
          disabled={!selected}
          className={`w-full py-3 px-6 rounded-xl font-semibold text-sm transition-all duration-150 cursor-pointer
            ${selected
              ? 'bg-blue-600 hover:bg-blue-700 text-white'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
        >
          {selected ? 'Confirm This Appointment' : 'Select a slot to continue'}
        </button>
      </div>
    </div>
  );
}
