export default function ConfirmationScreen({ appointment, onReset }) {
  const { date, time, shop, distance } = appointment;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 w-full max-w-xl mx-auto overflow-hidden">
      {/* Success header */}
      <div className="bg-emerald-600 px-6 py-8 text-white text-center">
        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold">Appointment Booked!</h2>
        <p className="text-emerald-100 text-sm mt-1">You're all set. We'll send a reminder 24 hours before.</p>
      </div>

      {/* Details */}
      <div className="px-6 py-6">
        <div className="rounded-xl bg-gray-50 border border-gray-100 divide-y divide-gray-100">
          {[
            {
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              ),
              label: 'Date & Time',
              value: `${date} · ${time}`,
            },
            {
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              ),
              icon2: <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />,
              label: 'Location',
              value: `${shop} · ${distance}`,
            },
            {
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
              ),
              label: 'Vehicle',
              value: '2019 Honda Civic LX',
            },
            {
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              ),
              label: 'Estimate',
              value: '$840.00 (confirmed at inspection)',
            },
          ].map(({ icon, icon2, label, value }) => (
            <div key={label} className="flex items-center gap-4 px-4 py-3.5">
              <div className="w-9 h-9 bg-white border border-gray-100 rounded-lg flex items-center justify-center shrink-0 shadow-sm">
                <svg className="w-4.5 h-4.5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{ width: '18px', height: '18px' }}>
                  {icon}
                  {icon2}
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-400 font-medium">{label}</p>
                <p className="text-sm font-semibold text-gray-800 mt-0.5">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="px-6 pb-6 flex flex-col gap-3">
        <button className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl border-2 border-blue-600 text-blue-600 font-semibold text-sm hover:bg-blue-50 transition-colors duration-150 cursor-pointer">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
          Add to Calendar
        </button>
        <button
          onClick={onReset}
          className="text-gray-400 hover:text-gray-600 text-sm font-medium text-center py-1 transition-colors cursor-pointer"
        >
          Start over
        </button>
      </div>
    </div>
  );
}
