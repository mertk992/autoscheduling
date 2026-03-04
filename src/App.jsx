import { useState } from 'react';
import './index.css';
import ProgressBar from './components/ProgressBar';
import EstimateCard from './components/EstimateCard';
import CalendarSyncPrompt from './components/CalendarSyncPrompt';
import SlotPicker from './components/SlotPicker';
import LocationSlots from './components/LocationSlots';
import ConfirmationScreen from './components/ConfirmationScreen';

// step 0 = estimate, 1 = sync prompt, 2 = schedule (sync), 3 = schedule (manual), 4 = confirm
// For progress bar: estimate=0, sync=1, schedule=2, confirm=3
function stepToProgress(step) {
  if (step === 0) return 0;
  if (step === 1) return 1;
  if (step === 2 || step === 3) return 2;
  return 3;
}

export default function App() {
  const [step, setStep] = useState(0);
  const [appointment, setAppointment] = useState(null);

  const handleApprove = () => setStep(1);
  const handleSync = () => setStep(2);
  const handleManual = () => setStep(3);

  const handleSelect = (slot) => {
    setAppointment(slot);
    setStep(4);
  };

  const handleReset = () => {
    setStep(0);
    setAppointment(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Nav */}
      <header className="bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-2xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <svg className="w-4.5 h-4.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{ width: '18px', height: '18px' }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2 2h10l2-2z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 6l2 4h4l-1 6" />
              </svg>
            </div>
            <span className="font-bold text-gray-900 text-lg tracking-tight">AutoCare</span>
          </div>
          <span className="text-xs text-gray-400 font-medium">Scheduling Portal</span>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 max-w-2xl mx-auto w-full px-4 py-8 flex flex-col">
        {step < 4 && (
          <ProgressBar currentStep={stepToProgress(step)} />
        )}

        <div className="flex-1 flex flex-col items-center justify-start">
          {step === 0 && <EstimateCard onApprove={handleApprove} />}
          {step === 1 && <CalendarSyncPrompt onSync={handleSync} onManual={handleManual} />}
          {step === 2 && <SlotPicker onSelect={handleSelect} />}
          {step === 3 && <LocationSlots onSelect={handleSelect} />}
          {step === 4 && <ConfirmationScreen appointment={appointment} onReset={handleReset} />}
        </div>

        {/* Path indicator (dev helper) */}
        {(step === 2 || step === 3) && (
          <div className="mt-4 text-center">
            <span className={`text-xs font-semibold px-3 py-1 rounded-full ${step === 2 ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-500'}`}>
              {step === 2 ? 'Calendar sync path' : 'Manual selection path'}
            </span>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="text-center py-4 text-xs text-gray-300">
        AutoCare Scheduling © 2025 · Prototype
      </footer>
    </div>
  );
}
