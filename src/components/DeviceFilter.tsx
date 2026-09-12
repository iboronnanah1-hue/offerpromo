import React from 'react';
import { Smartphone, Tablet } from 'lucide-react';
import { DeviceType } from '../types';

interface DeviceFilterProps {
  selectedDevice: DeviceType;
  onSelectDevice: (device: DeviceType) => void;
}

export const DeviceFilter: React.FC<DeviceFilterProps> = ({
  selectedDevice,
  onSelectDevice,
}) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs max-w-xl mx-auto mb-10 text-center">
      <div className="flex items-center justify-center gap-2 mb-2">
        <Smartphone className="w-5 h-5 text-blue-600" />
        <h3 className="text-base sm:text-lg font-bold text-slate-900">
          Which device are you using?
        </h3>
      </div>
      <p className="text-xs sm:text-sm text-slate-500 mb-5">
        Select your operating system to view promotions tailored to your device requirements.
      </p>

      {/* Selector Buttons */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-md mx-auto">
        {/* Android Button */}
        <button
          type="button"
          onClick={() => onSelectDevice(selectedDevice === 'android' ? 'all' : 'android')}
          className={`flex items-center justify-center gap-2.5 px-4 py-3.5 rounded-xl font-semibold text-sm sm:text-base transition-all cursor-pointer border ${
            selectedDevice === 'android'
              ? 'bg-slate-900 text-white border-slate-900 shadow-md ring-2 ring-blue-600/20'
              : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-slate-300'
          }`}
        >
          {/* Custom Android / Smartphone icon */}
          <Smartphone className={`w-4 h-4 ${selectedDevice === 'android' ? 'text-emerald-400' : 'text-slate-500'}`} />
          <span>Android</span>
        </button>

        {/* iPhone / iPad Button */}
        <button
          type="button"
          onClick={() => onSelectDevice(selectedDevice === 'ios' ? 'all' : 'ios')}
          className={`flex items-center justify-center gap-2.5 px-4 py-3.5 rounded-xl font-semibold text-sm sm:text-base transition-all cursor-pointer border ${
            selectedDevice === 'ios'
              ? 'bg-slate-900 text-white border-slate-900 shadow-md ring-2 ring-blue-600/20'
              : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-slate-300'
          }`}
        >
          {/* Apple / Tablet icon */}
          <Tablet className={`w-4 h-4 ${selectedDevice === 'ios' ? 'text-blue-400' : 'text-slate-500'}`} />
          <span>iPhone / iPad</span>
        </button>
      </div>

      {/* Selected Indicator Note */}
      <div className="mt-3 text-[12px] text-slate-500">
        {selectedDevice === 'android' && (
          <span className="text-emerald-700 font-medium">
            ✓ Highlighting Android-compatible promotions (Walmart &amp; Ulta)
          </span>
        )}
        {selectedDevice === 'ios' && (
          <span className="text-blue-700 font-medium">
            ✓ Highlighting Apple iOS-compatible promotion (Gas Gift Card)
          </span>
        )}
        {selectedDevice === 'all' && (
          <span>Select your device above or browse all offers below.</span>
        )}
      </div>
    </div>
  );
};
