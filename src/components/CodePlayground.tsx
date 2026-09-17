import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Play, RotateCcw, Copy, Check, Terminal, Code, Zap, ZoomIn, ZoomOut } from 'lucide-react';

interface CodePlaygroundProps {
  initialCode?: string;
  lessonTitle?: string;
}

const PRESET_EXAMPLES: { label: string; code: string }[] = [
  {
    label: 'មេរៀនទី១៖ Button Click & Log',
    code: `// មេរៀនទី១៖ Basic Output & Counter
let clickCount = 0;

function handleClick() {
  clickCount += 1;
  console.log("ប៊ូតុងត្រូវបានចុចលើកទី " + clickCount);
  console.log("ស្ថានភាពបច្ចុប្បន្ន: ប្រព័ន្ធដំណើរការល្អ");
}

handleClick();
handleClick();
handleClick();`
  },
  {
    label: 'មេរៀនទី២៖ Student Profile & Types',
    code: `// មេរៀនទី២៖ Data Types & Template Literals
const studentName = "សួន វិច្ឆិកា";
const birthYear = 2005;
const currentYear = 2026;
const age = currentYear - birthYear;
const isEnrolled = true;

console.log(\`ឈ្មោះនិស្សិត: \${studentName}\`);
console.log(\`អាយុ: \${age} ឆ្នាំ (ប្រភេទ: \${typeof age})\`);
console.log(\`ស្ថានភាព: \${isEnrolled ? "កំពុងសិក្សា" : "ព្យួរការសិក្សា"}\`);

// ពិនិត្យ Type Coercion
const stringNum = "50";
const added = Number(stringNum) + 10;
console.log("ផលបូកត្រឹមត្រូវ (Number):", added);`
  },
  {
    label: 'មេរៀនទី៣៖ Grading System (if/else)',
    code: `// មេរៀនទី៣៖ Conditions & Strict Equality
function evaluateGrade(score) {
  if (score < 0 || score > 100) {
    console.error("ពិន្ទុមិនត្រឹមត្រូវ!");
    return "Error";
  }

  if (score >= 90) return "A (ឆ្នើម)";
  if (score >= 80) return "B (ល្អណាស់)";
  if (score >= 70) return "C (ល្អ)";
  if (score >= 60) return "D (មធ្យម)";
  return "F (ធ្លាក់)";
}

console.log("ពិន្ទុ 95 -> និទ្ទេស:", evaluateGrade(95));
console.log("ពិន្ទុ 78 -> និទ្ទេស:", evaluateGrade(78));
console.log("ពិន្ទុ 52 -> និទ្ទេស:", evaluateGrade(52));`
  },
  {
    label: 'មេរៀនទី៦៖ Filter & Reduce Arrays',
    code: `// មេរៀនទី៦៖ Higher-Order Array Methods
const products = [
  { name: "សៀវភៅ JavaScript", price: 12 },
  { name: "Mouse Wireless", price: 18 },
  { name: "Keyboard RGB", price: 45 },
  { name: "Laptop Stand", price: 25 }
];

// ច្រោះយកទំនិញតម្លៃក្រោម $30
const affordableItems = products.filter(item => item.price < 30);
console.log("ទំនិញក្រោម $30:", affordableItems.map(i => i.name));

// គណនាតម្លៃសរុប
const totalCost = products.reduce((sum, item) => sum + item.price, 0);
console.log("ទឹកប្រាក់សរុប: $" + totalCost);`
  }
];

export const CodePlayground: React.FC<CodePlaygroundProps> = ({
  initialCode = PRESET_EXAMPLES[0].code,
  lessonTitle
}) => {
  const [code, setCode] = useState<string>(initialCode);
  const [consoleOutput, setConsoleOutput] = useState<{ type: 'log' | 'error' | 'warn'; text: string }[]>([]);
  const [copied, setCopied] = useState<boolean>(false);
  const [autoRun, setAutoRun] = useState<boolean>(true);
  const [fontSize, setFontSize] = useState<number>(14); // default 14px (range 11px to 20px)
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);

  const handleZoomIn = () => {
    setFontSize(prev => Math.min(prev + 1, 22));
  };

  const handleZoomOut = () => {
    setFontSize(prev => Math.max(prev - 1, 11));
  };

  const handleResetFontSize = () => {
    setFontSize(14);
  };

  useEffect(() => {
    if (initialCode) {
      setCode(initialCode);
    }
  }, [initialCode]);

  const executeCode = useCallback((codeToRun: string) => {
    const logs: { type: 'log' | 'error' | 'warn'; text: string }[] = [];

    // Custom console wrapper
    const customConsole = {
      log: (...args: any[]) => {
        logs.push({
          type: 'log',
          text: args.map(arg => (typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg))).join(' ')
        });
      },
      error: (...args: any[]) => {
        logs.push({
          type: 'error',
          text: args.map(arg => (typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg))).join(' ')
        });
      },
      warn: (...args: any[]) => {
        logs.push({
          type: 'warn',
          text: args.map(arg => (typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg))).join(' ')
        });
      }
    };

    try {
      // Run in function wrapper with overridden console
      const runFn = new Function('console', codeToRun);
      runFn(customConsole);
      if (logs.length === 0) {
        logs.push({ type: 'log', text: '✓ កូដបានដំណើរការចប់សព្វគ្រប់ (គ្មាន Output បង្ហាញទេ)' });
      }
    } catch (err: any) {
      logs.push({
        type: 'error',
        text: `កំហុស (Runtime Error): ${err.message || String(err)}`
      });
    }

    setConsoleOutput(logs);
  }, []);

  const handleRunCode = () => {
    executeCode(code);
  };

  // Real-time Auto-Run effect with debounce (350ms)
  useEffect(() => {
    if (!autoRun) return;

    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    debounceTimerRef.current = setTimeout(() => {
      executeCode(code);
    }, 350);

    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, [code, autoRun, executeCode]);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-md">
      {/* Header bar */}
      <div className="bg-slate-50 dark:bg-slate-950 px-4 py-3 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center space-x-2">
          <Code className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          <span className="font-bold text-sm text-slate-900 dark:text-white">JavaScript Live Playground</span>
          {lessonTitle && (
            <span className="text-xs text-slate-500 dark:text-slate-400 border-l border-slate-300 dark:border-slate-700 pl-2">
              {lessonTitle}
            </span>
          )}
        </div>

        {/* Presets dropdown */}
        <div className="flex items-center flex-wrap gap-2">
          <select
            className="bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-200 rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-blue-500 shadow-2xs"
            onChange={(e) => {
              const selected = PRESET_EXAMPLES.find(p => p.label === e.target.value);
              if (selected) setCode(selected.code);
            }}
          >
            <option value="">ជ្រើសរើសកូដគំរូ (Presets)</option>
            {PRESET_EXAMPLES.map((p, idx) => (
              <option key={idx} value={p.label}>
                {p.label}
              </option>
            ))}
          </select>

          {/* Font Size Controls */}
          <div
            className="inline-flex items-center bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-0.5 shadow-2xs text-xs"
            role="group"
            aria-label="Font size controls"
          >
            <button
              type="button"
              id="btn-decrease-font"
              onClick={handleZoomOut}
              disabled={fontSize <= 11}
              className="p-1 rounded-md text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              title="បន្ថយទំហំអក្សរ (Decrease font size)"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              id="btn-reset-font"
              onClick={handleResetFontSize}
              className="px-1.5 py-0.5 font-mono text-[11px] font-semibold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400"
              title="កំណត់ទំហំដើម (Reset to 14px)"
            >
              {fontSize}px
            </button>
            <button
              type="button"
              id="btn-increase-font"
              onClick={handleZoomIn}
              disabled={fontSize >= 22}
              className="p-1 rounded-md text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              title="ពង្រីកទំហំអក្សរ (Increase font size)"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Auto-Run Toggle */}
          <button
            type="button"
            id="toggle-auto-run"
            onClick={() => setAutoRun(prev => !prev)}
            className={`flex items-center space-x-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium border transition-all shadow-2xs ${
              autoRun
                ? 'bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border-amber-300 dark:border-amber-700'
                : 'bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:text-slate-700 dark:hover:text-slate-200'
            }`}
            title="ដំណើរការកូដស្វ័យប្រវត្តិតាមពេលវេលាជាក់ស្តែង (Auto-Run)"
          >
            <Zap className={`w-3.5 h-3.5 ${autoRun ? 'text-amber-500 fill-current' : 'text-slate-400'}`} />
            <span>Auto-Run</span>
            <span className={`inline-block w-2 h-2 rounded-full ${autoRun ? 'bg-emerald-500 animate-pulse' : 'bg-slate-300 dark:bg-slate-600'}`} />
          </button>

          <button
            type="button"
            onClick={handleCopy}
            className="flex items-center space-x-1 px-2.5 py-1.5 rounded-lg bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white text-xs border border-slate-200 dark:border-transparent transition-colors shadow-2xs"
            title="ចម្លងកូដ"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'បានចម្លង' : 'ចម្លង'}</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setCode('');
              setConsoleOutput([]);
            }}
            className="flex items-center space-x-1 px-2.5 py-1.5 rounded-lg bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-xs border border-slate-200 dark:border-transparent transition-colors shadow-2xs"
            title="សម្អាត"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>សម្អាត</span>
          </button>

          <button
            type="button"
            id="btn-run-code"
            onClick={handleRunCode}
            className="flex items-center space-x-1.5 px-4 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-all shadow-sm active:scale-95"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>ដំណើរការកូដ (Run)</span>
          </button>
        </div>
      </div>

      {/* Editor & Console Split */}
      <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-slate-200 dark:divide-slate-800">
        {/* Code Input Area */}
        <div className="p-4 bg-slate-50/50 dark:bg-slate-900/90 flex flex-col">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-mono text-slate-600 dark:text-slate-400 uppercase tracking-wider font-semibold">
              កូដ JavaScript (Editor)
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
              {autoRun ? (
                <span className="text-emerald-600 dark:text-emerald-400 font-medium">⚡ Real-time Live Sync</span>
              ) : (
                'កែប្រែកូដរួចចុច Run'
              )}
            </span>
          </div>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            style={{ fontSize: `${fontSize}px`, lineHeight: 1.6 }}
            className="w-full h-80 lg:h-96 bg-slate-900 dark:bg-slate-950 font-mono text-emerald-300 p-4 rounded-xl border border-slate-300 dark:border-slate-800 focus:outline-none focus:border-blue-500 resize-none shadow-inner transition-[font-size]"
            placeholder="// សរសេរកូដ JavaScript របស់អ្នកនៅទីនេះ..."
            spellCheck={false}
          />
        </div>

        {/* Virtual Console Area */}
        <div className="p-4 bg-slate-100/50 dark:bg-slate-950 flex flex-col">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-1.5 text-xs font-mono text-slate-600 dark:text-slate-400 uppercase tracking-wider font-semibold">
              <Terminal className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
              <span>Browser Console Output</span>
            </div>
            <button
              type="button"
              onClick={() => setConsoleOutput([])}
              className="text-xs text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300"
            >
              Clear Console
            </button>
          </div>

          <div
            style={{ fontSize: `${Math.max(fontSize - 1, 11)}px`, lineHeight: 1.5 }}
            className="w-full h-80 lg:h-96 bg-white dark:bg-slate-900 font-mono p-3.5 rounded-xl border border-slate-200 dark:border-slate-800/80 overflow-y-auto space-y-1.5 shadow-2xs transition-[font-size]"
          >
            {consoleOutput.length === 0 ? (
              <div className="text-slate-400 dark:text-slate-500 italic text-center pt-24 text-xs">
                {autoRun
                  ? 'កំពុងរង់ចាំការវាយបញ្ចូលកូដដើម្បីបង្ហាញលទ្ធផល Auto-Run...'
                  : 'ចុចប៊ូតុង "ដំណើរការកូដ (Run)" ដើម្បីមើលលទ្ធផល Console នៅទីនេះ...'}
              </div>
            ) : (
              consoleOutput.map((item, idx) => (
                <div
                  key={idx}
                  className={`p-2 rounded font-mono whitespace-pre-wrap ${
                    item.type === 'error'
                      ? 'bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 border-l-2 border-rose-500'
                      : item.type === 'warn'
                      ? 'bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border-l-2 border-amber-500'
                      : 'bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 border-l-2 border-emerald-500'
                  }`}
                >
                  <span className="text-slate-400 mr-2 text-[10px]">[{item.type.toUpperCase()}]</span>
                  {item.text}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
