import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  Maximize2,
  X,
  Layers,
  Code2,
  Palette,
  Cpu,
  AlertCircle,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

interface TrinityPillar {
  id: 'html' | 'css' | 'js';
  titleKh: string;
  titleEn: string;
  analogyKh: string;
  analogyEn: string;
  badge: string;
  accentColor: string;
  borderColor: string;
  bgColor: string;
  textColor: string;
  imageSrc: string;
  imageAlt: string;
  imageCaption: string;
  icon: React.ElementType;
  humanAnalogy: string;
  webRole: string;
  coreElements: string[];
  withoutThis: string;
  exampleSnippet: string;
}

const PILLARS: TrinityPillar[] = [
  {
    id: 'html',
    titleKh: 'HTML (HyperText Markup Language)',
    titleEn: 'HTML5 Semantic Architecture',
    analogyKh: 'គ្រោងឆ្អឹង (Skeleton)',
    analogyEn: 'The Structural Framework',
    badge: 'Structure • គ្រោងឆ្អឹង',
    accentColor: 'from-amber-500 to-orange-600',
    borderColor: 'border-amber-300 dark:border-amber-800/80',
    bgColor: 'bg-amber-50/70 dark:bg-amber-950/20',
    textColor: 'text-amber-700 dark:text-amber-400',
    imageSrc: 'https://images.unsplash.com/photo-1530210124550-912dc1381cb8?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'គ្រោងឆ្អឹងមនុស្ស (Human Skeleton Anatomical Model)',
    imageCaption: '🦴 គ្រោងឆ្អឹងរឹងមាំកំណត់រាងកាយ និងទ្រទ្រង់សរីរាង្គ',
    icon: Layers,
    humanAnalogy: 'ប្រៀបដូចជាគ្រោងឆ្អឹងទាំង ២០៦ កំណាត់ និងឆ្អឹងខ្នងដែលទ្រទ្រង់សរីរាង្គមនុស្ស។ បើគ្មានឆ្អឹង សាច់និងស្បែកមិនអាចឈរឡើងបានឡើយ។',
    webRole: 'បង្កើតគ្រោងសំណង់ ថត និងស្លាកកូដកំណត់អត្ថន័យទិន្នន័យ (Semantic Structure) ដូចជា ក្បាលទំព័រ មាតិកា ប៊ូតុង និងទម្រង់បញ្ចូល។',
    coreElements: ['<header>', '<main>', '<article>', '<nav>', '<button>', '<form>'],
    withoutThis: 'វេបសាយមិនអាចកើតមានបានឡើយ ព្រោះគ្មានគ្រោងឆ្អឹង និងគ្មានទិន្នន័យសម្រាប់បង្ហាញ។',
    exampleSnippet: `<article class="user-card">\n  <h2>សុខ សំណាង</h2>\n  <p>និស្សិតឆ្នាំទី៣</p>\n  <button id="view-profile">មើលប្រវត្តិ</button>\n</article>`
  },
  {
    id: 'css',
    titleKh: 'CSS (Cascading Style Sheets)',
    titleEn: 'Modern Responsive Design & Styling',
    analogyKh: 'ស្បែក និងសម្លៀកបំពាក់ (Skin & Clothing)',
    analogyEn: 'Aesthetics, Polish & Presentation',
    badge: 'Styling • សោភ័ណភាព',
    accentColor: 'from-sky-500 to-blue-600',
    borderColor: 'border-sky-300 dark:border-sky-800/80',
    bgColor: 'bg-sky-50/70 dark:bg-sky-950/20',
    textColor: 'text-sky-700 dark:text-sky-400',
    imageSrc: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'សម្លៀកបំពាក់ ពណ៌សម្បុរ និងម៉ូដ (Fashion, Aesthetics & Styling)',
    imageCaption: '✨ ពណ៌សម្បុរ ស្បែក និងសម្លៀកបំពាក់ស្រស់ស្អាតទាក់ទាញ',
    icon: Palette,
    humanAnalogy: 'ប្រៀបដូចជាពណ៌សម្បុរស្បែក ម៉ូដសក់ និងសម្លៀកបំពាក់សមសួន ដែលធ្វើឱ្យមនុស្សម្នាក់មានសោភ័ណភាព ភាពថ្លៃថ្នូរ និងទាក់ទាញភ្នែកអ្នកដទៃ។',
    webRole: 'កំណត់ពណ៌ គម្លាត ពុម្ពអក្សរ ការតម្រៀប Layout (Flexbox/Grid) និងចលនា Animating ឱ្យទំព័រវេបសាយមើលទៅប្រណិត និងឆ្លើយតបគ្រប់អេក្រង់។',
    coreElements: ['display: flex', 'grid-template', 'border-radius', 'transition', 'box-shadow', '@media'],
    withoutThis: 'ទំព័រវេបសាយនៅសល់ត្រឹមតែអត្ថបទខ្មៅនៅលើផ្ទៃស រដុបរដុះ គ្មានគម្លាត និងគ្មានភាពទាក់ទាញទាល់តែសោះ។',
    exampleSnippet: `.user-card {\n  display: flex;\n  border-radius: 1rem;\n  padding: 1.5rem;\n  background: #ffffff;\n  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);\n}`
  },
  {
    id: 'js',
    titleKh: 'JavaScript (Dynamic Engine)',
    titleEn: 'Logic, Brain & Interactive Synapses',
    analogyKh: 'ប្រព័ន្ធប្រសាទ និងខួរក្បាល (Brain & Nerves)',
    analogyEn: 'Logic, Reasoning & Event Reaction',
    badge: 'Logic • ខួរក្បាលបញ្ជា',
    accentColor: 'from-amber-400 to-yellow-500',
    borderColor: 'border-yellow-300 dark:border-yellow-800/80',
    bgColor: 'bg-yellow-50/70 dark:bg-yellow-950/20',
    textColor: 'text-amber-800 dark:text-yellow-400',
    imageSrc: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'បណ្តាញខួរក្បាល និងប្រព័ន្ធប្រសាទ (Brain Neural Network)',
    imageCaption: '⚡ ខួរក្បាលគិត គណនា និងប្រព័ន្ធប្រសាទបញ្ជាឱ្យធ្វើសកម្មភាព',
    icon: Cpu,
    humanAnalogy: 'ប្រៀបដូចជាខួរក្បាលដែលចេះគិត គណនា ចងចាំ និងបណ្តាញប្រសាទដែលបញ្ជាសាច់ដុំឱ្យធ្វើចលនា ដើរ និយាយ ឬដកដៃចេញពេលប៉ះរបស់ក្តៅ។',
    webRole: 'គ្រប់គ្រងតក្កវិជ្ជា (Logic) គណនាទិន្នន័យ ទទួល Event ពីអ្នកប្រើ (ចុច Click, វាយអក្សរ Type), ទាញទិន្នន័យពី Server (API) និងធ្វើបច្ចុប្បន្នភាព DOM ដោយមិនចាំបាច់ Reload ទំព័រ។',
    coreElements: ['addEventListener', 'fetch(API)', 'document.querySelector', 'async/await', 'state', 'functions'],
    withoutThis: 'ទំព័រវេបសាយដូចជារូបសំណាកថ្ម ស្អាតតែគ្មានចលនា មិនអាចឆ្លើយតប មិនអាចគណនា ឬរក្សាទុកទិន្នន័យអ្វីបានឡើយ។',
    exampleSnippet: `const btn = document.querySelector('#view-profile');\nbtn.addEventListener('click', () => {\n  console.log('កំពុងទាញទិន្នន័យពី Server...');\n  alert('សូមស្វាគមន៍មកកាន់ប្រវត្តិរូប!');\n});`
  }
];

interface TrinityVisualComparisonProps {
  onOpenCode?: (code: string) => void;
}

export const TrinityVisualComparison: React.FC<TrinityVisualComparisonProps> = ({ onOpenCode }) => {
  const [activeModalPillar, setActiveModalPillar] = useState<TrinityPillar | null>(null);
  const [activeMissingTest, setActiveMissingTest] = useState<'html' | 'css' | 'js' | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'detailed'>('grid');

  return (
    <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-6 shadow-xs">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 text-[11px] font-semibold text-blue-700 dark:text-blue-300 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-blue-500" />
            <span>ការប្រៀបធៀបរូបភាពជាក់ស្តែង (Visual Trinity Analogy)</span>
          </div>
          <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
            ការប្រៀបធៀបរូបភាព៖ HTML • CSS • JavaScript ជាមួយរាងកាយមនុស្ស
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
            ដើម្បីយល់ច្បាស់ពីស្ថាបត្យកម្ម Web ទាំង ៣ សូមពិនិត្យមើលការប្រៀបធៀបរូបភាពខាងក្រោមដែលតំណាងឱ្យ <strong>គ្រោងឆ្អឹង</strong>, <strong>ស្បែក/សម្លៀកបំពាក់</strong>, និង <strong>ខួរក្បាល/ប្រព័ន្ធប្រសាទ</strong>៖
          </p>
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center self-start sm:self-auto bg-slate-100 dark:bg-slate-800 p-1 rounded-xl text-xs font-medium">
          <button
            type="button"
            onClick={() => setViewMode('grid')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              viewMode === 'grid'
                ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-2xs font-semibold'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            ផ្ទាំងទន្ទឹមគ្នា (3 Pillars)
          </button>
          <button
            type="button"
            onClick={() => setViewMode('detailed')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              viewMode === 'detailed'
                ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-2xs font-semibold'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            ពន្យល់លម្អិត & កូដ
          </button>
        </div>
      </div>

      {/* Grid Mode (Visual Cards with Prominent Images) */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            const isDimmed = activeMissingTest === pillar.id;

            return (
              <motion.div
                key={pillar.id}
                layout
                className={`relative rounded-2xl border ${pillar.borderColor} ${pillar.bgColor} overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-xs hover:shadow-md ${
                  isDimmed ? 'opacity-35 grayscale scale-[0.98]' : 'opacity-100'
                }`}
              >
                {/* Image Section */}
                <div className="relative aspect-[16/11] overflow-hidden group cursor-pointer bg-slate-950">
                  <img
                    src={pillar.imageSrc}
                    alt={pillar.imageAlt}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onClick={() => setActiveModalPillar(pillar)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                  {/* Top Badge */}
                  <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 bg-black/65 backdrop-blur-xs px-2.5 py-1 rounded-full text-[11px] font-medium text-white border border-white/20">
                    <Icon className="w-3.5 h-3.5 text-amber-400" />
                    <span>{pillar.badge}</span>
                  </div>

                  {/* Zoom Button */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveModalPillar(pillar);
                    }}
                    className="absolute top-2.5 right-2.5 p-1.5 rounded-full bg-black/60 hover:bg-black/80 text-white/90 hover:text-white border border-white/20 transition-all opacity-80 group-hover:opacity-100 shadow-sm"
                    title="ពង្រីករូបភាពទំហំធំ (Zoom Image)"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>

                  {/* Bottom Caption on Image */}
                  <div className="absolute bottom-2 left-3 right-3 text-white">
                    <p className="text-xs font-semibold drop-shadow-sm flex items-center gap-1">
                      {pillar.imageCaption}
                    </p>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div>
                      <span className={`text-[11px] font-bold uppercase tracking-wider ${pillar.textColor}`}>
                        {pillar.analogyKh}
                      </span>
                      <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                        {pillar.titleKh}
                      </h3>
                    </div>

                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {pillar.humanAnalogy}
                    </p>
                  </div>

                  {/* Web Role Info */}
                  <div className="p-3 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 text-xs space-y-1.5">
                    <div className="font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                      <Code2 className="w-3.5 h-3.5 text-blue-500" />
                      <span>តួនាទីក្នុងទំព័រ Web៖</span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-[11px]">
                      {pillar.webRole}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1">
                    {pillar.coreElements.map((elem, eIdx) => (
                      <span
                        key={eIdx}
                        className="px-2 py-0.5 rounded-md font-mono text-[10px] bg-slate-200/70 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium"
                      >
                        {elem}
                      </span>
                    ))}
                  </div>

                  {/* Action button to test code */}
                  {onOpenCode && (
                    <button
                      type="button"
                      onClick={() => onOpenCode(pillar.exampleSnippet)}
                      className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700/80 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 text-xs font-semibold transition-all shadow-2xs hover:shadow-xs active:scale-[0.98]"
                    >
                      <span>សាកល្បងកូដគំរូក្នុង Playground</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      ) : (
        /* Detailed View Mode */
        <div className="space-y-6">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className={`p-5 rounded-2xl border ${pillar.borderColor} ${pillar.bgColor} grid grid-cols-1 lg:grid-cols-12 gap-6 items-center`}
              >
                {/* Image Column */}
                <div className="lg:col-span-4 relative aspect-[16/10] rounded-xl overflow-hidden shadow-sm group bg-slate-900">
                  <img
                    src={pillar.imageSrc}
                    alt={pillar.imageAlt}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute bottom-2 left-2.5 right-2.5 text-[11px] font-medium text-white drop-shadow-sm">
                    {pillar.imageCaption}
                  </span>
                  <button
                    type="button"
                    onClick={() => setActiveModalPillar(pillar)}
                    className="absolute top-2 right-2 p-1.5 rounded-full bg-black/60 text-white/90 hover:text-white"
                    title="Zoom"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Details Column */}
                <div className="lg:col-span-8 space-y-3 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="p-1.5 rounded-lg bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-2xs">
                      <Icon className="w-4 h-4" />
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                      {pillar.titleKh} — <span className={pillar.textColor}>{pillar.analogyKh}</span>
                    </h3>
                  </div>

                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-xs sm:text-sm">
                    {pillar.humanAnalogy}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
                      <span className="font-bold text-emerald-600 dark:text-emerald-400 block text-[11px]">
                        ✓ តួនាទីក្នុង Web៖
                      </span>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-[11px]">
                        {pillar.webRole}
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
                      <span className="font-bold text-rose-600 dark:text-rose-400 block text-[11px]">
                        ✕ ផលវិបាកបើគ្មានសមាសភាគនេះ៖
                      </span>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-[11px]">
                        {pillar.withoutThis}
                      </p>
                    </div>
                  </div>

                  {/* Code snippet & button */}
                  {onOpenCode && (
                    <div className="flex justify-end pt-1">
                      <button
                        type="button"
                        onClick={() => onOpenCode(pillar.exampleSnippet)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 dark:bg-slate-100 hover:bg-slate-800 dark:hover:bg-white text-white dark:text-slate-900 text-xs font-semibold transition-all shadow-xs active:scale-95"
                      >
                        <Code2 className="w-3.5 h-3.5" />
                        <span>ដំណើរការកូដគំរូក្នុង Playground</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Interactive Simulation: "តើមានអ្វីកើតឡើងបើខ្វះសមាសភាគណាមួយ?" */}
      <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <span className="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
            <AlertCircle className="w-4 h-4 text-amber-500" />
            <span>ឧបករណ៍សាកល្បង៖ តើមានអ្វីកើតឡើងបើខ្វះសមាសភាគណាមួយ? (Simulation Test)</span>
          </span>

          <div className="flex items-center gap-1.5">
            {(['html', 'css', 'js'] as const).map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => setActiveMissingTest(activeMissingTest === key ? null : key)}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all border ${
                  activeMissingTest === key
                    ? 'bg-rose-600 text-white border-rose-600 shadow-xs'
                    : 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-600'
                }`}
              >
                {activeMissingTest === key ? `✕ បាត់ ${key.toUpperCase()}` : `ដក ${key.toUpperCase()}`}
              </button>
            ))}

            {activeMissingTest && (
              <button
                type="button"
                onClick={() => setActiveMissingTest(null)}
                className="text-[11px] text-blue-600 dark:text-blue-400 underline font-medium ml-1"
              >
                កំណត់ឡើងវិញ (Reset)
              </button>
            )}
          </div>
        </div>

        {activeMissingTest && (
          <div className="p-3.5 rounded-lg bg-rose-50/80 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/50 text-xs text-rose-800 dark:text-rose-200 space-y-1 animate-fadeIn">
            <div className="font-bold flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4 text-rose-600 dark:text-rose-400" />
              <span>
                ផលប៉ះពាល់ជាក់ស្តែងពេលបាត់បង់ {activeMissingTest.toUpperCase()}៖
              </span>
            </div>
            <p className="leading-relaxed text-[11px]">
              {PILLARS.find((p) => p.id === activeMissingTest)?.withoutThis}
            </p>
          </div>
        )}
      </div>

      {/* Lightbox / Zoom Modal */}
      <AnimatePresence>
        {activeModalPillar && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs"
            onClick={() => setActiveModalPillar(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full bg-slate-900 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl"
            >
              <div className="relative aspect-[16/10] w-full bg-black">
                <img
                  src={activeModalPillar.imageSrc}
                  alt={activeModalPillar.imageAlt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <button
                  type="button"
                  onClick={() => setActiveModalPillar(null)}
                  className="absolute top-3 right-3 p-2 rounded-full bg-black/70 hover:bg-black text-white transition-all shadow-md"
                  title="បិទ (Close)"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-5 text-white space-y-2">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-mono text-xs font-semibold">
                    {activeModalPillar.badge}
                  </span>
                  <h3 className="text-base font-bold">
                    {activeModalPillar.titleKh}
                  </h3>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {activeModalPillar.humanAnalogy}
                </p>
                <div className="text-[11px] text-slate-400 pt-1">
                  <strong>តួនាទីក្នុង Web៖</strong> {activeModalPillar.webRole}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
