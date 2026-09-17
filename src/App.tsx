import { useState } from 'react';
import { lessonsData } from './data/lessonsData';
import { AppViewMode } from './types';
import { Navbar } from './components/Navbar';
import { LessonViewer } from './components/LessonViewer';
import { CodePlayground } from './components/CodePlayground';
import { CurriculumRoadmapView } from './components/CurriculumRoadmapView';
import { JavaScriptDashboardView } from './components/JavaScriptDashboardView';
import { RubricModal } from './components/RubricModal';
import { GlossaryModal } from './components/GlossaryModal';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { ArrowUp, BookOpen, Code2, Map, Award, BookA, Sparkles, CheckCircle2, LayoutDashboard } from 'lucide-react';

function AppContent() {
  const { theme } = useTheme();
  const [activeLessonId, setActiveLessonId] = useState<number>(1);
  const [currentView, setCurrentView] = useState<AppViewMode>('dashboard');
  const [playgroundInitialCode, setPlaygroundInitialCode] = useState<string | undefined>(undefined);
  const [isRubricOpen, setIsRubricOpen] = useState<boolean>(false);
  const [isGlossaryOpen, setIsGlossaryOpen] = useState<boolean>(false);

  const currentLesson = lessonsData.find((l) => l.id === activeLessonId) || lessonsData[0];

  const handleOpenPlaygroundWithCode = (code: string) => {
    setPlaygroundInitialCode(code);
    setCurrentView('playground');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectLesson = (id: number) => {
    setActiveLessonId(id);
    setCurrentView('lesson');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      id="app-root-container"
      className={`min-h-screen ${
        theme === 'dark' ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
      } flex flex-col font-sans transition-colors duration-200 selection:bg-blue-500/20 selection:text-blue-600 dark:selection:text-blue-300`}
    >
      {/* Header */}
      <header id="app-header" className="w-full sticky top-0 z-40">
        <Navbar
          lessons={lessonsData}
          activeLessonId={activeLessonId}
          onSelectLesson={handleSelectLesson}
          currentView={currentView}
          onChangeView={setCurrentView}
          onOpenRubric={() => setIsRubricOpen(true)}
          onOpenGlossary={() => setIsGlossaryOpen(true)}
        />
      </header>

      {/* Central Section - Centered Responsive Container */}
      <section id="app-central-section" className="flex-1 w-full flex flex-col justify-start">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 flex-1 flex flex-col">
          <main id="app-main-content" className="w-full flex-1">
            {currentView === 'dashboard' && (
              <JavaScriptDashboardView
                lessons={lessonsData}
                onSelectLesson={handleSelectLesson}
                onOpenPlaygroundWithCode={handleOpenPlaygroundWithCode}
                onChangeView={setCurrentView}
              />
            )}

            {currentView === 'lesson' && (
              <LessonViewer
                lesson={currentLesson}
                totalLessons={lessonsData.length}
                onNavigateLesson={handleSelectLesson}
                onOpenPlaygroundWithCode={handleOpenPlaygroundWithCode}
              />
            )}

            {currentView === 'playground' && (
              <div className="max-w-6xl mx-auto space-y-6">
                <div>
                  <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                    JavaScript Live Code Playground
                  </h1>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                    សរសេរកូដ សាកល្បង Function និងមើល Console Output ផ្ទាល់ក្នុង Browser
                  </p>
                </div>
                <CodePlayground
                  initialCode={playgroundInitialCode}
                  lessonTitle={currentLesson.titleKm}
                />
              </div>
            )}

            {currentView === 'roadmap' && (
              <CurriculumRoadmapView onSelectLesson={handleSelectLesson} />
            )}
          </main>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="app-footer"
        className="w-full border-t border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xs transition-colors mt-auto"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 pb-8 border-b border-slate-200 dark:border-slate-800">
            {/* Column 1: Brand & Overview */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-600 dark:text-amber-400 font-bold text-sm">
                  JS
                </div>
                <span className="font-bold text-slate-900 dark:text-white text-base">
                  ការប្រើប្រាស់ JavaScript
                </span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                កម្មវិធីសិក្សាមូលដ្ឋានគ្រឹះភាសា JavaScript តាមគរុកោសល្យទំនើប CLEAR Framework
                រៀបចំឡើងសម្រាប់និស្សិតឆ្នាំទី២ ផ្នែកវិទ្យាសាស្ត្រកុំព្យូទ័រ និងបច្ចេកវិទ្យាព័ត៌មាន។
              </p>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-500/20 text-[11px] font-medium">
                <Sparkles className="w-3 h-3" />
                <span>១៤ មេរៀនស្នូល • អនុវត្តជាក់ស្តែង</span>
              </div>
            </div>

            {/* Column 2: Quick Learning Navigation */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                ផ្នែកសិក្សាសំខាន់ៗ
              </h3>
              <ul className="space-y-2 text-xs">
                <li>
                  <button
                    type="button"
                    onClick={() => {
                      setCurrentView('dashboard');
                      handleScrollToTop();
                    }}
                    className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors cursor-pointer"
                  >
                    <LayoutDashboard className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                    <span>ផ្ទាំងគ្រប់គ្រង (Dashboard)</span>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => {
                      setCurrentView('lesson');
                      handleScrollToTop();
                    }}
                    className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors cursor-pointer"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                    <span>មេរៀនទ្រឹស្តី & លំហាត់ (Lessons)</span>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => {
                      setCurrentView('playground');
                      handleScrollToTop();
                    }}
                    className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 font-medium transition-colors cursor-pointer"
                  >
                    <Code2 className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
                    <span>សាកល្បងកូដផ្ទាល់ (Live Playground)</span>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => {
                      setCurrentView('roadmap');
                      handleScrollToTop();
                    }}
                    className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 font-medium transition-colors cursor-pointer"
                  >
                    <Map className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span>ផែនទីកម្មវិធីសិក្សា (Roadmap)</span>
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: Academic Standards & Tools */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                ឧបករណ៍ & ឯកសារយោង
              </h3>
              <ul className="space-y-2 text-xs">
                <li>
                  <button
                    type="button"
                    onClick={() => setIsRubricOpen(true)}
                    className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors cursor-pointer"
                  >
                    <Award className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                    <span>តារាងពិន្ទុវាយតម្លៃគម្រោង ១០០ ពិន្ទុ</span>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setIsGlossaryOpen(true)}
                    className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 font-medium transition-colors cursor-pointer"
                  >
                    <BookA className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
                    <span>វចនានុក្រមបច្ចេកទេស JavaScript (ខ្មែរ-អង់គ្លេស)</span>
                  </button>
                </li>
                <li className="flex items-center gap-2 text-slate-500 dark:text-slate-400 pt-1">
                  <span className="text-[11px]">ស្វែងរកមេរៀនរហ័ស៖</span>
                  <kbd className="badge-dark px-2 py-0.5 rounded text-[10px] font-mono shadow-2xs">
                    Ctrl + K
                  </kbd>
                </li>
              </ul>
            </div>

            {/* Column 4: CLEAR Framework Principles */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                គោលការណ៍គរុកោសល្យ CLEAR
              </h3>
              <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                  <span><strong className="text-blue-600 dark:text-blue-400">C</strong>oncepts ពន្យល់ជាភាសាខ្មែរ</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                  <span><strong className="text-sky-600 dark:text-sky-400">L</strong>inked Scenarios កាលៈទេសៈពិត</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                  <span><strong className="text-amber-600 dark:text-amber-400">E</strong>xamples វាក្យសម្ព័ន្ធស្តង់ដារ ES6+</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                  <span><strong className="text-purple-600 dark:text-purple-400">A</strong>pplication គម្រោងអនុវត្តផ្ទាល់</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                  <span><strong className="text-rose-600 dark:text-rose-400">R</strong>eview កម្រងសំណួរ & ជួសជុលកំហុស</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
            <div>
              <span>© 2026 មូលដ្ឋានគ្រឹះនៃភាសា JavaScript • ឯកសារបង្រៀននិស្សិតឆ្នាំទី២</span>
            </div>

            <div className="flex items-center space-x-3">
              <span className="badge-primary px-3 py-1 rounded-full text-[11px] font-mono font-medium">
                កំពុងមើល៖ មេរៀនទី {currentLesson.id} ({currentLesson.titleEn})
              </span>
              <button
                type="button"
                onClick={handleScrollToTop}
                className="btn-light flex items-center space-x-1 px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer"
                title="ត្រឡប់ទៅខាងលើបង្អស់"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>ឡើងលើ</span>
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <RubricModal isOpen={isRubricOpen} onClose={() => setIsRubricOpen(false)} />
      <GlossaryModal isOpen={isGlossaryOpen} onClose={() => setIsGlossaryOpen(false)} />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
