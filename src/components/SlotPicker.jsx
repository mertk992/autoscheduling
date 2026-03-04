import { useState, useEffect } from 'react';

const SYNCED_SLOTS = [
  { id: 1, date: 'Monday, Mar 10', time: '9:00 AM – 12:00 PM', shop: 'AutoCare Central', distance: '1.2 mi', badge: 'Earliest match' },
  { id: 2, date: 'Tuesday, Mar 11', time: '2:00 PM – 5:00 PM', shop: 'AutoCare Central', distance: '1.2 mi', badge: null },
  { id: 3, date: 'Saturday, Mar 15', time: '8:00 AM – 11:00 AM', shop: 'AutoCare Westside', distance: '2.8 mi', badge: 'Weekend' },
];

function SyncingAnimation({ onDone }) {
  const [phase, setPhase] = useState(0);
  const phases = [
    'Connecting to your calendar…',
    'Reading your availability…',
    'Matching with shop openings…',
    'Found 3 available slots!',
  ];

  useEffect(() => {
    if (phase < phases.length - 1) {
      const t = setTimeout(() => setPhase((p) => p + 1), 750);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(onDone, 600);
      return () => clearTimeout(t);
    }
  }, [phase]);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 w-full max-w-xl mx-auto px-8 py-12 flex flex-col items-center">
      <div className="relative w-16 h-16 mb-6">
        <svg className="animate-spin w-16 h-16 text-blue-100" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
        </svg>
        <svg className="animate-spin absolute inset-0 w-16 h-16 text-blue-600" viewBox="0 0 24 24" fill="none" style={{ animationDuration: '0.9s' }}>
          <path d="M12 2a10 10 0 0110 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
      </div>
      <p className="text-gray-700 font-semibold text-base">{phases[phase]}</p>
      <div className="flex gap-1.5 mt-4">
        {phases.map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${i <= phase ? 'bg-blue-600' : 'bg-gray-200'}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function SlotPicker({ onSelect }) {
  const [syncing, setSyncing] = useState(true);
  const [selected, setSelected] = useState(null);

  if (syncing) {
    return <SyncingAnimation onDone={() => setSyncing(false)} />;
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 w-full max-w-xl mx-auto overflow-hidden">
      <div className="px-6 pt-6 pb-4">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-2 h-2 bg-emerald-500 rounded-full" />
          <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wide">Calendar synced</span>
        </div>
        <h2 className="text-xl font-bold text-gray-900">Choose Your Appointment</h2>
        <p className="text-sm text-gray-500 mt-1">We found times that work with your schedule.</p>
      </div>

      <div className="px-6 pb-4 flex flex-col gap-3">
        {SYNCED_SLOTS.map((slot) => (
          <button
            key={slot.id}
            onClick={() => setSelected(slot.id)}
            className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-150 cursor-pointer
              ${selected === slot.id
                ? 'border-blue-600 bg-blue-50'
                : 'border-gray-100 hover:border-gray-300 bg-white'
              }`}
          >
            <div className="flex items-start justify-between gap-2">
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <p className="font-semibold text-gray-900 text-sm">{slot.date}</p>
                  {slot.badge && (
                    <span className="text-xs bg-amber-100 text-amber-700 font-semibold px-2 py-0.5 rounded-full">
                      {slot.badge}
                    </span>
                  )}
                </div>
                <p className="text-gray-500 text-sm mt-0.5">{slot.time}</p>
                <p className="text-gray-400 text-xs mt-1">
                  {slot.shop} · {slot.distance}
                </p>
              </div>
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 transition-all
                ${selected === slot.id ? 'border-blue-600 bg-blue-600' : 'border-gray-300'}`}
              >
                {selected === slot.id && (
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
            </div>
          </button>
        ))}
      </div>

      <div className="px-6 py-5 bg-gray-50">
        <button
          onClick={() => selected && onSelect(SYNCED_SLOTS.find((s) => s.id === selected))}
          disabled={!selected}
          className={`w-full py-3 px-6 rounded-xl font-semibold text-sm transition-all duration-150 cursor-pointer
            ${selected
              ? 'bg-blue-600 hover:bg-blue-700 text-white'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
        >
          Confirm Appointment
        </button>
      </div>
    </div>
  );
}
