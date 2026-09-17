import React, { useState } from 'react';
import {
  Layers,
  Palette,
  Zap,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Play,
  RotateCcw,
  User,
  Home,
  Car
} from 'lucide-react';

export interface WebTrinityDiagramProps {
  className?: string;
  defaultExpanded?: boolean;
  collapsible?: boolean;
  onOpenCode?: (code: string) => void;
}

export const WebTrinityDiagram: React.FC<WebTrinityDiagramProps> = ({
  className = '',
  defaultExpanded = true,
  collapsible = false,
  onOpenCode
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(defaultExpanded);
  const [activeAnalogy, setActiveAnalogy] = useState<'body' | 'house' | 'car'>('body');
  
  // Interactive Live Trinity Simulator state
  const [simMode, setSimMode] = useState<'html' | 'html-css' | 'trinity'>('trinity');
  const [simClicks, setSimClicks] = useState<number>(0);
  const [simMessage, setSimMessage] = useState<string>('');
  const [simHeartActive, setSimHeartActive] = useState<boolean>(false);

  const handleSimButtonClick = () => {
    if (simMode === 'html') {
      // In HTML only mode, no JS is handling events in normal web!
      // But we show a teaching feedback banner
      setSimMessage('⚠️ ក្នុង HTML តែមួយ៖ គ្មាន JavaScript ដើម្បីចាប់យក Event ឡើយ! ទំព័រមិនអាចធ្វើអ្វីបានទេ។');
    } else if (simMode === 'html-css') {
      setSimMessage('🎨 ក្នុង HTML + CSS៖ ប៊ូតុងស្អាតល្អ តែគ្មាន JavaScript គ្មានខួរក្បាលគិត ដូច្នេះនៅតែមិនអាចឆ្លើយតបនឹងការចុចបានដដែល!');
    } else {
      // Full Trinity (HTML + CSS + JS)
      const nextCount = simClicks + 1;
      setSimClicks(nextCount);
      setSimHeartActive(true);
      setTimeout(() => setSimHeartActive(false), 600);
      setSimMessage(`⚡ JavaScript ដំណើរការ៖ បានចុច ${nextCount} ដង! DOM បានផ្លាស់ប្តូរទិន្នន័យភ្លាមៗដោយមិនចាំបាច់ Reload ទំព័រ!`);
    }
  };

  const handleResetSim = () => {
    setSimClicks(0);
    setSimMessage('');
    setSimHeartActive(false);
  };

  const sampleCombinedCode = `<!-- 1. HTML: រចនាសម្ព័ន្ធ (Structure) -->
<div class="card">
  <h2 id="title">ស្វាគមន៍មកកាន់ Web Trinity</h2>
  <button id="action-btn">ចុចទីនេះ</button>
  <p id="counter">ចំនួនចុច៖ 0</p>
</div>

/* 2. CSS: សោភ័ណភាព (Presentation) */
<style>
  .card { padding: 16px; border-radius: 12px; background: #f8fafc; }
  #action-btn { background: #2563eb; color: white; padding: 8px 16px; border-radius: 6px; }
</style>

// 3. JavaScript: ឥរិយាបថ (Behavior & Logic)
<script>
  let count = 0;
  const btn = document.getElementById("action-btn");
  const counterText = document.getElementById("counter");
  btn.addEventListener("click", () => {
    count++;
    counterText.textContent = "ចំនួនចុច៖ " + count;
  });
</script>`;

  return (
    <div
      id="web-trinity-container"
      className={`rounded-2xl border border-blue-200 dark:border-blue-900/60 bg-gradient-to-b from-blue-50/50 via-white to-slate-50 dark:from-slate-900/90 dark:via-slate-900/70 dark:to-slate-950 p-5 sm:p-6 shadow-xs transition-all ${className}`}
    >
      {/* Header with Title and Collapsible Toggle */}
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-500/20">
              <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              ស្ថាបត្យកម្មស្នូល Front-End
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
              HTML • CSS • JavaScript
            </span>
          </div>
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <span>The Web Trinity (ត្រីកោណបច្ចេកវិទ្យាបណ្ដាញ)</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            ស្វែងយល់ពីតួនាទីស្នូល និងការរួមសហការគ្នាយ៉ាងស្អិតល្មួតរវាងបច្ចេកវិទ្យាទាំង ៣ ក្នុងការកសាងគេហទំព័រទំនើប។
          </p>
        </div>

        {collapsible && (
          <button
            type="button"
            id="toggle-trinity-btn"
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-2 rounded-xl text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-2xs transition-colors flex items-center gap-1 text-xs"
            aria-label="Toggle Web Trinity explanation"
          >
            <span className="hidden sm:inline font-medium">
              {isExpanded ? 'បង្រួម' : 'ពន្លាតមើលលម្អិត'}
            </span>
            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        )}
      </div>

      {isExpanded && (
        <div className="mt-6 space-y-6">
          {/* 1. Tri-Pillar Architecture Diagram (3 Columns) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Pillar 1: HTML */}
            <div
              id="trinity-pillar-html"
              className="rounded-xl border border-amber-300 dark:border-amber-800/60 bg-amber-50/60 dark:bg-amber-950/20 p-4 space-y-3 relative overflow-hidden transition-all hover:border-amber-400 dark:hover:border-amber-700"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">១. HTML</h3>
                    <p className="text-[10px] text-amber-700 dark:text-amber-400 font-medium">HyperText Markup Language</p>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-amber-200 dark:bg-amber-900/50 text-amber-800 dark:text-amber-200">
                  Structure
                </span>
              </div>

              <div className="space-y-2 text-xs">
                <div className="p-2 rounded-lg bg-white/80 dark:bg-slate-900/80 border border-amber-200/60 dark:border-amber-900/30">
                  <span className="font-semibold text-slate-800 dark:text-slate-200 block text-[11px]">
                    តួនាទីស្នូល (Core Role):
                  </span>
                  <p className="text-slate-600 dark:text-slate-400 text-[11px] mt-0.5 leading-relaxed">
                    បង្កើត<strong>រចនាសម្ព័ន្ធ និងខ្លឹមសារ</strong> (ឆ្អឹងអគារ) ដូចជា ចំណងជើង កថាខណ្ឌ ប៊ូតុង រូបភាព និងទម្រង់ Form។
                  </p>
                </div>

                <div className="text-[11px] text-slate-700 dark:text-slate-300 space-y-1">
                  <p><strong>សំណួរគន្លឹះ៖</strong> «តើមានអ្វីខ្លះនៅលើទំព័រ?»</p>
                  <p><strong>ធាតុគំរូ៖</strong> <code className="text-amber-700 dark:text-amber-300 font-mono text-[10px]">&lt;h1&gt;</code>, <code className="text-amber-700 dark:text-amber-300 font-mono text-[10px]">&lt;p&gt;</code>, <code className="text-amber-700 dark:text-amber-300 font-mono text-[10px]">&lt;button&gt;</code></p>
                </div>
              </div>

              <div className="pt-2 border-t border-amber-200 dark:border-amber-900/40 text-[11px] font-mono text-amber-900 dark:text-amber-300 bg-amber-100/60 dark:bg-amber-950/40 p-2 rounded-md overflow-x-auto">
                <code>&lt;button id=&quot;btn&quot;&gt;ចុចទីនេះ&lt;/button&gt;</code>
              </div>
            </div>

            {/* Pillar 2: CSS */}
            <div
              id="trinity-pillar-css"
              className="rounded-xl border border-sky-300 dark:border-sky-800/60 bg-sky-50/60 dark:bg-sky-950/20 p-4 space-y-3 relative overflow-hidden transition-all hover:border-sky-400 dark:hover:border-sky-700"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-lg bg-sky-500/20 text-sky-600 dark:text-sky-400 flex items-center justify-center font-bold">
                    <Palette className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">២. CSS</h3>
                    <p className="text-[10px] text-sky-700 dark:text-sky-400 font-medium">Cascading Style Sheets</p>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-sky-200 dark:bg-sky-900/50 text-sky-800 dark:text-sky-200">
                  Presentation
                </span>
              </div>

              <div className="space-y-2 text-xs">
                <div className="p-2 rounded-lg bg-white/80 dark:bg-slate-900/80 border border-sky-200/60 dark:border-sky-900/30">
                  <span className="font-semibold text-slate-800 dark:text-slate-200 block text-[11px]">
                    តួនាទីស្នូល (Core Role):
                  </span>
                  <p className="text-slate-600 dark:text-slate-400 text-[11px] mt-0.5 leading-relaxed">
                    ផ្តល់<strong>សោភ័ណភាព និងការតុបតែង</strong> កំណត់ពណ៌ អក្សរ គម្លាត ប្លង់ (Flexbox/Grid) និងទំហំឱ្យស្រស់ស្អាត។
                  </p>
                </div>

                <div className="text-[11px] text-slate-700 dark:text-slate-300 space-y-1">
                  <p><strong>សំណួរគន្លឹះ៖</strong> «តើវាមានរូបរាង និងពណ៌បែបណា?»</p>
                  <p><strong>ធាតុគំរូ៖</strong> <code className="text-sky-700 dark:text-sky-300 font-mono text-[10px]">color</code>, <code className="text-sky-700 dark:text-sky-300 font-mono text-[10px]">background</code>, <code className="text-sky-700 dark:text-sky-300 font-mono text-[10px]">border-radius</code></p>
                </div>
              </div>

              <div className="pt-2 border-t border-sky-200 dark:border-sky-900/40 text-[11px] font-mono text-sky-900 dark:text-sky-300 bg-sky-100/60 dark:bg-sky-950/40 p-2 rounded-md overflow-x-auto">
                <code>#btn &#123; background: #2563eb; color: #fff; &#125;</code>
              </div>
            </div>

            {/* Pillar 3: JavaScript */}
            <div
              id="trinity-pillar-js"
              className="rounded-xl border border-yellow-300 dark:border-yellow-800/60 bg-yellow-50/60 dark:bg-yellow-950/20 p-4 space-y-3 relative overflow-hidden transition-all hover:border-yellow-400 dark:hover:border-yellow-700"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-lg bg-yellow-500/20 text-yellow-600 dark:text-yellow-400 flex items-center justify-center font-bold">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">៣. JavaScript</h3>
                    <p className="text-[10px] text-yellow-700 dark:text-yellow-400 font-medium">Programming & Scripting Language</p>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-yellow-200 dark:bg-yellow-900/50 text-yellow-800 dark:text-yellow-200">
                  Behavior & Logic
                </span>
              </div>

              <div className="space-y-2 text-xs">
                <div className="p-2 rounded-lg bg-white/80 dark:bg-slate-900/80 border border-yellow-200/60 dark:border-yellow-900/30">
                  <span className="font-semibold text-slate-800 dark:text-slate-200 block text-[11px]">
                    តួនាទីស្នូល (Core Role):
                  </span>
                  <p className="text-slate-600 dark:text-slate-400 text-[11px] mt-0.5 leading-relaxed">
                    ផ្តល់<strong>ប្រព័ន្ធប្រសាទ និងខួរក្បាលគិត</strong> ឆ្លើយតបនឹងការចុច (Events) គណនាទិន្នន័យ និងធ្វើឱ្យគេហទំព័ររស់រវើក។
                  </p>
                </div>

                <div className="text-[11px] text-slate-700 dark:text-slate-300 space-y-1">
                  <p><strong>សំណួរគន្លឹះ៖</strong> «តើវាឆ្លើយតប និងមានប្រតិកម្មដូចម្តេច?»</p>
                  <p><strong>ធាតុគំរូ៖</strong> <code className="text-yellow-700 dark:text-yellow-300 font-mono text-[10px]">addEventListener</code>, <code className="text-yellow-700 dark:text-yellow-300 font-mono text-[10px]">innerHTML</code></p>
                </div>
              </div>

              <div className="pt-2 border-t border-yellow-200 dark:border-yellow-900/40 text-[11px] font-mono text-yellow-900 dark:text-yellow-300 bg-yellow-100/60 dark:bg-yellow-950/40 p-2 rounded-md overflow-x-auto">
                <code>btn.onclick = () =&gt; alert(&quot;សួស្តី!&quot;);</code>
              </div>
            </div>
          </div>

          {/* 2. Interactive Comparison Simulator (Live Demonstration) */}
          <div
            id="trinity-live-simulator"
            className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 shadow-xs"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100 dark:border-slate-800">
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                  <Play className="w-4 h-4 text-emerald-600 dark:text-emerald-400 fill-current" />
                  <span>ឧបករណ៍ពិសោធន៍ជាក់ស្តែង</span>
                </h4>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                  ផ្លាស់ប្តូររបៀបខាងក្រោមដើម្បីមើលឃើញជាក់ស្តែងពីភាពខុសគ្នានៃការរួមបញ្ចូលគ្នា៖
                </p>
              </div>

              {/* Mode Toggles */}
              <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
                <button
                  type="button"
                  id="sim-mode-html"
                  onClick={() => {
                    setSimMode('html');
                    setSimMessage('');
                  }}
                  className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition-all ${
                    simMode === 'html'
                      ? 'bg-white dark:bg-slate-700 text-amber-700 dark:text-amber-300 shadow-xs'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  HTML តែមួយ
                </button>
                <button
                  type="button"
                  id="sim-mode-html-css"
                  onClick={() => {
                    setSimMode('html-css');
                    setSimMessage('');
                  }}
                  className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition-all ${
                    simMode === 'html-css'
                      ? 'bg-white dark:bg-slate-700 text-sky-700 dark:text-sky-300 shadow-xs'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  HTML + CSS
                </button>
                <button
                  type="button"
                  id="sim-mode-trinity"
                  onClick={() => {
                    setSimMode('trinity');
                    setSimMessage('');
                  }}
                  className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition-all ${
                    simMode === 'trinity'
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  ពេញលេញ (HTML+CSS+JS)
                </button>
              </div>
            </div>

            {/* Simulation Stage */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
              {/* Visual Render Canvas */}
              <div className="p-6 rounded-xl border border-dashed border-slate-300 dark:border-slate-700 bg-slate-50/70 dark:bg-slate-950/50 flex flex-col items-center justify-center min-h-[160px] text-center relative">
                <span className="absolute top-2 left-2 text-[10px] font-mono text-slate-400 dark:text-slate-500">
                  {simMode === 'html' && 'របៀប HTML Only (ឆ្អឹងសុទ្ធ)'}
                  {simMode === 'html-css' && 'របៀប HTML + CSS (ស្អាតតែគ្មានជីវិត)'}
                  {simMode === 'trinity' && 'របៀប The Web Trinity (ពេញលេញ & Interactive)'}
                </span>

                {/* State 1: Raw HTML Only */}
                {simMode === 'html' && (
                  <div className="space-y-2 text-left w-full max-w-xs p-2 bg-white text-black border border-black font-serif">
                    <h5 className="text-sm font-bold underline">ទំព័រគំរូសាមញ្ញ</h5>
                    <p className="text-xs">នេះជាអត្ថបទធម្មតាគ្មានម៉ូដ (Default Times New Roman)។</p>
                    <button
                      type="button"
                      onClick={handleSimButtonClick}
                      className="px-2 py-0.5 border border-black bg-gray-200 active:bg-gray-300 text-xs text-black"
                    >
                      ចុចទីនេះ (Raw Button)
                    </button>
                  </div>
                )}

                {/* State 2: HTML + CSS */}
                {simMode === 'html-css' && (
                  <div className="space-y-3 w-full max-w-xs p-4 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-md text-center">
                    <h5 className="text-sm font-bold tracking-wide">កាតតុបតែងម៉ូដទាន់សម័យ</h5>
                    <p className="text-xs text-indigo-100">មានពណ៌ស្រស់ស្អាត គែមមូល និងស្រមោលស្អាត។</p>
                    <button
                      type="button"
                      onClick={handleSimButtonClick}
                      className="w-full py-2 px-4 rounded-lg bg-white text-indigo-600 font-semibold text-xs shadow-sm hover:scale-[1.02] transition-transform"
                    >
                      ចុចតេស្ត (ស្អាតតែចុចមិនដើរ)
                    </button>
                  </div>
                )}

                {/* State 3: The Trinity (HTML + CSS + JS) */}
                {simMode === 'trinity' && (
                  <div className="space-y-3 w-full max-w-xs p-4 rounded-xl bg-white dark:bg-slate-800 border border-blue-200 dark:border-blue-700/60 shadow-md text-center">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-800 dark:text-slate-100">
                        កាតអន្តរកម្មរស់រវើក
                      </span>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full font-mono font-bold transition-all ${
                          simHeartActive
                            ? 'bg-rose-500 text-white scale-110'
                            : 'bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300'
                        }`}
                      >
                        {simClicks} ក្លិក
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300">
                      JavaScript គណនា និង Update DOM ភ្លាមៗ៖
                    </p>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        id="trinity-active-action-btn"
                        onClick={handleSimButtonClick}
                        className="flex-1 py-2 px-4 rounded-lg bg-blue-600 hover:bg-blue-500 active:scale-95 text-white font-semibold text-xs shadow-sm transition-all flex items-center justify-center gap-1.5"
                      >
                        <Zap className="w-3.5 h-3.5 fill-current text-yellow-300" />
                        <span>ចុចដើម្បីបញ្ជា ({simClicks})</span>
                      </button>
                      <button
                        type="button"
                        id="trinity-reset-btn"
                        onClick={handleResetSim}
                        title="កំណត់ឡើងវិញ"
                        className="p-2 rounded-lg bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-600 dark:text-slate-300 transition-colors"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Teaching Outcome / Feedback */}
              <div className="space-y-2.5">
                <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 text-xs">
                  <span className="font-bold text-slate-800 dark:text-slate-200 block mb-1">
                    សេចក្តីពន្យល់អំពីរបៀបនេះ៖
                  </span>
                  {simMode === 'html' && (
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      <strong>HTML តែឯង</strong> ផ្តល់នូវធាតុរចនាសម្ព័ន្ធពិតមែន តែគ្មានសោភ័ណភាព និងគ្មានអន្តរកម្មឡើយ។ ដូចមនុស្សមានតែគ្រោងឆ្អឹងគ្មានសម្លៀកបំពាក់ និងគ្មានខួរក្បាលបញ្ជាចលនា។
                    </p>
                  )}
                  {simMode === 'html-css' && (
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      <strong>HTML + CSS</strong> ធ្វើឱ្យទំព័រមានពណ៌ស្រស់ស្អាត ទាក់ទាញភ្នែក ប៉ុន្តែវានៅតែជា <strong>Static Page</strong> (ដូចផ្ទាំងប៉ាណូផ្សាយពាណិជ្ជកម្ម) ដែលមិនអាចគណនា ឬឆ្លើយតបនឹងការចុចបានឡើយ។
                    </p>
                  )}
                  {simMode === 'trinity' && (
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      <strong>The Web Trinity (HTML + CSS + JS)</strong> នៅពេលបច្ចេកវិទ្យាទាំងបីរួមគ្នា គេហទំព័រក្លាយជា <strong>Web Application ពេញលេញ</strong> រស់រវើក គណនាភ្លាមៗ ផ្លាស់ប្តូរទិន្នន័យលើអេក្រង់តាមពេលវេលាជាក់ស្តែង!
                    </p>
                  )}
                </div>

                {simMessage && (
                  <div
                    className={`p-2.5 rounded-lg text-xs leading-relaxed transition-all flex items-start gap-2 ${
                      simMode === 'trinity'
                        ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800'
                        : 'bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800'
                    }`}
                  >
                    <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>{simMessage}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* 3. Deep Analogies Section (ឧបមាប្រៀបធៀបដើម្បីងាយយល់) */}
          <div
            id="trinity-analogies-section"
            className="p-4 sm:p-5 rounded-xl bg-slate-100/70 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-3"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>ការប្រៀបធៀប</span>
              </span>

              {/* Analogy Selector */}
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => setActiveAnalogy('body')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors flex items-center gap-1 ${
                    activeAnalogy === 'body'
                      ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-2xs font-semibold'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  <User className="w-3.5 h-3.5" />
                  <span>រាងកាយមនុស្ស</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveAnalogy('house')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors flex items-center gap-1 ${
                    activeAnalogy === 'house'
                      ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-2xs font-semibold'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  <Home className="w-3.5 h-3.5" />
                  <span>សំណង់ផ្ទះ</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveAnalogy('car')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors flex items-center gap-1 ${
                    activeAnalogy === 'car'
                      ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-2xs font-semibold'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  <Car className="w-3.5 h-3.5" />
                  <span>រថយន្តទំនើប</span>
                </button>
              </div>
            </div>

            {/* Analogy Matrix Details */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1 text-xs">
              {activeAnalogy === 'body' && (
                <>
                  <div className="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between space-y-2">
                    <div className="space-y-1">
                      <span className="font-bold text-amber-600 dark:text-amber-400 block text-[11px]">
                        HTML = គ្រោងឆ្អឹង (Skeleton)
                      </span>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-[11px]">
                        ជាគ្រោងឆ្អឹង និងសរីរាង្គចាំបាច់ដែលទ្រទ្រង់រូបរាងមនុស្ស ប្រសិនបើគ្មានឆ្អឹង រាងកាយមិនអាចឈរបានឡើយ។
                      </p>
                    </div>
                    <div className="relative mt-2 overflow-hidden rounded-md border border-slate-200/80 dark:border-slate-800 aspect-[16/10] bg-slate-100 dark:bg-slate-800">
                      <img
                        src="https://images.unsplash.com/photo-1530210124550-912dc1381cb8?auto=format&fit=crop&w=600&q=80"
                        alt="គ្រោងឆ្អឹងមនុស្ស (Human Skeleton)"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                      <span className="absolute bottom-1.5 left-2 text-[10px] font-medium text-white drop-shadow-xs">
                        🦴 គ្រោងឆ្អឹងទ្រទ្រង់រូបរាង (Structure)
                      </span>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between space-y-2">
                    <div className="space-y-1">
                      <span className="font-bold text-sky-600 dark:text-sky-400 block text-[11px]">
                        CSS = ស្បែក និងសម្លៀកបំពាក់ (Skin & Clothing)
                      </span>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-[11px]">
                        ពណ៌សម្បុរ ម៉ូដសក់ និងសម្លៀកបំពាក់ដ៏ស្រស់ស្អាត ដែលធ្វើឱ្យមនុស្សម្នាក់មើលទៅទាក់ទាញ និងថ្លៃថ្នូរ។
                      </p>
                    </div>
                    <div className="relative mt-2 overflow-hidden rounded-md border border-slate-200/80 dark:border-slate-800 aspect-[16/10] bg-slate-100 dark:bg-slate-800">
                      <img
                        src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=600&q=80"
                        alt="សម្លៀកបំពាក់ និងម៉ូដ (Clothing & Styling)"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                      <span className="absolute bottom-1.5 left-2 text-[10px] font-medium text-white drop-shadow-xs">
                        ✨ ស្បែក និងសម្លៀកបំពាក់ស្រស់ស្អាត (Styling)
                      </span>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between space-y-2">
                    <div className="space-y-1">
                      <span className="font-bold text-yellow-600 dark:text-yellow-400 block text-[11px]">
                        JavaScript = ប្រព័ន្ធប្រសាទ និងខួរក្បាល (Brain & Nerves)
                      </span>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-[11px]">
                        ខួរក្បាលគិត គណនា និងប្រព័ន្ធប្រសាទបញ្ជាសាច់ដុំឱ្យធ្វើចលនា ដើរ និយាយ ឆ្លើយតបនឹងបរិយាកាសជុំវិញ។
                      </p>
                    </div>
                    <div className="relative mt-2 overflow-hidden rounded-md border border-slate-200/80 dark:border-slate-800 aspect-[16/10] bg-slate-100 dark:bg-slate-800">
                      <img
                        src="https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=600&q=80"
                        alt="ខួរក្បាល និងប្រព័ន្ធប្រសាទ (Brain & Neural Network)"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                      <span className="absolute bottom-1.5 left-2 text-[10px] font-medium text-white drop-shadow-xs">
                        ⚡ ខួរក្បាល និងប្រព័ន្ធប្រសាទបញ្ជា (Logic & Action)
                      </span>
                    </div>
                  </div>
                </>
              )}

              {activeAnalogy === 'house' && (
                <>
                  <div className="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between space-y-2">
                    <div className="space-y-1">
                      <span className="font-bold text-amber-600 dark:text-amber-400 block text-[11px]">
                        HTML = គ្រោងផ្ទះ (Foundation & Walls)
                      </span>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-[11px]">
                        គ្រោងបេតុង សសរ ឥដ្ឋ ទ្វារ និងបង្អួច ដែលជាគ្រោងសំណង់រឹងមាំកំណត់បន្ទប់នីមួយៗ។
                      </p>
                    </div>
                    <div className="relative mt-2 overflow-hidden rounded-md border border-slate-200/80 dark:border-slate-800 aspect-[16/10] bg-slate-100 dark:bg-slate-800">
                      <img
                        src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80"
                        alt="គ្រោងសំណង់ និងគ្រឹះ (Structure & Foundation)"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                      <span className="absolute bottom-1.5 left-2 text-[10px] font-medium text-white drop-shadow-xs">
                        🏗️ គ្រោងសំណង់ និងគ្រឹះបេតុង (Structure)
                      </span>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between space-y-2">
                    <div className="space-y-1">
                      <span className="font-bold text-sky-600 dark:text-sky-400 block text-[11px]">
                        CSS = ការលាបពណ៌ និងតុបតែង (Paint & Interior)
                      </span>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-[11px]">
                        ការលាបថ្នាំពណ៌ជញ្ជាំង ក្រាលការ៉ូ ព្យួរវាំងនន និងរៀបចំអំពូលភ្លើងឱ្យមានសោភ័ណភាពកក់ក្តៅ។
                      </p>
                    </div>
                    <div className="relative mt-2 overflow-hidden rounded-md border border-slate-200/80 dark:border-slate-800 aspect-[16/10] bg-slate-100 dark:bg-slate-800">
                      <img
                        src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80"
                        alt="ការតុបតែងខាងក្នុង (Interior Design & Decor)"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                      <span className="absolute bottom-1.5 left-2 text-[10px] font-medium text-white drop-shadow-xs">
                        🎨 ការលាបពណ៌ និងតុបតែងខាងក្នុង (Styling)
                      </span>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between space-y-2">
                    <div className="space-y-1">
                      <span className="font-bold text-yellow-600 dark:text-yellow-400 block text-[11px]">
                        JavaScript = ប្រព័ន្ធភ្លើង និង Smart Automation
                      </span>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-[11px]">
                        បណ្តាញខ្សែភ្លើង សោទ្វារស្វ័យប្រវត្តិ កុងតាក់បញ្ជា និងប្រព័ន្ធទឹកភ្លើងឆ្លាតវៃ (Smart Home)។
                      </p>
                    </div>
                    <div className="relative mt-2 overflow-hidden rounded-md border border-slate-200/80 dark:border-slate-800 aspect-[16/10] bg-slate-100 dark:bg-slate-800">
                      <img
                        src="https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=600&q=80"
                        alt="ប្រព័ន្ធ Smart Home Automation"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                      <span className="absolute bottom-1.5 left-2 text-[10px] font-medium text-white drop-shadow-xs">
                        💡 ប្រព័ន្ធភ្លើង និង Smart Automation (Interactivity)
                      </span>
                    </div>
                  </div>
                </>
              )}

              {activeAnalogy === 'car' && (
                <>
                  <div className="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between space-y-2">
                    <div className="space-y-1">
                      <span className="font-bold text-amber-600 dark:text-amber-400 block text-[11px]">
                        HTML = តួឡាន និងកង់ (Chassis & Wheels)
                      </span>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-[11px]">
                        គ្រោងដែកថែប កៅអី កង់ និងចង្កូតដែលបង្កើតជាទម្រង់យានយន្តមូលដ្ឋាន។
                      </p>
                    </div>
                    <div className="relative mt-2 overflow-hidden rounded-md border border-slate-200/80 dark:border-slate-800 aspect-[16/10] bg-slate-100 dark:bg-slate-800">
                      <img
                        src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=600&q=80"
                        alt="គ្រោងតួឡាន (Car Chassis & Frame)"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                      <span className="absolute bottom-1.5 left-2 text-[10px] font-medium text-white drop-shadow-xs">
                        🚗 តួគ្រោងដែក និងកង់ (Structure)
                      </span>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between space-y-2">
                    <div className="space-y-1">
                      <span className="font-bold text-sky-600 dark:text-sky-400 block text-[11px]">
                        CSS = ថ្នាំពណ៌ និងកៅអីស្បែក (Paint & Aerodynamics)
                      </span>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-[11px]">
                        ពណ៌រលោងស្អាត ទម្រង់ស្ព័រ កៅអីស្បែកប្រណិត និងការរចនាចង្កៀងមុខយ៉ាងទាក់ទាញ។
                      </p>
                    </div>
                    <div className="relative mt-2 overflow-hidden rounded-md border border-slate-200/80 dark:border-slate-800 aspect-[16/10] bg-slate-100 dark:bg-slate-800">
                      <img
                        src="https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=600&q=80"
                        alt="ពណ៌រថយន្ត និងរូបរាង (Car Paint & Styling)"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                      <span className="absolute bottom-1.5 left-2 text-[10px] font-medium text-white drop-shadow-xs">
                        🏎️ ថ្នាំពណ៌ និងរាងទាក់ទាញ (Styling)
                      </span>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between space-y-2">
                    <div className="space-y-1">
                      <span className="font-bold text-yellow-600 dark:text-yellow-400 block text-[11px]">
                        JavaScript = ម៉ាស៊ីន និងប្រព័ន្ធកុំព្យូទ័រឡាន (Engine & ECU)
                      </span>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-[11px]">
                        ម៉ាស៊ីនរត់ ប្រព័ន្ធហ្វ្រាំង ABS កាមេរ៉ាស្វ័យប្រវត្តិ និងអេក្រង់ Touchscreen បញ្ជាការបើកបរ។
                      </p>
                    </div>
                    <div className="relative mt-2 overflow-hidden rounded-md border border-slate-200/80 dark:border-slate-800 aspect-[16/10] bg-slate-100 dark:bg-slate-800">
                      <img
                        src="https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=600&q=80"
                        alt="ប្រព័ន្ធអេឡិចត្រូនិច និងម៉ាស៊ីន (Car Engine & Digital Electronics)"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                      <span className="absolute bottom-1.5 left-2 text-[10px] font-medium text-white drop-shadow-xs">
                        ⚙️ ម៉ាស៊ីន និងប្រព័ន្ធបញ្ជា (Functionality)
                      </span>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* 4. Missing Element Matrix (ផលវិបាកបើខ្វះធាតុណាមួយ) */}
          <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2 text-xs">
            <span className="font-bold text-slate-800 dark:text-slate-200 block text-xs">
              ⚖️ តុល្យភាព៖ តើមានអ្វីកើតឡើងប្រសិនបើខ្វះធាតុណាមួយ?
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px] pt-1">
              <div className="p-2.5 rounded-lg bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/40 text-rose-800 dark:text-rose-300">
                <strong>❌ បើគ្មាន HTML:</strong>
                <p className="mt-0.5 text-slate-600 dark:text-slate-400">
                  គ្មានទិន្នន័យ គ្មានអត្ថបទ និងគ្មានធាតុអ្វីទាំងអស់សម្រាប់បង្ហាញ (ទំព័រទទេស្អាត)។
                </p>
              </div>
              <div className="p-2.5 rounded-lg bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/40 text-amber-800 dark:text-amber-300">
                <strong>❌ បើគ្មាន CSS:</strong>
                <p className="mt-0.5 text-slate-600 dark:text-slate-400">
                  មើលទៅដូចឯកសារសៀវភៅសខ្មៅឆ្នាំ 1993 គ្មានគម្លាត គ្មានពណ៌ និងរញ៉េរញ៉ៃ។
                </p>
              </div>
              <div className="p-2.5 rounded-lg bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-900/40 text-purple-800 dark:text-purple-300">
                <strong>❌ បើគ្មាន JavaScript:</strong>
                <p className="mt-0.5 text-slate-600 dark:text-slate-400">
                  គ្រាន់តែជាផ្ទាំងរូបភាពស្ងៀម (Static) មិនអាចគណនា ឬឆ្លើយតបនឹងការចុចបានឡើយ។
                </p>
              </div>
            </div>
          </div>

          {/* Quick Action: Open Combined Code in Playground if handler provided */}
          {onOpenCode && (
            <div className="flex justify-end pt-1">
              <button
                type="button"
                id="run-trinity-code-btn"
                onClick={() => onOpenCode(sampleCombinedCode)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-xs transition-colors"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>សាកល្បងកូដគំរូ The Trinity ក្នុង Playground</span>
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
