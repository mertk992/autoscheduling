export default function CalendarSyncPrompt({ onSync, onManual }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 w-full max-w-xl mx-auto overflow-hidden">
      <div className="px-8 pt-8 pb-6 text-center">
        {/* Icon */}
        <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-5">
          <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mb-2">Schedule Your Repair</h2>
        <p className="text-gray-500 text-sm leading-relaxed">
          Estimate approved. To find the best time, we can sync with your calendar and automatically match your availability with shop openings.
        </p>
      </div>

      {/* Options */}
      <div className="px-6 pb-8 flex flex-col gap-3">
        {/* Sync option */}
        <button
          onClick={onSync}
          className="w-full flex items-start gap-4 p-4 rounded-xl border-2 border-blue-600 bg-blue-50 hover:bg-blue-100 transition-colors duration-150 text-left cursor-pointer group"
        >
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-blue-700 text-sm">Sync my calendar</p>
            <p className="text-blue-600 text-xs mt-0.5 opacity-80">
              We'll automatically find the earliest slot that works for you — no back and forth.
            </p>
            <div className="flex items-center gap-2 mt-2">
              {['Google', 'Outlook', 'Apple'].map((cal) => (
                <span key={cal} className="text-xs bg-white text-blue-600 border border-blue-200 px-2 py-0.5 rounded-full font-medium">
                  {cal}
                </span>
              ))}
            </div>
          </div>
        </button>

        {/* Manual option */}
        <button
          onClick={onManual}
          className="w-full flex items-start gap-4 p-4 rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors duration-150 text-left cursor-pointer"
        >
          <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
            <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-gray-700 text-sm">No thanks, show me available slots</p>
            <p className="text-gray-400 text-xs mt-0.5">
              Browse open appointments at nearby locations and pick what works for you.
            </p>
          </div>
        </button>

        <p className="text-center text-xs text-gray-400 pt-1">
          Calendar access is read-only and can be revoked at any time.
        </p>
      </div>
    </div>
  );
}
