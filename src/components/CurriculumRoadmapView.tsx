import React from 'react';
import { Map, ArrowRight, ShieldAlert, Sparkles, BookOpenCheck } from 'lucide-react';
import { curriculumMappings, advancedTopicsList } from '../data/roadmapData';

interface CurriculumRoadmapViewProps {
  onSelectLesson: (id: number) => void;
}

export const CurriculumRoadmapView: React.FC<CurriculumRoadmapViewProps> = ({ onSelectLesson }) => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-10">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-blue-50 via-indigo-50/50 to-blue-100/50 dark:from-blue-900/40 dark:via-slate-900 dark:to-indigo-950/40 border border-blue-200 dark:border-blue-500/20 rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-xs">
        <div className="relative z-10 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-600 dark:text-blue-400 text-xs font-semibold">
            <Map className="w-3.5 h-3.5" />
            <span>ស្ថាបត្យកម្មកម្មវិធីសិក្សា • CLEAR Framework</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            ផែនទីសិក្សា និងការរៀបចំឡើងវិញតាមលំដាប់គរុកោសល្យ
          </h1>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 max-w-3xl leading-relaxed">
            ផ្អែកលើការពិនិត្យឯកសារ «មូលដ្ឋានគ្រឹះនៃភាសា JavaScript.docx» ខ្លឹមសារត្រូវបានរៀបចំឡើងវិញពីងាយទៅស្មុគស្មាញ (HTML → CSS → JS Fundamentals → DOM & Events → Projects) ដើម្បីឱ្យនិស្សិតឆ្នាំទី២ អាចយល់កូដ សរសេរកូដដោយខ្លួនឯង និងដោះស្រាយកំហុសបានពិតប្រាកដ។
          </p>
        </div>
      </div>

      {/* Review Summary & Adjustments */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2.5 shadow-xs">
          <div className="flex items-center space-x-2 text-rose-600 dark:text-rose-400">
            <ShieldAlert className="w-5 h-5" />
            <h3 className="font-bold text-sm text-slate-900 dark:text-white">ចំណុចខ្វះខាតក្នុងឯកសារដើមដែលបានកែសម្រួល</h3>
          </div>
          <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-2 list-disc pl-5 leading-relaxed">
            <li><strong>កែសម្រួលកូដហួសសម័យ៖</strong> លុបបំបាត់ការបង្រៀន <code className="text-rose-600 dark:text-rose-300 bg-rose-50 dark:bg-rose-950/30 px-1 py-0.5 rounded">document.write()</code> និងជំនួសដោយ DOM Manipulation API ស្តង់ដារ។</li>
            <li><strong>បំបាត់ការប្រើប្រាស់ <code className="text-rose-600 dark:text-rose-300 bg-rose-50 dark:bg-rose-950/30 px-1 py-0.5 rounded">var</code>៖</strong> ជំនួសដោយ <code className="text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/30 px-1 py-0.5 rounded">const</code> (លំនាំដើម) និង <code className="text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/30 px-1 py-0.5 rounded">let</code> (ពេលផ្លាស់ប្តូរ) ព្រមទាំងពន្យល់ Block Scope។</li>
            <li><strong>ជួសជុល Font Encoding៖</strong> កែសម្រួលសញ្ញាសួរ <code className="text-rose-600 dark:text-rose-300 bg-rose-50 dark:bg-rose-950/30 px-1 py-0.5 rounded">???</code> ដែលខូចទម្រង់ក្នុងឯកសារដើមឱ្យមានន័យពេញលេញ។</li>
            <li><strong>បង្រួមប្រធានបទស្ទួន៖</strong> បញ្ចូល Modules, Error Handling និង Closures ដែលរាយប៉ាយឱ្យនៅកន្លែងសមស្រប។</li>
          </ul>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2.5 shadow-xs">
          <div className="flex items-center space-x-2 text-emerald-600 dark:text-emerald-400">
            <BookOpenCheck className="w-5 h-5" />
            <h3 className="font-bold text-sm text-slate-900 dark:text-white">លំដាប់នៃការសិក្សាស្នូល (14 Core Lessons)</h3>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            លំដាប់សិក្សាត្រូវបានរៀបចំតាមកម្រិតតម្រូវការចំណេះដឹងជាមុន (Prerequisites)៖
          </p>
          <div className="grid grid-cols-2 gap-2 text-xs pt-1">
            <span className="p-2 rounded-lg bg-blue-50 dark:bg-slate-800/80 text-blue-700 dark:text-blue-300 font-medium border border-blue-100 dark:border-transparent">១. Fundamentals (មេរៀន ១-៣)</span>
            <span className="p-2 rounded-lg bg-amber-50 dark:bg-slate-800/80 text-amber-800 dark:text-amber-300 font-medium border border-amber-100 dark:border-transparent">២. Flow & Logic (មេរៀន ៤-៥)</span>
            <span className="p-2 rounded-lg bg-purple-50 dark:bg-slate-800/80 text-purple-700 dark:text-purple-300 font-medium border border-purple-100 dark:border-transparent">៣. Data Structures (មេរៀន ៦-៧)</span>
            <span className="p-2 rounded-lg bg-emerald-50 dark:bg-slate-800/80 text-emerald-800 dark:text-emerald-300 font-medium border border-emerald-100 dark:border-transparent">៤. DOM & Events (មេរៀន ៨-១០)</span>
            <span className="p-2 rounded-lg bg-cyan-50 dark:bg-slate-800/80 text-cyan-800 dark:text-cyan-300 font-medium border border-cyan-100 dark:border-transparent">៥. Storage & Async (មេរៀន ១១-១២)</span>
            <span className="p-2 rounded-lg bg-rose-50 dark:bg-slate-800/80 text-rose-800 dark:text-rose-300 font-medium border border-rose-100 dark:border-transparent">៦. Project (មេរៀន ១៣-១៤)</span>
          </div>
        </div>
      </div>

      {/* Mapping Table */}
      <div className="space-y-4">
        <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <span>តារាងផ្គូផ្គង៖ ប្រធានបទដើម → មេរៀនថ្មី → មូលហេតុនៃការរៀបចំឡើងវិញ</span>
        </h2>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400">
                  <th className="p-3 font-semibold w-12 text-center">#</th>
                  <th className="p-3 font-semibold w-1/4">ប្រធានបទក្នុងឯកសារដើម</th>
                  <th className="p-3 font-semibold w-1/3">មេរៀនថ្មីក្នុងកម្មវិធីសិក្សា</th>
                  <th className="p-3 font-semibold">មូលហេតុនៃការរៀបចំឡើងវិញ</th>
                  <th className="p-3 font-semibold text-center w-20">ចូលរៀន</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                {curriculumMappings.map((row) => (
                  <tr key={row.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                    <td className="p-3 text-center font-mono text-slate-500 dark:text-slate-400">{row.id}</td>
                    <td className="p-3 font-medium text-slate-800 dark:text-slate-300">{row.originalTopic}</td>
                    <td className="p-3 font-bold text-blue-600 dark:text-blue-400">{row.newLesson}</td>
                    <td className="p-3 text-slate-600 dark:text-slate-400 leading-relaxed">{row.reason}</td>
                    <td className="p-3 text-center">
                      <button
                        type="button"
                        onClick={() => onSelectLesson(row.id)}
                        className="p-1.5 rounded-lg bg-blue-50 dark:bg-blue-600/20 hover:bg-blue-600 text-blue-600 dark:text-blue-400 hover:text-white transition-all"
                        title="ចូលទៅមេរៀននេះ"
                      >
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Advanced Topics Track */}
      <div className="space-y-4 pt-4">
        <div className="flex items-center space-x-2 text-amber-600 dark:text-amber-400">
          <Sparkles className="w-5 h-5" />
          <h2 className="text-base font-bold text-slate-900 dark:text-white">
            ជំហានទី៣៖ ផែនការសិក្សាបន្តដាច់ដោយឡែក (Advanced Topics Roadmap)
          </h2>
        </div>
        <p className="text-xs text-slate-600 dark:text-slate-400">
          ប្រធានបទកម្រិតខ្ពស់ទាំងនេះត្រូវបានបំបែកចេញពីមេរៀនដំបូង ដើម្បីការពារកុំឱ្យនិស្សិតចាប់ផ្តើមរៀនមានការភាន់ច្រឡំ ឬធុញថប់៖
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {advancedTopicsList.map((topic, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all space-y-1.5 shadow-xs"
            >
              <span className="text-[11px] font-mono text-amber-600 dark:text-amber-400 font-semibold">
                Advanced #{idx + 1}
              </span>
              <h3 className="font-bold text-xs text-slate-900 dark:text-white leading-snug">{topic.title}</h3>
              <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">{topic.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
