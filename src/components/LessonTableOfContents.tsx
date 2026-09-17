import React, { useState, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  List,
  CheckCircle2,
  BookOpen,
  FileCode2,
  AlertTriangle,
  Play,
  HelpCircle,
  Sparkles,
  Search,
  ArrowUp,
  X,
  Layers,
  ChevronDown,
  ChevronRight,
  Hash,
  Compass
} from 'lucide-react';
import { Lesson } from '../types';
import { createHeadingSlug } from './RichMarkdown';

export interface TocItem {
  id: string;
  title: string;
  level: 1 | 2 | 3;
  icon?: React.ComponentType<{ className?: string }>;
  badge?: string;
  category?: string;
}

interface LessonTableOfContentsProps {
  lesson: Lesson;
  className?: string;
  onOpenPlayground?: (code?: string) => void;
  isMobileDrawer?: boolean;
  onCloseMobileDrawer?: () => void;
}

export const LessonTableOfContents: React.FC<LessonTableOfContentsProps> = ({
  lesson,
  className = '',
  onOpenPlayground,
  isMobileDrawer = false,
  onCloseMobileDrawer
}) => {
  const [activeId, setActiveId] = useState<string>('lesson-header');
  const [filterQuery, setFilterQuery] = useState<string>('');
  const [readProgress, setReadProgress] = useState<number>(0);
  const [conceptsExpanded, setConceptsExpanded] = useState<boolean>(true);
  const tocContainerRef = useRef<HTMLDivElement>(null);

  // Extract all TOC items (major sections + subheadings from markdown)
  const tocItems = useMemo<TocItem[]>(() => {
    const items: TocItem[] = [];

    // 0. Overview / Header
    items.push({
      id: 'lesson-header',
      title: `មេរៀនទី ${lesson.id}៖ សេចក្តីផ្តើម`,
      level: 1,
      icon: Compass,
      category: 'Overview'
    });

    // 1. Learning Outcomes
    if (lesson.learningOutcomes && lesson.learningOutcomes.length > 0) {
      items.push({
        id: 'lesson-outcomes',
        title: 'គោលបំណង',
        level: 1,
        icon: CheckCircle2,
        badge: `${lesson.learningOutcomes.length}`,
        category: 'Foundations'
      });
    }

    // 2. Real-World Context
    if (lesson.scenario) {
      items.push({
        id: 'lesson-scenario',
        title: 'ការអនុវត្តន៍ជាក់ស្តែង',
        level: 1,
        icon: Sparkles,
        category: 'Foundations'
      });
    }

    // 3. Web Trinity (Only for Lesson 1)
    if (lesson.id === 1) {
      items.push({
        id: 'web-trinity-section',
        title: 'The Web Trinity (HTML•CSS•JS)',
        level: 1,
        icon: Layers,
        category: 'Architecture'
      });
      items.push({
        id: 'trinity-visual-analogy',
        title: 'ការប្រៀបធៀបរូបភាព (Visual Analogy)',
        level: 1,
        icon: Sparkles,
        category: 'Architecture'
      });
    }

    // 4. Concept Explanation
    items.push({
      id: 'lesson-concepts',
      title: 'ការពន្យល់លម្អិត',
      level: 1,
      icon: BookOpen,
      category: 'Theory'
    });

    // Sub-headings inside conceptsExplanation:
    if (lesson.conceptsExplanation) {
      const lines = lesson.conceptsExplanation.split('\n');
      for (const line of lines) {
        const trimmed = line.trim();
        const h2Match = trimmed.match(/^##\s+(.+)$/);
        const h3Match = trimmed.match(/^###\s+(.+)$/);
        const h4Match = trimmed.match(/^####\s+(.+)$/);

        if (h2Match) {
          const rawTitle = h2Match[1].replace(/\*\*/g, '').replace(/`/g, '').trim();
          items.push({
            id: createHeadingSlug(rawTitle),
            title: rawTitle,
            level: 2,
            icon: Hash,
            category: 'Concepts'
          });
        } else if (h3Match) {
          const rawTitle = h3Match[1].replace(/\*\*/g, '').replace(/`/g, '').trim();
          items.push({
            id: createHeadingSlug(rawTitle),
            title: rawTitle,
            level: 2,
            icon: Hash,
            category: 'Concepts'
          });
        } else if (h4Match) {
          const rawTitle = h4Match[1].replace(/\*\*/g, '').replace(/`/g, '').trim();
          items.push({
            id: createHeadingSlug(rawTitle),
            title: rawTitle,
            level: 3,
            icon: Hash,
            category: 'Concepts'
          });
        }
      }
    }

    // 5. Syntax Examples
    if (lesson.syntaxExamples && lesson.syntaxExamples.length > 0) {
      items.push({
        id: 'lesson-syntax',
        title: 'លំហាត់អនុវត្តន៍',
        level: 1,
        icon: FileCode2,
        badge: `${lesson.syntaxExamples.length}`,
        category: 'Code'
      });
    }

    // 6. Guided Practice
    if (lesson.guidedPractice && lesson.guidedPractice.files && lesson.guidedPractice.files.length > 0) {
      items.push({
        id: 'lesson-practice',
        title: 'គម្រោងអនុវត្ត (Guided Project)',
        level: 1,
        icon: Play,
        category: 'Practice'
      });
    }

    // 7. Common Mistakes
    if (lesson.commonMistakes && lesson.commonMistakes.length > 0) {
      items.push({
        id: 'lesson-mistakes',
        title: 'កំហុសឆ្គង & វិធីកែ (Mistakes)',
        level: 1,
        icon: AlertTriangle,
        badge: `${lesson.commonMistakes.length}`,
        category: 'Practice'
      });
    }

    // 8. Practice Exercises
    if (lesson.exercises && lesson.exercises.length > 0) {
      items.push({
        id: 'lesson-exercises',
        title: 'លំហាត់អនុវត្ត ៣ កម្រិត (Exercises)',
        level: 1,
        icon: CheckCircle2,
        badge: `${lesson.exercises.length}`,
        category: 'Assessment'
      });
    }

    // 9. Knowledge Quiz
    if (lesson.quiz && lesson.quiz.length > 0) {
      items.push({
        id: 'lesson-quiz',
        title: 'កម្រងសំណួរវាស់ស្ទង់ (Quiz)',
        level: 1,
        icon: HelpCircle,
        badge: `${lesson.quiz.length} សំណួរ`,
        category: 'Assessment'
      });
    }

    // 10. Summary
    if (lesson.summary && lesson.summary.length > 0) {
      items.push({
        id: 'lesson-summary',
        title: 'សេចក្តីសង្ខេបមេរៀន (Summary)',
        level: 1,
        icon: List,
        category: 'Review'
      });
    }

    return items;
  }, [lesson]);

  // Filter items based on user search query
  const filteredItems = useMemo(() => {
    if (!filterQuery.trim()) return tocItems;
    const q = filterQuery.toLowerCase().trim();
    return tocItems.filter(item => item.title.toLowerCase().includes(q));
  }, [tocItems, filterQuery]);

  // Scroll spy mechanism to highlight current heading
  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      animationFrameId = window.requestAnimationFrame(() => {
        // Calculate reading progress %
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (docHeight > 0) {
          const currentProgress = Math.min(100, Math.max(0, Math.round((window.scrollY / docHeight) * 100)));
          setReadProgress(currentProgress);
        }

        // Spy active section
        const scrollPosition = window.scrollY + 140; // 140px below sticky navbar
        const allIds = tocItems.map(item => item.id);
        
        let foundId = allIds[0];
        for (let i = 0; i < allIds.length; i++) {
          const el = document.getElementById(allIds[i]);
          if (el) {
            const top = el.getBoundingClientRect().top + window.scrollY;
            if (top <= scrollPosition) {
              foundId = allIds[i];
            } else {
              break;
            }
          }
        }

        if (foundId) {
          setActiveId(foundId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, [tocItems]);

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveId(id);
      if (onCloseMobileDrawer) {
        onCloseMobileDrawer();
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveId('lesson-header');
    if (onCloseMobileDrawer) {
      onCloseMobileDrawer();
    }
  };

  return (
    <nav
      ref={tocContainerRef}
      aria-label="Table of Contents"
      id="lesson-toc-sidebar"
      className={`rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col overflow-hidden text-xs transition-all ${className}`}
    >
      {/* Header */}
      <div className="p-3.5 sm:p-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/50 space-y-2.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold">
              <List className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm">
                មាតិកាមេរៀន
              </h3>
              <p className="text-[10px] text-slate-500 dark:text-slate-400">
                រុករកចំណងជើងរង & ផ្នែកសិក្សា
              </p>
            </div>
          </div>

          {isMobileDrawer && onCloseMobileDrawer && (
            <button
              type="button"
              onClick={onCloseMobileDrawer}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800"
              aria-label="Close Table of Contents"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Reading Progress Indicator */}
        <div className="space-y-1">
          <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 font-mono">
            <span>ដំណើរការអាន</span>
            <span className="font-semibold text-blue-600 dark:text-blue-400">{readProgress}%</span>
          </div>
          <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"
              style={{ width: `${readProgress}%` }}
              transition={{ ease: 'easeOut', duration: 0.2 }}
            />
          </div>
        </div>

        {/* Search / Filter Subheadings */}
        <div className="relative">
          <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={filterQuery}
            onChange={(e) => setFilterQuery(e.target.value)}
            placeholder="ស្វែងរកចំណងជើងរង (ឧ. Variables)..."
            className="w-full pl-8 pr-7 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[11px] text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-hidden focus:ring-1 focus:ring-blue-500"
          />
          {filterQuery && (
            <button
              type="button"
              onClick={() => setFilterQuery('')}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              <X className="w-3 h-3" />
            </button>
          )}
        </div>
      </div>

      {/* Items List */}
      <div className="p-2 sm:p-2.5 max-h-[calc(100vh-280px)] overflow-y-auto space-y-0.5 scrollbar-thin scrollbar-thumb-slate-200 dark:scrollbar-thumb-slate-800">
        {filteredItems.length === 0 ? (
          <div className="p-4 text-center text-slate-500 dark:text-slate-400 text-xs">
            រកមិនឃើញចំណងជើងរង &quot;{filterQuery}&quot; ទេ
          </div>
        ) : (
          filteredItems.map((item) => {
            const isActive = activeId === item.id;
            const Icon = item.icon || Hash;
            const isSubheading = item.level > 1;

            return (
              <button
                key={item.id}
                type="button"
                id={`toc-item-${item.id}`}
                onClick={() => scrollToId(item.id)}
                className={`w-full text-left relative group rounded-xl px-2.5 py-1.5 flex items-center justify-between gap-2 transition-colors ${
                  isSubheading ? 'pl-6 text-[11px]' : 'text-xs font-semibold'
                } ${
                  isActive
                    ? 'text-blue-700 dark:text-blue-300 font-bold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100/70 dark:hover:bg-slate-800/50'
                }`}
              >
                {/* Active Indicator Bar / Pill with Motion */}
                {isActive && (
                  <motion.div
                    layoutId="active-toc-pill"
                    className="absolute inset-0 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200/80 dark:border-blue-800/60"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}

                <div className="relative z-10 flex items-center gap-2 min-w-0 flex-1">
                  <Icon
                    className={`w-3.5 h-3.5 flex-shrink-0 transition-colors ${
                      isActive
                        ? 'text-blue-600 dark:text-blue-400'
                        : isSubheading
                        ? 'text-slate-400 dark:text-slate-500 group-hover:text-slate-600'
                        : 'text-slate-500 dark:text-slate-400 group-hover:text-slate-700'
                    }`}
                  />
                  <span className="truncate">{item.title}</span>
                </div>

                {item.badge && (
                  <span
                    className={`relative z-10 text-[10px] px-1.5 py-0.2 rounded-md font-mono flex-shrink-0 ${
                      isActive
                        ? 'bg-blue-200/70 dark:bg-blue-900/60 text-blue-800 dark:text-blue-200 font-semibold'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })
        )}
      </div>

      {/* Footer Navigation Helpers */}
      <div className="p-2.5 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 flex items-center justify-between gap-1 text-[11px]">
        <button
          type="button"
          onClick={scrollToTop}
          className="flex items-center gap-1 px-2 py-1 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          title="ត្រឡប់ទៅខាងលើបង្អស់"
        >
          <ArrowUp className="w-3.5 h-3.5" />
          <span>ទៅលើបង្អស់</span>
        </button>

        {onOpenPlayground && (
          <button
            type="button"
            onClick={() => {
              onOpenPlayground();
              if (onCloseMobileDrawer) onCloseMobileDrawer();
            }}
            className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-500/20 font-medium transition-colors"
          >
            <Play className="w-3 h-3 fill-current" />
            <span>Playground</span>
          </button>
        )}
      </div>
    </nav>
  );
};
