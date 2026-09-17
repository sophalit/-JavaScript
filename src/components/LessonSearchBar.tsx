import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Search, X, BookOpen, ArrowRight, CornerDownLeft, Sparkles, Hash } from 'lucide-react';
import { Lesson, AppViewMode } from '../types';

interface LessonSearchBarProps {
  lessons: Lesson[];
  onSelectLesson: (id: number) => void;
  onChangeView: (view: AppViewMode) => void;
}

interface SearchMatch {
  lesson: Lesson;
  matchType: 'title' | 'concept' | 'syntax' | 'practice' | 'exercise' | 'outcome';
  matchLabel: string;
  snippet?: string;
}

export const LessonSearchBar: React.FC<LessonSearchBarProps> = ({
  lessons,
  onSelectLesson,
  onChangeView,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Global shortcut (Ctrl+K, Cmd+K, or /) to focus search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
      const modifier = isMac ? e.metaKey : e.ctrlKey;

      if ((modifier && e.key.toLowerCase() === 'k') || (e.key === '/' && document.activeElement?.tagName !== 'INPUT' && document.activeElement?.tagName !== 'TEXTAREA')) {
        e.preventDefault();
        inputRef.current?.focus();
        setIsOpen(true);
      } else if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
        inputRef.current?.blur();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Compute search matches
  const searchResults: SearchMatch[] = useMemo(() => {
    const trimmed = query.trim().toLowerCase();
    if (!trimmed) return [];

    const results: SearchMatch[] = [];

    for (const lesson of lessons) {
      const titleKm = lesson.titleKm.toLowerCase();
      const titleEn = lesson.titleEn.toLowerCase();
      const category = lesson.category.toLowerCase();

      // 1. Check title and category
      if (titleKm.includes(trimmed) || titleEn.includes(trimmed) || category.includes(trimmed)) {
        results.push({
          lesson,
          matchType: 'title',
          matchLabel: 'ចំណងជើងមេរៀន (Lesson Title)',
          snippet: `${lesson.titleKm} (${lesson.titleEn})`,
        });
        continue;
      }

      // 2. Check syntax examples
      const matchingSyntax = lesson.syntaxExamples?.find(
        (ex) =>
          ex.title.toLowerCase().includes(trimmed) ||
          ex.description.toLowerCase().includes(trimmed) ||
          ex.code.toLowerCase().includes(trimmed)
      );
      if (matchingSyntax) {
        results.push({
          lesson,
          matchType: 'syntax',
          matchLabel: 'វាក្យសម្ព័ន្ធ & ឧទាហរណ៍ (Syntax Example)',
          snippet: `${matchingSyntax.title}: ${matchingSyntax.description}`,
        });
        continue;
      }

      // 3. Check guided practice
      if (
        lesson.guidedPractice?.title?.toLowerCase().includes(trimmed) ||
        lesson.guidedPractice?.description?.toLowerCase().includes(trimmed) ||
        lesson.guidedPractice?.files?.some((f) => f.code.toLowerCase().includes(trimmed))
      ) {
        results.push({
          lesson,
          matchType: 'practice',
          matchLabel: 'គម្រោងអនុវត្ត (Guided Practice)',
          snippet: `${lesson.guidedPractice.title} - ${lesson.guidedPractice.description}`,
        });
        continue;
      }

      // 4. Check concepts explanation
      const concepts = lesson.conceptsExplanation?.toLowerCase() || '';
      const conceptIdx = concepts.indexOf(trimmed);
      if (conceptIdx !== -1) {
        const start = Math.max(0, conceptIdx - 35);
        const end = Math.min(concepts.length, conceptIdx + trimmed.length + 45);
        const snippetText = (start > 0 ? '...' : '') + lesson.conceptsExplanation.slice(start, end) + (end < concepts.length ? '...' : '');
        results.push({
          lesson,
          matchType: 'concept',
          matchLabel: 'ខ្លឹមសារមេរៀន (Concepts Explanation)',
          snippet: snippetText.replace(/[#*`_]/g, ''),
        });
        continue;
      }

      // 5. Check learning outcomes
      const matchingOutcome = lesson.learningOutcomes?.find((out) => out.toLowerCase().includes(trimmed));
      if (matchingOutcome) {
        results.push({
          lesson,
          matchType: 'outcome',
          matchLabel: 'គោលបំណង',
          snippet: matchingOutcome,
        });
        continue;
      }

      // 6. Check exercises
      const matchingExercise = lesson.exercises?.find(
        (ex) => ex.prompt.toLowerCase().includes(trimmed) || ex.solutionCode.toLowerCase().includes(trimmed)
      );
      if (matchingExercise) {
        results.push({
          lesson,
          matchType: 'exercise',
          matchLabel: 'លំហាត់អនុវត្ត (Exercise)',
          snippet: matchingExercise.prompt.slice(0, 90) + '...',
        });
        continue;
      }
    }

    return results;
  }, [query, lessons]);

  // Reset selected index when search results change
  useEffect(() => {
    setSelectedIndex(0);
  }, [searchResults]);

  const handleSelectResult = (lessonId: number) => {
    onSelectLesson(lessonId);
    onChangeView('lesson');
    setIsOpen(false);
    setQuery('');
    inputRef.current?.blur();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isOpen && (e.key === 'ArrowDown' || e.key === 'Enter')) {
      setIsOpen(true);
      return;
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (searchResults.length || 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + (searchResults.length || 1)) % (searchResults.length || 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (searchResults.length > 0 && searchResults[selectedIndex]) {
        handleSelectResult(searchResults[selectedIndex].lesson.id);
      }
    } else if (e.key === 'Escape') {
      setIsOpen(false);
      inputRef.current?.blur();
    }
  };

  const highlightMatch = (text: string, highlight: string) => {
    if (!highlight.trim()) return text;
    const parts = text.split(new RegExp(`(${highlight.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi'));
    return parts.map((part, i) =>
      part.toLowerCase() === highlight.toLowerCase() ? (
        <span key={i} className="bg-amber-400/30 dark:bg-amber-400/25 text-amber-900 dark:text-amber-200 font-semibold px-0.5 rounded">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div ref={containerRef} className="relative flex-1 max-w-xs md:max-w-sm lg:max-w-md mx-2 sm:mx-4">
      {/* Search Input Box */}
      <div className="relative flex items-center">
        <div className="absolute inset-y-0 left-0 pl-2.5 sm:pl-3 flex items-center pointer-events-none text-slate-400 dark:text-slate-500">
          <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </div>

        <input
          ref={inputRef}
          id="navbar-search-input"
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            if (!isOpen) setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder="ស្វែងរកមេរៀន ឬពាក្យគន្លឹះ... (Search)"
          className="w-full pl-8 sm:pl-9 pr-14 sm:pr-16 py-1.5 text-xs sm:text-sm bg-slate-100 dark:bg-slate-800/90 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 rounded-xl border border-slate-200 dark:border-slate-700/80 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition-all shadow-2xs"
          autoComplete="off"
          spellCheck={false}
          aria-label="Search lessons and keywords"
        />

        {/* Clear or Shortcut badge */}
        <div className="absolute inset-y-0 right-0 pr-2 sm:pr-2.5 flex items-center space-x-1">
          {query ? (
            <button
              type="button"
              onClick={() => {
                setQuery('');
                inputRef.current?.focus();
              }}
              className="p-1 rounded-md text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              title="លុបការស្វែងរក"
              aria-label="Clear search"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          ) : (
            <div className="hidden sm:flex items-center gap-0.5 px-1.5 py-0.5 rounded border border-slate-300 dark:border-slate-700 bg-white/70 dark:bg-slate-900/70 text-[10px] text-slate-400 font-mono select-none">
              <span className="text-[9px]">⌘</span>K
            </div>
          )}
        </div>
      </div>

      {/* Search Results Dropdown Overlay */}
      {isOpen && query.trim().length > 0 && (
        <div
          id="navbar-search-results"
          className="absolute left-0 right-0 mt-2 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl z-50 overflow-hidden max-h-[80vh] sm:max-h-96 flex flex-col transition-all animate-in fade-in slide-in-from-top-2 duration-150"
        >
          {/* Results Header */}
          <div className="px-3.5 py-2 bg-slate-50 dark:bg-slate-950/80 border-b border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
            <span className="font-medium flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-blue-500" />
              <span>លទ្ធផលស្វែងរក ({searchResults.length})</span>
            </span>
            <span className="text-[11px] hidden sm:inline text-slate-400">
              ប្រើ <code>↑</code> <code>↓</code> ដើម្បីជ្រើសរើស និង <code>Enter</code>
            </span>
          </div>

          {/* Results List */}
          <div className="overflow-y-auto divide-y divide-slate-100 dark:divide-slate-800/60 p-1">
            {searchResults.length > 0 ? (
              searchResults.map((match, idx) => {
                const isSelected = idx === selectedIndex;
                return (
                  <button
                    key={`${match.lesson.id}-${idx}`}
                    type="button"
                    onClick={() => handleSelectResult(match.lesson.id)}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    className={`w-full text-left p-3 rounded-xl transition-all flex items-start justify-between gap-3 ${
                      isSelected
                        ? 'bg-blue-50 dark:bg-blue-950/40 text-blue-900 dark:text-blue-100 ring-1 ring-blue-500/30'
                        : 'hover:bg-slate-50 dark:hover:bg-slate-800/50 text-slate-800 dark:text-slate-200'
                    }`}
                  >
                    <div className="space-y-1 min-w-0 flex-1">
                      {/* Tags */}
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded text-[10px] font-bold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                          <Hash className="w-3 h-3" />
                          មេរៀនទី {match.lesson.id}
                        </span>
                        <span className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                          {match.lesson.category}
                        </span>
                        <span className="text-[10px] text-amber-700 dark:text-amber-400/90 font-medium">
                          • {match.matchLabel}
                        </span>
                      </div>

                      {/* Lesson Titles */}
                      <div className="font-semibold text-xs sm:text-sm text-slate-900 dark:text-white truncate">
                        {highlightMatch(match.lesson.titleKm, query)}
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
                        {highlightMatch(match.lesson.titleEn, query)}
                      </div>

                      {/* Matched Snippet Context */}
                      {match.snippet && (
                        <p className="text-[11px] text-slate-600 dark:text-slate-300 line-clamp-2 mt-1 leading-relaxed bg-slate-100/60 dark:bg-slate-950/40 p-1.5 rounded-lg border border-slate-200/60 dark:border-slate-800/40 font-normal">
                          {highlightMatch(match.snippet, query)}
                        </p>
                      )}
                    </div>

                    <div className="flex-shrink-0 pt-1 text-slate-400">
                      {isSelected ? (
                        <div className="flex items-center gap-1 text-[11px] text-blue-600 dark:text-blue-400 font-medium">
                          <span className="hidden sm:inline">ចូលរៀន</span>
                          <CornerDownLeft className="w-3.5 h-3.5" />
                        </div>
                      ) : (
                        <ArrowRight className="w-4 h-4 opacity-40" />
                      )}
                    </div>
                  </button>
                );
              })
            ) : (
              <div className="p-6 text-center space-y-2">
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium">
                  រកមិនឃើញមេរៀន ឬពាក្យគន្លឹះ "<span className="font-semibold text-rose-500">{query}</span>" ឡើយ
                </p>
                <p className="text-xs text-slate-400 dark:text-slate-500">
                  សាកល្បងពាក្យគន្លឹះដូចជា៖ <span className="text-blue-500">loop</span>, <span className="text-blue-500">variable</span>, <span className="text-blue-500">if else</span>, <span className="text-blue-500">switch</span>, <span className="text-blue-500">for of</span>, <span className="text-blue-500">console</span>...
                </p>
              </div>
            )}
          </div>

          {/* Footer Bar */}
          <div className="px-3.5 py-2 bg-slate-50 dark:bg-slate-950/80 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1">
              <BookOpen className="w-3.5 h-3.5 text-slate-400" />
              <span>សរុប {lessons.length} មេរៀនពេញលេញ</span>
            </span>
            <span className="text-[10px] text-slate-400">ចុច Esc ដើម្បីបិទ</span>
          </div>
        </div>
      )}
    </div>
  );
};
