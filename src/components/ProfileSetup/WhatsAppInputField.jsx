import { useState } from 'react';
import WhatsAppLogo from './WhatsAppLogo';
import { COUNTRY_DIAL_CODES, formatSriLankanNumber } from '../../constants/phoneCountryCodes';

export default function WhatsAppInputField({ value = '', onChange, error }) {
  const [selectedCountry, setSelectedCountry] = useState('+94');

  const handleCountryChange = (e) => {
    const newCode = e.target.value;
    setSelectedCountry(newCode);
    const digits = (value || '').replace(/\D/g, '');
    const cleanDigits = digits.startsWith('94') ? digits.slice(2) : (digits.startsWith('0') ? digits.slice(1) : digits);
    const formatted = cleanDigits ? `${newCode} ${formatSriLankanNumber(cleanDigits)}` : newCode + ' ';
    onChange(formatted);
  };

  const handleInputChange = (e) => {
    const raw = e.target.value;
    const formatted = formatSriLankanNumber(raw, selectedCountry);
    onChange(formatted);
  };

  return (
    <div className="md:col-span-2">
      <label className="text-outline uppercase tracking-wider block mb-1 flex items-center gap-1.5 text-emerald-400">
        <WhatsAppLogo className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
        <span>WhatsApp Number (Alerts & Telemetry) *</span>
      </label>
      <div className="flex gap-2">
        <select
          value={selectedCountry}
          onChange={handleCountryChange}
          className="bg-surface-container-high/80 border border-outline-variant/40 rounded-lg px-2.5 py-2 text-on-surface text-xs font-mono focus:outline-none focus:border-emerald-400 shrink-0 cursor-pointer"
        >
          {COUNTRY_DIAL_CODES.map((c) => (
            <option key={c.code} value={c.dialCode} className="bg-surface-container-high text-on-surface">
              {c.flag} {c.dialCode} ({c.name})
            </option>
          ))}
        </select>
        <input
          id="candidate-phone-input"
          type="tel"
          value={value}
          onChange={handleInputChange}
          placeholder="+94 75 955 5924"
          className={`flex-1 bg-surface-container-high/60 border rounded-lg px-3 py-2 text-on-surface font-mono text-xs focus:outline-none transition-colors ${
            error ? 'border-rose-500 ring-2 ring-rose-500/30' : 'border-outline-variant/40 focus:border-emerald-400'
          }`}
        />
      </div>
      {error && <p className="text-[11px] text-rose-400 mt-1 font-sans">{error}</p>}
    </div>
  );
}
