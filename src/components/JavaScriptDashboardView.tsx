import React, { useState, useEffect } from 'react';
import {
  Globe,
  Server,
  Smartphone,
  Monitor,
  Cloud,
  Cpu,
  Play,
  CheckCircle2,
  Circle,
  BookOpen,
  Code2,
  Map,
  Award,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Layers,
  Zap,
  RotateCcw,
  Check,
  AlertCircle
} from 'lucide-react';
import { Lesson, AppViewMode } from '../types';
import { javascriptDomains, architectureMechanics, usageQuizQuestions } from '../data/dashboardData';
import { CodeBlock } from './CodeBlock';

interface JavaScriptDashboardViewProps {
  lessons: Lesson[];
  onSelectLesson: (id: number) => void;
  onOpenPlaygroundWithCode: (code: string) => void;
  onChangeView: (view: AppViewMode) => void;
}

const STORAGE_KEY = 'js_course_completed_lessons';

export const JavaScriptDashboardView: React.FC<JavaScriptDashboardViewProps> = ({
  lessons,
  onSelectLesson,
  onOpenPlaygroundWithCode,
  onChangeView,
}) => {
  const [activeDomainId, setActiveDomainId] = useState<string>('frontend');
  const [completedLessonIds, setCompletedLessonIds] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [1]; // Lesson 1 completed by default
    } catch {
      return [1];
    }
  });

  // Quiz state
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);

  // Save progress to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(completedLessonIds));
    } catch (e) {
      console.warn('Could not save completion state to localStorage', e);
    }
  }, [completedLessonIds]);

  const toggleLessonCompletion = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setCompletedLessonIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const activeDomain = javascriptDomains.find((d) => d.id === activeDomainId) || javascriptDomains[0];

  const completionPercentage = Math.round((completedLessonIds.length / lessons.length) * 100);

  // Find next unfinished lesson
  const nextLessonId = lessons.find((l) => !completedLessonIds.includes(l.id))?.id || 1;

  // Domain icon resolver
  const renderDomainIcon = (iconName: string, className: string) => {
    switch (iconName) {
      case 'Globe':
        return <Globe className={className} />;
      case 'Server':
        return <Server className={className} />;
      case 'Smartphone':
        return <Smartphone className={className} />;
      case 'Monitor':
        return <Monitor className={className} />;
      case 'Cloud':
        return <Cloud className={className} />;
      case 'Cpu':
        return <Cpu className={className} />;
      default:
        return <Globe className={className} />;
    }
  };

  // Group lessons by category for progress
  const categoryGroups = lessons.reduce((acc, lesson) => {
    if (!acc[lesson.category]) {
      acc[lesson.category] = [];
    }
    acc[lesson.category].push(lesson);
    return acc;
  }, {} as Record<string, Lesson[]>);

  const handleQuizOptionSelect = (questionId: number, optionIndex: number) => {
    if (quizSubmitted) return;
    setQuizAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
  };

  const handleResetQuiz = () => {
    setQuizAnswers({});
    setQuizSubmitted(false);
  };

  const quizCorrectCount = usageQuizQuestions.filter(
    (q) => quizAnswers[q.id] === q.correctIndex
  ).length;

  return (
    <div className="max-w-6xl mx-auto px-2 sm:px-4 py-6 sm:py-8 space-y-10">
      {/* 1. Hero Banner: JavaScript Dashboard */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-700 to-slate-900 text-white p-6 sm:p-10 shadow-xl">
        <div className="relative z-10 space-y-5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-white text-xs font-semibold border border-white/20">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>ផ្ទាំងគ្រប់គ្រងការប្រើប្រាស់ JavaScript</span>
            </span>
            <span className="inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-mono font-medium border border-amber-400/30">
              JavaScript Ecosystem & Career Mastery
            </span>
          </div>

          <div className="space-y-2 max-w-3xl">
            <h1 className="text-2xl sm:text-4xl font-bold tracking-tight leading-tight">
              ស្វែងយល់និងការប្រើប្រាស់ JavaScript
            </h1>
            <p className="text-xs sm:text-base text-blue-100/90 leading-relaxed font-normal">
              JavaScript គឺជាភាសាតែមួយគត់ដែលអាចដំណើរការលើគ្រប់វេទិកា — ពី Web Front-End, Back-End Server, កម្មវិធីទូរស័ព្ទ Mobile Apps, កម្មវិធីកុំព្យូទ័រ Desktop រហូតដល់ Cloud & AI។ តាមដានវឌ្ឍនភាពសិក្សារបស់អ្នក និងរៀនសូត្រពីករណីប្រើប្រាស់ជាក់ស្តែងក្នុងឧស្សាហកម្ម IT ទំនើប។
            </p>
          </div>

          {/* Key Metrics Bento */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 space-y-1">
              <span className="text-[11px] text-blue-200 block">Web Dominance</span>
              <span className="text-xl sm:text-2xl font-bold text-amber-300 font-mono">98.9%</span>
              <p className="text-[11px] text-blue-100/80 leading-tight">គេហទំព័រលើពិភពលោកប្រើ Client JS</p>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 space-y-1">
              <span className="text-[11px] text-blue-200 block">កម្មវិធីសិក្សា CLEAR</span>
              <span className="text-xl sm:text-2xl font-bold text-emerald-300 font-mono">14 មេរៀន</span>
              <p className="text-[11px] text-blue-100/80 leading-tight">ពីគ្រឹះរហូតដល់ Full Project</p>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 space-y-1">
              <span className="text-[11px] text-blue-200 block">វិស័យអនុវត្តន៍ធំៗ</span>
              <span className="text-xl sm:text-2xl font-bold text-sky-300 font-mono">6 វិស័យ</span>
              <p className="text-[11px] text-blue-100/80 leading-tight">Web, Server, Mobile, Desktop, Cloud, AI</p>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 space-y-1">
              <span className="text-[11px] text-blue-200 block">វឌ្ឍនភាពរបស់អ្នក</span>
              <span className="text-xl sm:text-2xl font-bold text-rose-300 font-mono">
                {completionPercentage}%
              </span>
              <p className="text-[11px] text-blue-100/80 leading-tight">
                {completedLessonIds.length}/{lessons.length} មេរៀនបានបញ្ចប់
              </p>
            </div>
          </div>

          {/* Quick Action Triggers */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              type="button"
              onClick={() => onSelectLesson(nextLessonId)}
              className="btn-success flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm cursor-pointer shadow-lg shadow-emerald-900/30 active:scale-95 transition-transform"
            >
              <BookOpen className="w-4 h-4" />
              <span>បន្តការសិក្សា (មេរៀនទី {nextLessonId})</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              type="button"
              onClick={() => onChangeView('playground')}
              className="btn-warning flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm cursor-pointer shadow-lg shadow-amber-900/30 active:scale-95 transition-transform"
            >
              <Code2 className="w-4 h-4" />
              <span>សាកល្បងកូដផ្ទាល់ (Live Playground)</span>
            </button>

            <button
              type="button"
              onClick={() => onChangeView('roadmap')}
              className="btn-light flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm cursor-pointer active:scale-95 transition-transform"
            >
              <Map className="w-4 h-4 text-blue-600" />
              <span>មើលផែនទីសិក្សា (Roadmap)</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. Real-World JavaScript Domains & Use-Case Explorer */}
      <section className="space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span>វិស័យ និងករណីប្រើប្រាស់ជាក់ស្តែង (JavaScript Domains & Real-World Use Cases)</span>
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              ជ្រើសរើសវិស័យបច្ចេកវិទ្យាណាមួយដើម្បីស្វែងយល់ពីរបៀបដែល JavaScript ត្រូវបានប្រើប្រាស់ក្នុងក្រុមហ៊ុនធំៗ និងសាកល្បងកូដគំរូ
            </p>
          </div>
          <span className="badge-primary px-3 py-1 rounded-full text-xs font-mono self-start sm:self-auto">
            Full-Stack Universal Runtime
          </span>
        </div>

        {/* Domain Navigation Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {javascriptDomains.map((domain) => {
            const isActive = domain.id === activeDomainId;
            return (
              <button
                key={domain.id}
                type="button"
                onClick={() => setActiveDomainId(domain.id)}
                className={`flex flex-col items-center text-center p-3 rounded-2xl border transition-all cursor-pointer ${
                  isActive
                    ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/20 scale-[1.02]'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-600 hover:bg-blue-50/40 dark:hover:bg-slate-800/60'
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center mb-2 ${
                    isActive
                      ? 'bg-white/20 text-white'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  {renderDomainIcon(domain.iconName, 'w-5 h-5')}
                </div>
                <span className="text-xs font-bold leading-snug line-clamp-1">
                  {domain.titleEn.split(' ')[0]}
                </span>
                <span
                  className={`text-[10px] mt-0.5 ${
                    isActive ? 'text-blue-100' : 'text-slate-400 dark:text-slate-500'
                  }`}
                >
                  {domain.titleKm.split('(')[0].trim()}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Domain Showcase Card */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 sm:p-7 space-y-6 shadow-xs">
          {/* Domain Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-5">
            <div className="space-y-1.5">
              <div className="flex flex-wrap items-center gap-2">
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${activeDomain.badgeColor}`}>
                  {activeDomain.badge}
                </span>
                <span className="text-xs text-slate-400 dark:text-slate-500">•</span>
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                  {activeDomain.titleEn}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                {activeDomain.titleKm}
              </h3>
              <p className="text-xs sm:text-sm text-blue-600 dark:text-blue-400 font-medium">
                {activeDomain.taglineKm}
              </p>
            </div>

            <button
              type="button"
              onClick={() => onOpenPlaygroundWithCode(activeDomain.codeSample.code)}
              className="btn-success flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold self-start md:self-auto cursor-pointer shadow-xs active:scale-95 transition-transform"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>សាកល្បងកូដនេះក្នុង Playground</span>
            </button>
          </div>

          {/* Description & Insights Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <div className="lg:col-span-2 space-y-4">
              <div>
                <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-1.5">
                  តួនាទី និងសារៈសំខាន់ក្នុងការអនុវត្ត
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {activeDomain.descriptionKm}
                </p>
              </div>

              {/* Code Snippet with Run Button */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                    <Code2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                    <span>{activeDomain.codeSample.title}</span>
                  </span>
                  <span className="badge-dark text-[10px] font-mono px-2 py-0.5 rounded">
                    {activeDomain.codeSample.filename}
                  </span>
                </div>

                <CodeBlock
                  code={activeDomain.codeSample.code}
                  filename={activeDomain.codeSample.filename}
                  language={activeDomain.codeSample.language}
                  showLineNumbers={true}
                  maxHeight="max-h-80"
                  onRun={() => onOpenPlaygroundWithCode(activeDomain.codeSample.code)}
                />

                <p className="text-[11px] text-slate-500 dark:text-slate-400 italic">
                  💡 {activeDomain.codeSample.explanationKm}
                </p>
              </div>
            </div>

            {/* Sidebar: Enterprise Adoption & Key Libraries */}
            <div className="space-y-4 bg-slate-50/70 dark:bg-slate-800/40 p-4 sm:p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 flex flex-col justify-between">
              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
                    ក្រុមហ៊ុនល្បីៗដែលប្រើប្រាស់
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {activeDomain.enterpriseExamples.map((co, idx) => (
                      <span
                        key={idx}
                        className="badge-dark px-2.5 py-1 rounded-lg text-xs font-semibold"
                      >
                        {co}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
                    បណ្ណាល័យ & Frameworks ស្នូល
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {activeDomain.keyLibraries.map((lib, idx) => (
                      <span
                        key={idx}
                        className="badge-info px-2.5 py-1 rounded-lg text-xs font-medium"
                      >
                        {lib}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-200 dark:border-slate-700/60">
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 block font-medium">
                    ស្ថិតិទីផ្សារការងារ (Market Data)
                  </span>
                  <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                    {activeDomain.marketShare}
                  </span>
                </div>
              </div>

              <div className="pt-3">
                <button
                  type="button"
                  onClick={() => onChangeView('lesson')}
                  className="w-full btn-primary text-xs font-semibold py-2 px-3 rounded-xl flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>ចូលរៀនមេរៀនពាក់ព័ន្ធ</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Student Learning Progress & Mastery Tracker */}
      <section className="space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              <span>វឌ្ឍនភាពសិក្សា & ជំនាញសិស្ស (Student Learning Progress & Mastery)</span>
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              ចុចធីកលើប្រអប់ដើម្បីសម្គាល់មេរៀនដែលអ្នកបានយល់ច្បាស់ និងត្រៀមខ្លួនសម្រាប់គម្រោង ១០០ ពិន្ទុ
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="badge-success px-3 py-1 rounded-full text-xs font-mono font-bold">
              {completedLessonIds.length} / {lessons.length} បានបញ្ចប់ ({completionPercentage}%)
            </span>
          </div>
        </div>

        {/* Progress Bar Container */}
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 shadow-xs">
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-700 dark:text-slate-300">
              <span className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-amber-500" />
                <span>វឌ្ឍនភាពកម្មវិធីសិក្សាទាំងមូល (CLEAR Framework Y2)</span>
              </span>
              <span className="font-mono text-blue-600 dark:text-blue-400 font-bold text-sm">
                {completionPercentage}%
              </span>
            </div>
            {/* Visual Bar */}
            <div className="w-full h-3 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden p-0.5 border border-slate-200 dark:border-slate-700/60">
              <div
                className="h-full rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-500 transition-all duration-500"
                style={{ width: `${Math.max(5, completionPercentage)}%` }}
              />
            </div>
          </div>

          {/* Categorized Lessons Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
            {Object.entries(categoryGroups).map(([category, catLessons]) => {
              const catCompletedCount = catLessons.filter((l) => completedLessonIds.includes(l.id)).length;
              const isCatAllCompleted = catCompletedCount === catLessons.length;

              return (
                <div
                  key={category}
                  className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 space-y-2.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900 dark:text-white line-clamp-1">
                      {category}
                    </span>
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded-md font-bold ${
                        isCatAllCompleted ? 'badge-success' : 'badge-light'
                      }`}
                    >
                      {catCompletedCount}/{catLessons.length}
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    {catLessons.map((les) => {
                      const isDone = completedLessonIds.includes(les.id);
                      return (
                        <div
                          key={les.id}
                          onClick={() => onSelectLesson(les.id)}
                          className={`flex items-center justify-between p-2 rounded-lg text-xs transition-colors cursor-pointer group ${
                            isDone
                              ? 'bg-emerald-50/60 dark:bg-emerald-950/20 text-emerald-900 dark:text-emerald-300 border border-emerald-200/50 dark:border-emerald-800/30'
                              : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-500'
                          }`}
                        >
                          <div className="flex items-center space-x-2 min-w-0 pr-2">
                            <button
                              type="button"
                              onClick={(e) => toggleLessonCompletion(les.id, e)}
                              className="focus:outline-none flex-shrink-0 cursor-pointer"
                              title={isDone ? 'ចុចដើម្បីដោះធីក' : 'ចុចដើម្បីសម្គាល់ថាបានរៀន'}
                            >
                              {isDone ? (
                                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                              ) : (
                                <Circle className="w-4 h-4 text-slate-300 dark:text-slate-600 group-hover:text-blue-500" />
                              )}
                            </button>
                            <span className="font-mono text-[11px] text-slate-400 dark:text-slate-500 flex-shrink-0">
                              #{les.id}
                            </span>
                            <span className="truncate font-medium text-xs">
                              {les.titleKm}
                            </span>
                          </div>

                          <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 flex-shrink-0 group-hover:translate-x-0.5 transition-transform" />
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. JavaScript Runtime & Architecture Core Mechanics */}
      <section className="space-y-5">
        <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Cpu className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            <span>យន្តការដំណើរការនៃ JavaScript (Core Runtime & Architecture)</span>
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            ស្វែងយល់ពីរបៀបដែលម៉ាស៊ីន Browser ប្រតិបត្តិការកូដ JavaScript, Event Loop, JIT Compiler និងស្តង់ដារ ES6+
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {architectureMechanics.map((item) => (
            <div
              key={item.id}
              className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 shadow-xs hover:border-purple-300 dark:hover:border-purple-900/50 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span
                  className={`px-2.5 py-0.5 rounded-md text-xs font-bold badge-${item.badgeVariant}`}
                >
                  {item.badge}
                </span>
                <span className="text-xs font-mono text-slate-400 dark:text-slate-500">
                  {item.titleEn}
                </span>
              </div>

              <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                {item.titleKm}
              </h3>

              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {item.summaryKm}
              </p>

              <div className="space-y-1.5 pt-1">
                {item.detailsKm.map((detail, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                    <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>

              <div className="p-3 rounded-xl bg-purple-50/70 dark:bg-purple-950/20 border border-purple-200/60 dark:border-purple-800/40 text-purple-950 dark:text-purple-200 text-xs flex items-start gap-1.5 mt-2">
                <span className="text-sm leading-none">💡</span>
                <div>
                  <strong>គន្លឹះវិស្វកម្ម៖ </strong>
                  <span>{item.codeTip}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Interactive Usage Knowledge Check (Quiz) */}
      <section className="space-y-5">
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-500" />
              <span>សាកល្បងចំណេះដឹងការប្រើប្រាស់ JavaScript (Usage Knowledge Check)</span>
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              ឆ្លើយសំណួរកាលៈទេសៈជាក់ស្តែង ដើម្បីវាយតម្លៃការយល់ដឹងអំពីតួនាទីរបស់ JavaScript ក្នុងបច្ចេកវិទ្យា
            </p>
          </div>
          {quizSubmitted && (
            <span className="badge-warning px-3 py-1 rounded-full text-xs font-mono font-bold">
              ពិន្ទុ៖ {quizCorrectCount} / {usageQuizQuestions.length}
            </span>
          )}
        </div>

        <div className="space-y-4">
          {usageQuizQuestions.map((q, idx) => {
            const selectedOpt = quizAnswers[q.id];
            const isAnswered = selectedOpt !== undefined;
            const isCorrect = selectedOpt === q.correctIndex;

            return (
              <div
                key={q.id}
                className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3.5 shadow-xs"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="space-y-1">
                    <span className="badge-info text-[10px] font-mono font-bold px-2 py-0.5 rounded">
                      សំណួរទី {idx + 1}
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                      {q.questionKm}
                    </h3>
                  </div>
                  {quizSubmitted && (
                    <span
                      className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                        isCorrect ? 'badge-success' : 'badge-danger'
                      }`}
                    >
                      {isCorrect ? 'ត្រឹមត្រូវ ✅' : 'មិនទាន់ត្រូវ ❌'}
                    </span>
                  )}
                </div>

                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 text-xs text-slate-600 dark:text-slate-400 border border-slate-200/80 dark:border-slate-700/60">
                  <strong className="text-slate-800 dark:text-slate-200">កាលៈទេសៈជាក់ស្តែង៖ </strong>
                  <span>{q.scenarioKm}</span>
                </div>

                {/* Options */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {q.options.map((opt, optIdx) => {
                    const isOptionSelected = selectedOpt === optIdx;
                    let buttonClass = 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-blue-400 dark:hover:border-blue-500';

                    if (quizSubmitted) {
                      if (optIdx === q.correctIndex) {
                        buttonClass = 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 text-emerald-900 dark:text-emerald-200 font-bold';
                      } else if (isOptionSelected && !isCorrect) {
                        buttonClass = 'bg-rose-50 dark:bg-rose-950/40 border-rose-500 text-rose-900 dark:text-rose-200';
                      } else {
                        buttonClass = 'opacity-60 border-slate-200 dark:border-slate-800';
                      }
                    } else if (isOptionSelected) {
                      buttonClass = 'bg-blue-50 dark:bg-blue-950/40 border-blue-600 text-blue-700 dark:text-blue-300 font-bold';
                    }

                    return (
                      <button
                        key={optIdx}
                        type="button"
                        onClick={() => handleQuizOptionSelect(q.id, optIdx)}
                        disabled={quizSubmitted}
                        className={`text-left p-3 rounded-xl border text-xs transition-all flex items-start space-x-2.5 cursor-pointer ${buttonClass}`}
                      >
                        <span className="w-5 h-5 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 flex items-center justify-center font-mono text-[10px] font-bold flex-shrink-0 mt-0.5">
                          {String.fromCharCode(65 + optIdx)}
                        </span>
                        <span>{opt}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Explanation on submit */}
                {quizSubmitted && (
                  <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/70 text-xs text-slate-700 dark:text-slate-300 space-y-1">
                    <strong className="text-slate-900 dark:text-white">ការពន្យល់លម្អិត៖ </strong>
                    <p>{q.explanationKm}</p>
                  </div>
                )}
              </div>
            );
          })}

          <div className="flex items-center justify-between pt-2">
            {!quizSubmitted ? (
              <button
                type="button"
                onClick={() => setQuizSubmitted(true)}
                disabled={Object.keys(quizAnswers).length === 0}
                className="btn-primary px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold cursor-pointer shadow-md shadow-blue-500/20 disabled:opacity-50"
              >
                ពិនិត្យចម្លើយ (Submit Quiz)
              </button>
            ) : (
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handleResetQuiz}
                  className="btn-light flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>ធ្វើតេស្តឡើងវិញ</span>
                </button>
                <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">
                  {quizCorrectCount === usageQuizQuestions.length
                    ? '🎉 អបអរសាទរ! អ្នកបានឆ្លើយត្រូវ ១០០%'
                    : `អ្នកឆ្លើយត្រូវ ${quizCorrectCount} នៃ ${usageQuizQuestions.length} សំណួរ`}
                </span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 6. Learning Launchers & Resource Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
        <button
          type="button"
          onClick={() => onSelectLesson(1)}
          className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-left space-y-2 hover:border-blue-500 transition-all cursor-pointer group shadow-2xs"
        >
          <div className="w-8 h-8 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center">
            <BookOpen className="w-4 h-4" />
          </div>
          <h4 className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">
            មេរៀនទ្រឹស្តី & លំហាត់
          </h4>
          <p className="text-[11px] text-slate-500 dark:text-slate-400">
            ១៤ មេរៀនរៀបចំតាម CLEAR Framework
          </p>
        </button>

        <button
          type="button"
          onClick={() => onChangeView('playground')}
          className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-left space-y-2 hover:border-amber-500 transition-all cursor-pointer group shadow-2xs"
        >
          <div className="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center">
            <Code2 className="w-4 h-4" />
          </div>
          <h4 className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-amber-600 transition-colors">
            Live Code Playground
          </h4>
          <p className="text-[11px] text-slate-500 dark:text-slate-400">
            សរសេរកូដ និងមើល Console Output ភ្លាមៗ
          </p>
        </button>

        <button
          type="button"
          onClick={() => onChangeView('roadmap')}
          className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-left space-y-2 hover:border-emerald-500 transition-all cursor-pointer group shadow-2xs"
        >
          <div className="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
            <Map className="w-4 h-4" />
          </div>
          <h4 className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 transition-colors">
            ផែនទីកម្មវិធីសិក្សា
          </h4>
          <p className="text-[11px] text-slate-500 dark:text-slate-400">
            ស្ថាបត្យកម្មកែលម្អពីឯកសារដើម
          </p>
        </button>

        <div className="p-4 rounded-2xl bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-slate-900 dark:to-indigo-950/40 border border-indigo-200 dark:border-indigo-800/50 text-left space-y-2">
          <div className="w-8 h-8 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
            <Award className="w-4 h-4" />
          </div>
          <h4 className="text-xs font-bold text-slate-900 dark:text-white">
            គម្រោងវាយតម្លៃ ១០០ ពិន្ទុ
          </h4>
          <p className="text-[11px] text-slate-600 dark:text-slate-400">
            តារាង Rubric វាយតម្លៃសមត្ថភាពជាក់ស្តែង
          </p>
        </div>
      </section>
    </div>
  );
};
