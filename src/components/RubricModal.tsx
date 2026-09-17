import React from 'react';
import { X, Award, CheckCircle2 } from 'lucide-react';

interface RubricModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RUBRIC_CRITERIA = [
  {
    category: 'មុខងារដំណើរការត្រឹមត្រូវ (Core Features)',
    points: 30,
    details: [
      'បន្ថែម កែប្រែ និងលុបកិច្ចការ (CRUD) បានដោយរលូន',
      'សម្គាល់ Complete / Pending បានត្រឹមត្រូវ',
      'ស្វែងរក (Search) និងច្រោះតាមស្ថានភាព (Filter: All, Pending, Completed)',
      'បង្ហាញស្ថិតិចំនួនកិច្ចការសរុប និងកិច្ចការដែលបានបញ្ចប់'
    ]
  },
  {
    category: 'ការប្រើ JavaScript និងរចនាសម្ព័ន្ធកូដ (Code Architecture)',
    points: 20,
    details: [
      'ប្រើ const ជាលំនាំដើម និង let នៅពេលចាំបាច់ (មិនប្រើ var ឡើយ)',
      'សរសេរ Pure Functions និង Arrow Functions បានត្រឹមត្រូវ',
      'រៀបចំ State Management ច្បាស់លាស់ មិនជាន់គ្នា'
    ]
  },
  {
    category: 'DOM និង Events (DOM & Event Handling)',
    points: 15,
    details: [
      'ប្រើ addEventListener() ជំនួសឱ្យ inline onclick ក្នុង HTML',
      'ប្រើ textContent សម្រាប់អត្ថបទរបស់អ្នកប្រើប្រាស់ (ការពារ XSS)',
      'អនុវត្ត Event Delegation លើបញ្ជីកិច្ចការយ៉ាងមានប្រសិទ្ធភាព'
    ]
  },
  {
    category: 'Validation និង Error Handling',
    points: 10,
    details: [
      'កាត់ Space ដោយ trim() និងពិនិត្យតម្លៃទទេមុននឹងបញ្ចូល',
      'បង្ហាញសារកំហុស (Error feedback) ក្បែរប្រអប់ Input ផ្ទាល់',
      'ប្រើ try...catch ពេល Parsing ទិន្នន័យ JSON'
    ]
  },
  {
    category: 'ការរក្សាទុកទិន្នន័យ (Data Persistence)',
    points: 10,
    details: [
      'រក្សាទុកក្នុង localStorage តាមរយៈ JSON.stringify()',
      'ទាញយកទិន្នន័យមកវិញដោយស្វ័យប្រវត្តិកាលណា Refresh ទំព័រ',
      'មិនរក្សាទុក Passwords ឬ API keys សម្ងាត់ក្នុង storage'
    ]
  },
  {
    category: 'Responsive UI និង Accessibility',
    points: 10,
    details: [
      'រចនាទម្រង់ Responsive (ដំណើរការល្អលើទូរស័ព្ទ និងកុំព្យូទ័រ)',
      'មាន Labels ច្បាស់លាស់សម្រាប់ Form Inputs',
      'មាន Empty State ស្រស់ស្អាតនៅពេលគ្មានទិន្នន័យ'
    ]
  },
  {
    category: 'ការពន្យល់ស្នាដៃ (Code Defense & Presentation)',
    points: 5,
    details: [
      'និស្សិតអាចពន្យល់ដំណើរការលំហូរកូដច្បាស់លាស់',
      'ឆ្លើយសំណួរដោះស្រាយកំហុសបច្ចេកទេសបានត្រឹមត្រូវ'
    ]
  }
];

export const RubricModal: React.FC<RubricModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-slate-950">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">
                តារាងវាយតម្លៃគម្រោងបញ្ចប់ (Project Rubric - ១០០ ពិន្ទុ)
              </h2>
              <p className="text-xs text-slate-400">
                ការវាយតម្លៃ Student Task Manager សម្រាប់និស្សិតឆ្នាំទី២
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-4">
          <div className="bg-blue-950/40 border border-blue-800/40 rounded-xl p-4 text-xs text-blue-200 leading-relaxed">
            💡 <strong>ចំណាំសម្រាប់និស្សិត៖</strong> គម្រោង Student Task Manager ត្រូវបានរចនាឡើងដើម្បីវាយតម្លៃសមត្ថភាពជាក់ស្តែងក្នុងការប្រើប្រាស់ Vanilla JavaScript សុទ្ធដោយមិនពឹងផ្អែកលើ Framework ឡើយ។
          </div>

          <div className="space-y-3">
            {RUBRIC_CRITERIA.map((crit, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/60 flex flex-col sm:flex-row sm:items-start justify-between gap-4"
              >
                <div className="space-y-2 flex-1">
                  <h3 className="font-semibold text-sm text-slate-100 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-slate-700 text-slate-200 text-xs flex items-center justify-center font-mono">
                      {idx + 1}
                    </span>
                    {crit.category}
                  </h3>
                  <ul className="space-y-1.5 text-xs text-slate-400 pl-8 list-disc">
                    {crit.details.map((d, dIdx) => (
                      <li key={dIdx} className="leading-relaxed">
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex sm:flex-col items-center justify-between sm:justify-center p-3 rounded-lg bg-slate-900 border border-slate-800 flex-shrink-0 min-w-[90px] text-center">
                  <span className="text-xl font-bold text-amber-400 font-mono">
                    {crit.points}
                  </span>
                  <span className="text-[11px] text-slate-400 uppercase font-medium">
                    ពិន្ទុអតិបរមា
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-950 flex items-center justify-between text-xs text-slate-400">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            ពិន្ទុសរុប៖ ១០០ ពិន្ទុពេញ
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs transition-colors"
          >
            យល់ព្រម
          </button>
        </div>
      </div>
    </div>
  );
};
