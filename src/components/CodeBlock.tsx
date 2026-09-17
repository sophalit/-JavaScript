import React, { useState, useMemo } from 'react';
import { Copy, Check, Play, FileCode, Terminal } from 'lucide-react';
import { highlightCode, normalizeLanguage, detectLanguageFromContent } from '../lib/prism';

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  title?: string;
  showLineNumbers?: boolean;
  onRun?: (code: string) => void;
  className?: string;
  maxHeight?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = 'javascript',
  filename,
  title,
  showLineNumbers = true,
  onRun,
  className = '',
  maxHeight
}) => {
  const [copied, setCopied] = useState(false);

  const cleanCode = useMemo(() => code.trimEnd(), [code]);

  const effectiveLang = useMemo(() => {
    const norm = normalizeLanguage(language);
    if (norm === 'javascript') {
      return detectLanguageFromContent(cleanCode, 'javascript');
    }
    return norm;
  }, [language, cleanCode]);

  const highlightedHtml = useMemo(() => {
    return highlightCode(cleanCode, effectiveLang);
  }, [cleanCode, effectiveLang]);

  const lines = useMemo(() => cleanCode.split('\n'), [cleanCode]);

  const handleCopy = () => {
    navigator.clipboard.writeText(cleanCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Language display name and badge styling
  const getLanguageMeta = (lang: string) => {
    switch (lang) {
      case 'markup':
      case 'html':
        return {
          label: 'HTML',
          badgeClass: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
          dotClass: 'bg-amber-400'
        };
      case 'css':
        return {
          label: 'CSS',
          badgeClass: 'text-sky-400 bg-sky-500/10 border-sky-500/20',
          dotClass: 'bg-sky-400'
        };
      case 'typescript':
      case 'ts':
        return {
          label: 'TypeScript',
          badgeClass: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
          dotClass: 'bg-blue-400'
        };
      case 'json':
        return {
          label: 'JSON',
          badgeClass: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
          dotClass: 'bg-emerald-400'
        };
      case 'bash':
        return {
          label: 'Terminal',
          badgeClass: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
          dotClass: 'bg-purple-400'
        };
      case 'javascript':
      default:
        return {
          label: 'JavaScript',
          badgeClass: 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20',
          dotClass: 'bg-yellow-400'
        };
    }
  };

  const meta = getLanguageMeta(effectiveLang);
  const displayTitle = filename || title || meta.label;
  const isMultiLine = lines.length > 1;

  return (
    <div
      className={`rounded-xl bg-slate-950 border border-slate-800 overflow-hidden shadow-sm font-mono text-xs ${className}`}
    >
      {/* Code Header Bar */}
      <div className="px-4 py-2.5 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between gap-2 select-none">
        <div className="flex items-center space-x-2 min-w-0">
          <span className={`w-2 h-2 rounded-full ${meta.dotClass} flex-shrink-0`} />
          <span className="font-semibold text-slate-200 truncate text-[11px]">
            {displayTitle}
          </span>
          {filename && (
            <span
              className={`px-1.5 py-0.5 rounded text-[10px] font-medium border ${meta.badgeClass}`}
            >
              {meta.label}
            </span>
          )}
          <span className="text-slate-500 text-[10px] hidden sm:inline">
            {lines.length} {lines.length === 1 ? 'line' : 'lines'}
          </span>
        </div>

        {/* Action Controls */}
        <div className="flex items-center space-x-1.5 flex-shrink-0">
          <button
            type="button"
            onClick={handleCopy}
            className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors text-[11px]"
            title="ចម្លងកូដ"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400 font-medium">បានចម្លង!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>ចម្លង</span>
              </>
            )}
          </button>

          {onRun && (
            <button
              type="button"
              onClick={() => onRun(cleanCode)}
              className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-600/25 hover:bg-emerald-600 text-emerald-300 hover:text-white transition-all text-[11px] font-medium border border-emerald-500/30 hover:border-emerald-600"
              title="ដំណើរការកូដក្នុង Playground"
            >
              <Play className="w-3 h-3 fill-current" />
              <span>Run</span>
            </button>
          )}
        </div>
      </div>

      {/* Code Body */}
      <div
        className={`relative overflow-x-auto ${maxHeight ? maxHeight : 'max-h-[500px]'}`}
      >
        <div className="flex min-w-full">
          {/* Optional Line Numbers */}
          {showLineNumbers && isMultiLine && (
            <div
              className="select-none py-3.5 pl-3 pr-3 text-right text-slate-600 border-r border-slate-800/80 bg-slate-950/70 font-mono text-[11px] leading-[1.625rem] flex-shrink-0"
              aria-hidden="true"
            >
              {lines.map((_, i) => (
                <div key={i}>{i + 1}</div>
              ))}
            </div>
          )}

          {/* Highlighted Code */}
          <pre className="p-3.5 flex-1 m-0 overflow-x-auto bg-transparent font-mono text-[12px] sm:text-[12.5px] leading-[1.625rem] text-slate-200">
            <code
              className={`language-${effectiveLang} font-mono`}
              dangerouslySetInnerHTML={{ __html: highlightedHtml }}
            />
          </pre>
        </div>
      </div>
    </div>
  );
};
