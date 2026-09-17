import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  BookOpen,
  CheckCircle2,
  AlertTriangle,
  Play,
  ChevronRight,
  ChevronLeft,
  FileCode2,
  HelpCircle,
  Eye,
  EyeOff,
  List
} from 'lucide-react';
import { Lesson } from '../types';
import { QuizCard } from './QuizCard';
import { RichMarkdown } from './RichMarkdown';
import { WebTrinityDiagram } from './WebTrinityDiagram';
import { TrinityVisualComparison } from './TrinityVisualComparison';
import { LessonTableOfContents } from './LessonTableOfContents';
import { CodeBlock } from './CodeBlock';

interface LessonViewerProps {
  lesson: Lesson;
  totalLessons: number;
  onNavigateLesson: (id: number) => void;
  onOpenPlaygroundWithCode: (code: string) => void;
}

export const LessonViewer: React.FC<LessonViewerProps> = ({
  lesson,
  totalLessons,
  onNavigateLesson,
  onOpenPlaygroundWithCode
}) => {
  const [activeFileTab, setActiveFileTab] = useState<number>(0);
  const [visibleSolutions, setVisibleSolutions] = useState<Record<number, boolean>>({});
  const [isMobileTocOpen, setIsMobileTocOpen] = useState<boolean>(false);

  const toggleSolution = (idx: number) => {
    setVisibleSolutions((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const getCategoryBadgeClass = (category: string) => {
    if (category.includes('មូលដ្ឋាន') || category.toLowerCase().includes('basic') || category.toLowerCase().includes('core')) {
      return 'badge-primary';
    }
    if (category.includes('លក្ខខណ្ឌ') || category.includes('រង្វិលជុំ') || category.toLowerCase().includes('logic')) {
      return 'badge-secondary';
    }
    if (category.includes('DOM') || category.includes('Event') || category.toLowerCase().includes('dom')) {
      return 'badge-info';
    }
    if (category.includes('ទិន្នន័យ') || category.includes('Object') || category.includes('Array')) {
      return 'badge-warning';
    }
    if (category.includes('គម្រោង') || category.toLowerCase().includes('project')) {
      return 'badge-success';
    }
    return 'badge-primary';
  };

  const getExerciseBadgeClass = (level: string) => {
    if (level.includes('១') || level.toLowerCase().includes('basic') || level.toLowerCase().includes('beginner')) {
      return 'badge-success';
    }
    if (level.includes('២') || level.toLowerCase().includes('intermediate') || level.toLowerCase().includes('medium')) {
      return 'badge-warning';
    }
    if (level.includes('៣') || level.toLowerCase().includes('advanced') || level.toLowerCase().includes('hard')) {
      return 'badge-danger';
    }
    return 'badge-info';
  };

  return (
    <div className="w-full relative flex justify-center gap-6 xl:gap-8 items-start">
      {/* Main Lesson Content */}
      <article className="flex-1 min-w-0 max-w-4xl space-y-10 pb-12">
        {/* Lesson Header */}
        <header id="lesson-header" className="scroll-mt-24 space-y-4 pb-6 border-b border-slate-200 dark:border-slate-800">
          <div className="flex flex-wrap items-center gap-2">
            <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${getCategoryBadgeClass(lesson.category)}`}>
              {lesson.category}
            </span>
            <span className="text-xs text-slate-400 dark:text-slate-500">•</span>
            <span className="badge-light px-2 py-0.5 rounded-md text-xs font-mono">
              មេរៀនទី {lesson.id} នៃ {totalLessons}
            </span>
          </div>

          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight leading-snug">
              {lesson.titleKm}
            </h1>
            <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-medium mt-1">
              {lesson.titleEn}
            </p>
          </div>
        </header>

        {/* Learning Outcomes */}
        <section id="lesson-outcomes" className="scroll-mt-24 space-y-3">
          <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            <span>គោលបំណង</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {lesson.learningOutcomes.map((outcome, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/40 dark:hover:border-emerald-500/40 flex items-start space-x-2.5 text-xs text-slate-700 dark:text-slate-300 leading-relaxed shadow-xs transition-colors"
              >
                <span className="badge-success w-5 h-5 rounded-full flex items-center justify-center font-mono flex-shrink-0 text-[10px] font-bold">
                  {idx + 1}
                </span>
                <span>{outcome}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Real-World Scenario */}
        <section id="lesson-scenario" className="scroll-mt-24 p-5 rounded-2xl bg-gradient-to-br from-sky-50 via-blue-50/60 to-indigo-50/70 dark:from-slate-900 dark:via-blue-950/40 dark:to-slate-900 border border-sky-200 dark:border-sky-800/60 space-y-2 shadow-xs">
          <span className="badge-info text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md inline-block">
            ការអនុវត្តន៍ជាក់ស្តែង
          </span>
          <div className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed pt-1">
            <RichMarkdown content={lesson.scenario} inline />
          </div>
        </section>

        {/* The Web Trinity Component (បង្ហាញតែនៅក្នុងមេរៀនទី១) */}
        {lesson.id === 1 && (
          <>
            <section id="web-trinity-section" className="scroll-mt-24 space-y-3">
              <WebTrinityDiagram
                defaultExpanded={true}
                collapsible={true}
                onOpenCode={onOpenPlaygroundWithCode}
              />
            </section>

            {/* Visual Trinity Analogy Comparison (Skeleton, Clothing, Brain) */}
            <section id="trinity-visual-analogy" className="scroll-mt-24 space-y-3">
              <TrinityVisualComparison onOpenCode={onOpenPlaygroundWithCode} />
            </section>
          </>
        )}

        {/* Concepts Explanation */}
        <section id="lesson-concepts" className="scroll-mt-24 space-y-4">
          <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span>ការពន្យល់លម្អិត</span>
          </h2>
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300 shadow-xs">
            <RichMarkdown
              content={lesson.conceptsExplanation}
              onRunCode={onOpenPlaygroundWithCode}
            />
          </div>
        </section>

        {/* Syntax Examples */}
        <section id="lesson-syntax" className="scroll-mt-24 space-y-4">
          <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <FileCode2 className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            <span>លំហាត់អនុវត្តន៍</span>
          </h2>
          <div className="space-y-4">
            {lesson.syntaxExamples.map((ex, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between px-1 gap-0.5">
                  <h3 className="text-xs font-bold text-slate-900 dark:text-slate-200">{ex.title}</h3>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">{ex.description}</p>
                </div>
                <CodeBlock
                  code={ex.code}
                  language="javascript"
                  title={ex.title}
                  showLineNumbers={true}
                  onRun={() => onOpenPlaygroundWithCode(ex.code)}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Guided Practice with full files */}
        {lesson.guidedPractice && lesson.guidedPractice.files.length > 0 && (
          <section id="lesson-practice" className="scroll-mt-24 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Play className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <span>កម្មវិធីអនុវត្តដែលមានការណែនាំ (Guided Practice Project)</span>
              </h2>
              {lesson.guidedPractice.runnableJsCode && (
                <button
                  type="button"
                  onClick={() => onOpenPlaygroundWithCode(lesson.guidedPractice.runnableJsCode!)}
                  className="btn-success flex items-center gap-1.5 text-xs font-semibold px-3.5 py-1.5 rounded-xl cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>សាកល្បងក្នុង Playground</span>
                </button>
              )}
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden p-5 space-y-4 shadow-xs">
              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">{lesson.guidedPractice.title}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">{lesson.guidedPractice.description}</p>
              </div>

              {/* File Tabs */}
              <div className="border-b border-slate-200 dark:border-slate-800 flex space-x-2">
                {lesson.guidedPractice.files.map((file, fIdx) => (
                  <button
                    key={fIdx}
                    type="button"
                    onClick={() => setActiveFileTab(fIdx)}
                    className={`px-3 py-2 text-xs font-mono font-medium border-b-2 rounded-t-lg transition-colors cursor-pointer ${
                      activeFileTab === fIdx
                        ? 'border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-400 bg-blue-50/70 dark:bg-blue-950/40'
                        : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/40'
                    }`}
                  >
                    {file.filename}
                  </button>
                ))}
              </div>

              {/* Active File Content with Prism Syntax Highlighting */}
              {lesson.guidedPractice.files[activeFileTab] && (
                <CodeBlock
                  code={lesson.guidedPractice.files[activeFileTab].code}
                  filename={lesson.guidedPractice.files[activeFileTab].filename}
                  language={
                    lesson.guidedPractice.files[activeFileTab].filename.endsWith('.html')
                      ? 'markup'
                      : lesson.guidedPractice.files[activeFileTab].filename.endsWith('.css')
                      ? 'css'
                      : 'javascript'
                  }
                  showLineNumbers={true}
                  maxHeight="max-h-96"
                  onRun={
                    lesson.guidedPractice.files[activeFileTab].filename.endsWith('.js') && lesson.guidedPractice.runnableJsCode
                      ? () => onOpenPlaygroundWithCode(lesson.guidedPractice.runnableJsCode!)
                      : undefined
                  }
                />
              )}

              <div className="p-3.5 rounded-xl bg-slate-100/80 dark:bg-slate-800/50 text-xs text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60">
                <strong className="text-slate-900 dark:text-white font-semibold">លទ្ធផលរំពឹងទុក៖ </strong>
                <RichMarkdown content={lesson.guidedPractice.expectedOutput} inline />
              </div>
            </div>
          </section>
        )}

        {/* Common Mistakes */}
        {lesson.commonMistakes && lesson.commonMistakes.length > 0 && (
          <section id="lesson-mistakes" className="scroll-mt-24 space-y-4">
            <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-rose-500 dark:text-rose-400" />
              <span>កំហុសឆ្គងទូទៅ (Common Mistakes)</span>
            </h2>
            <div className="space-y-3">
              {lesson.commonMistakes.map((mistake, mIdx) => (
                <div
                  key={mIdx}
                  className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-rose-300 dark:hover:border-rose-900/50 space-y-2.5 text-xs shadow-xs transition-colors"
                >
                  <div className="flex items-center space-x-2 text-rose-600 dark:text-rose-400 font-bold text-sm">
                    <span className="badge-danger px-2 py-0.5 rounded-md text-xs font-bold">កំហុស</span>
                    <span>✗ {mistake.mistake}</span>
                  </div>
                  <div className="text-slate-600 dark:text-slate-400 pl-1">
                    <RichMarkdown content={mistake.cause} inline />
                  </div>
                  {mistake.wrongCode && mistake.fixedCode && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 font-mono text-[11px]">
                      <div className="rounded-xl overflow-hidden border border-rose-200 dark:border-rose-900/50 bg-rose-50/40 dark:bg-rose-950/20">
                        <div className="px-3 py-1.5 bg-rose-100/70 dark:bg-rose-950/50 text-[11px] text-rose-700 dark:text-rose-300 font-bold border-b border-rose-200 dark:border-rose-900/30 flex items-center gap-1.5">
                          <span>❌</span>
                          <span>កូដខុស (Wrong code)：</span>
                        </div>
                        <div className="p-1">
                          <CodeBlock
                            code={mistake.wrongCode}
                            language="javascript"
                            showLineNumbers={false}
                            className="border-0 shadow-none rounded-lg"
                          />
                        </div>
                      </div>
                      <div className="rounded-xl overflow-hidden border border-emerald-200 dark:border-emerald-900/50 bg-emerald-50/40 dark:bg-emerald-950/20">
                        <div className="px-3 py-1.5 bg-emerald-100/70 dark:bg-emerald-950/50 text-[11px] text-emerald-700 dark:text-emerald-300 font-bold border-b border-emerald-200 dark:border-emerald-900/30 flex items-center gap-1.5">
                          <span>✅</span>
                          <span>កូដត្រឹមត្រូវ (Fixed code)：</span>
                        </div>
                        <div className="p-1">
                          <CodeBlock
                            code={mistake.fixedCode}
                            language="javascript"
                            showLineNumbers={false}
                            className="border-0 shadow-none rounded-lg"
                            onRun={() => onOpenPlaygroundWithCode(mistake.fixedCode)}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="bg-emerald-50/80 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/40 p-2.5 rounded-xl text-emerald-950 dark:text-emerald-200 font-medium pt-1 flex items-start gap-1.5">
                    <span className="text-base leading-none">💡</span>
                    <div>
                      <strong className="text-emerald-700 dark:text-emerald-300 font-bold">វិធីកែសម្រួល៖ </strong>
                      <RichMarkdown content={mistake.fix} inline />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Practice Exercises */}
        {lesson.exercises && lesson.exercises.length > 0 && (
          <section id="lesson-exercises" className="scroll-mt-24 space-y-4">
            <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span>លំហាត់អនុវត្ត ៣ កម្រិត (Practice Exercises)</span>
            </h2>
            <div className="space-y-3">
              {lesson.exercises.map((ex, eIdx) => (
                <div
                  key={eIdx}
                  className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-400/40 dark:hover:border-blue-600/40 space-y-3 shadow-xs transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className={`px-2.5 py-0.5 rounded-md text-xs font-bold ${getExerciseBadgeClass(ex.level)}`}>
                      {ex.level}
                    </span>
                    <button
                      type="button"
                      onClick={() => toggleSolution(eIdx)}
                      className="btn-light flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-lg cursor-pointer"
                    >
                      {visibleSolutions[eIdx] ? (
                        <>
                          <EyeOff className="w-3.5 h-3.5" />
                          <span>លាក់ចម្លើយគំរូ</span>
                        </>
                      ) : (
                        <>
                          <Eye className="w-3.5 h-3.5" />
                          <span>មើលចម្លើយគំរូ</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
                    <RichMarkdown content={ex.prompt} />
                  </div>

                  {visibleSolutions[eIdx] && (
                    <div className="space-y-2 pt-2 border-t border-slate-200 dark:border-slate-800/80">
                      <CodeBlock
                        code={ex.solutionCode}
                        language="javascript"
                        title="ចម្លើយគំរូ (Solution Example)"
                        showLineNumbers={true}
                        onRun={() => onOpenPlaygroundWithCode(ex.solutionCode)}
                      />
                      <div className="text-xs text-slate-600 dark:text-slate-400 italic">
                        <RichMarkdown content={ex.explanation} inline />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Quiz */}
        {lesson.quiz && lesson.quiz.length > 0 && (
          <div id="lesson-quiz" className="scroll-mt-24">
            <QuizCard questions={lesson.quiz} lessonTitle={lesson.titleKm} />
          </div>
        )}

        {/* Summary */}
        <section id="lesson-summary" className="scroll-mt-24 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 shadow-xs">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
            សេចក្តីសង្ខេបមេរៀន (Lesson Summary)
          </h2>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 list-disc pl-5 leading-relaxed">
            {lesson.summary.map((point, sIdx) => (
              <li key={sIdx}>
                <RichMarkdown content={point} inline />
              </li>
            ))}
          </ul>
        </section>

        {/* Footer Navigation */}
        <footer className="pt-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <button
            type="button"
            disabled={lesson.id <= 1}
            onClick={() => onNavigateLesson(lesson.id - 1)}
            className={`flex items-center space-x-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              lesson.id <= 1
                ? 'text-slate-400 dark:text-slate-600 bg-slate-100 dark:bg-slate-900/50 cursor-not-allowed border border-slate-200 dark:border-slate-800/40'
                : 'btn-light cursor-pointer'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>មេរៀនមុន</span>
          </button>

          <span className="badge-light px-3 py-1 rounded-lg text-xs font-mono font-semibold">
            {lesson.id} / {totalLessons}
          </span>

          <button
            type="button"
            disabled={lesson.id >= totalLessons}
            onClick={() => onNavigateLesson(lesson.id + 1)}
            className={`flex items-center space-x-1.5 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              lesson.id >= totalLessons
                ? 'text-slate-400 dark:text-slate-600 bg-slate-100 dark:bg-slate-900/50 cursor-not-allowed border border-slate-200 dark:border-slate-800/40'
                : 'btn-primary cursor-pointer'
            }`}
          >
            <span>មេរៀនបន្ទាប់</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </footer>
      </article>

      {/* Table of Contents Sticky Sidebar on Desktop (lg & xl) */}
      <aside className="hidden lg:block lg:w-64 xl:w-72 flex-shrink-0 sticky top-20 z-10 self-start">
        <LessonTableOfContents
          lesson={lesson}
          onOpenPlayground={() => onOpenPlaygroundWithCode(lesson.guidedPractice?.runnableJsCode || lesson.syntaxExamples[0]?.code || '')}
        />
      </aside>

      {/* Mobile & Tablet Floating TOC Button */}
      <div className="lg:hidden fixed bottom-6 right-6 z-30">
        <button
          type="button"
          id="mobile-toc-toggle-btn"
          onClick={() => setIsMobileTocOpen(true)}
          className="btn-primary flex items-center gap-2 px-4 py-2.5 rounded-full shadow-lg shadow-blue-500/30 text-xs font-semibold backdrop-blur-sm transition-transform active:scale-95 border border-blue-400/40 cursor-pointer"
          aria-label="Open Table of Contents"
        >
          <List className="w-4 h-4" />
          <span>មាតិកា</span>
        </button>
      </div>

      {/* Mobile & Tablet Drawer Modal */}
      <AnimatePresence>
        {isMobileTocOpen && (
          <div className="lg:hidden fixed inset-0 z-50 flex justify-end bg-slate-950/60 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileTocOpen(false)}
              className="absolute inset-0"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 26, stiffness: 320 }}
              className="relative w-full max-w-xs sm:max-w-sm h-full bg-white dark:bg-slate-900 shadow-2xl p-4 flex flex-col z-10"
            >
              <LessonTableOfContents
                lesson={lesson}
                className="h-full border-0 shadow-none"
                isMobileDrawer
                onCloseMobileDrawer={() => setIsMobileTocOpen(false)}
                onOpenPlayground={() => onOpenPlaygroundWithCode(lesson.guidedPractice?.runnableJsCode || lesson.syntaxExamples[0]?.code || '')}
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
