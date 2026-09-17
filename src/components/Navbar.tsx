import React from 'react';
import { LayoutDashboard, BookOpen, Code2, Map, Award, BookA, Sun, Moon } from 'lucide-react';
import { Lesson, AppViewMode } from '../types';
import { useTheme } from '../context/ThemeContext';
import { LessonSearchBar } from './LessonSearchBar';

interface NavbarProps {
  lessons: Lesson[];
  activeLessonId: number;
  onSelectLesson: (id: number) => void;
  currentView: AppViewMode;
  onChangeView: (view: AppViewMode) => void;
  onOpenRubric: () => void;
  onOpenGlossary: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lessons,
  activeLessonId,
  onSelectLesson,
  currentView,
  onChangeView,
  onOpenRubric,
  onOpenGlossary,
}) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav aria-label="Main Navigation" className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 sticky top-0 z-40 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-2 sm:gap-4">
          {/* Logo / Course Title */}
          <button
            type="button"
            onClick={() => onChangeView('dashboard')}
            className="flex items-center space-x-2.5 sm:space-x-3 flex-shrink-0 text-left cursor-pointer group"
            title="ត្រឡប់ទៅកាន់ផ្ទាំងគ្រប់គ្រង (Dashboard)"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500 dark:text-amber-400 font-bold text-base sm:text-lg group-hover:scale-105 transition-transform">
              JS
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-slate-900 dark:text-white font-bold text-sm sm:text-base lg:text-lg tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  ការប្រើប្រាស់ JavaScript
                </span>
                <span className="hidden xl:inline-block px-2 py-0.5 text-xs font-medium rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                  Front-End Y2
                </span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 hidden xl:block">
                CLEAR Framework • មូលដ្ឋានគ្រឹះ JavaScript
              </p>
            </div>
          </button>

          {/* Quick Search Bar */}
          <LessonSearchBar
            lessons={lessons}
            onSelectLesson={onSelectLesson}
            onChangeView={onChangeView}
          />

          {/* View Mode Controls & Theme Toggle */}
          <div className="flex items-center space-x-1 sm:space-x-1.5 flex-shrink-0">
            <button
              id="nav-btn-dashboard"
              type="button"
              onClick={() => onChangeView('dashboard')}
              className={`flex items-center space-x-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                currentView === 'dashboard'
                  ? 'btn-primary shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <LayoutDashboard className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">ផ្ទាំងគ្រប់គ្រង</span>
            </button>

            <button
              id="nav-btn-lessons"
              type="button"
              onClick={() => onChangeView('lesson')}
              className={`flex items-center space-x-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                currentView === 'lesson'
                  ? 'btn-primary shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">មេរៀន</span>
            </button>

            <button
              id="nav-btn-playground"
              type="button"
              onClick={() => onChangeView('playground')}
              className={`flex items-center space-x-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                currentView === 'playground'
                  ? 'btn-warning shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <Code2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="hidden md:inline">សាកល្បងកូដ</span>
            </button>

            <button
              id="nav-btn-roadmap"
              type="button"
              onClick={() => onChangeView('roadmap')}
              className={`flex items-center space-x-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                currentView === 'roadmap'
                  ? 'btn-success shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <Map className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="hidden lg:inline">ផែនទីសិក្សា</span>
            </button>

            {/* Rubric button */}
            <button
              id="nav-btn-rubric"
              type="button"
              onClick={onOpenRubric}
              className="flex items-center space-x-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold badge-warning hover:bg-amber-500/20 transition-colors cursor-pointer"
              title="តារាងពិន្ទុគម្រោង ១០០"
            >
              <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="hidden xl:inline">ពិន្ទុ ១០០</span>
            </button>

            {/* Glossary button */}
            <button
              id="nav-btn-glossary"
              type="button"
              onClick={onOpenGlossary}
              className="flex items-center space-x-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold badge-info hover:bg-sky-500/20 transition-colors cursor-pointer"
              title="វចនានុក្រមពាក្យបច្ចេកទេស"
            >
              <BookA className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="hidden xl:inline">វាក្យសព្ទ</span>
            </button>

            {/* Divider */}
            <div className="h-5 w-px bg-slate-200 dark:bg-slate-700/80 mx-0.5 sm:mx-1" aria-hidden="true" />

            {/* Theme Toggle Button */}
            <button
              id="nav-btn-theme-toggle"
              type="button"
              onClick={toggleTheme}
              className="btn-light flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium cursor-pointer"
              title={theme === 'dark' ? "ប្តូរទៅទម្រង់ពន្លឺ (Switch to Light Mode)" : "ប្តូរទៅទម្រង់ងងឹត (Switch to Dark Mode)"}
              aria-label={theme === 'dark' ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {theme === 'dark' ? (
                <>
                  <Sun className="w-4 h-4 text-amber-400 fill-amber-400/20" />
                  <span className="hidden sm:inline">ពន្លឺ</span>
                </>
              ) : (
                <>
                  <Moon className="w-4 h-4 text-indigo-600 fill-indigo-600/20" />
                  <span className="hidden sm:inline">ងងឹត</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Lesson quick-select pill strip */}
        <div className="py-2 overflow-x-auto flex space-x-1.5 scrollbar-none border-t border-slate-200 dark:border-slate-800/80">
          {lessons.map((lesson) => {
            const isActive = lesson.id === activeLessonId && currentView === 'lesson';
            return (
              <button
                key={lesson.id}
                id={`pill-lesson-${lesson.id}`}
                type="button"
                onClick={() => {
                  onSelectLesson(lesson.id);
                  onChangeView('lesson');
                }}
                className={`whitespace-nowrap px-3 py-1 text-xs rounded-full font-medium transition-all ${
                  isActive
                    ? 'bg-blue-600 dark:bg-blue-500 text-white shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white border border-slate-200/80 dark:border-transparent'
                }`}
              >
                មេរៀនទី {lesson.id}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
