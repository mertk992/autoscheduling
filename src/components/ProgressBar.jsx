const STEPS = ['Estimate', 'Sync', 'Schedule', 'Confirm'];

export default function ProgressBar({ currentStep }) {
  return (
    <div className="w-full max-w-xl mx-auto mb-8">
      <div className="flex items-center justify-between">
        {STEPS.map((label, i) => {
          const done = i < currentStep;
          const active = i === currentStep;
          return (
            <div key={label} className="flex-1 flex flex-col items-center relative">
              {i < STEPS.length - 1 && (
                <div
                  className={`absolute top-4 left-1/2 w-full h-0.5 ${done ? 'bg-blue-600' : 'bg-gray-200'}`}
                  style={{ zIndex: 0 }}
                />
              )}
              <div
                className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold border-2 transition-all duration-300
                  ${done ? 'bg-blue-600 border-blue-600 text-white' : ''}
                  ${active ? 'bg-white border-blue-600 text-blue-600' : ''}
                  ${!done && !active ? 'bg-white border-gray-200 text-gray-400' : ''}
                `}
              >
                {done ? (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  i + 1
                )}
              </div>
              <span
                className={`mt-2 text-xs font-medium ${active ? 'text-blue-600' : done ? 'text-gray-600' : 'text-gray-400'}`}
              >
                {label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
