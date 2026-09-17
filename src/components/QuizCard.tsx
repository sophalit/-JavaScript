import React, { useState } from 'react';
import { CheckCircle2, XCircle, HelpCircle, RotateCcw } from 'lucide-react';
import { QuizQuestion } from '../types';
import { RichMarkdown } from './RichMarkdown';

interface QuizCardProps {
  questions: QuizQuestion[];
  lessonTitle: string;
}

export const QuizCard: React.FC<QuizCardProps> = ({ questions, lessonTitle }) => {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSelect = (questionId: number, optionIdx: number) => {
    if (submitted) return;
    setSelectedAnswers((prev) => ({ ...prev, [questionId]: optionIdx }));
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctIndex) {
        score++;
      }
    });
    return score;
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setSubmitted(false);
  };

  const allAnswered = questions.length > 0 && questions.every((q) => selectedAnswers[q.id] !== undefined);
  const score = calculateScore();

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-200 dark:border-slate-800">
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-amber-500 dark:text-amber-400" />
            សំណួរពិនិត្យការយល់ដឹង (Self-Check Quiz)
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{lessonTitle}</p>
        </div>

        {submitted && (
          <div className="flex items-center gap-3">
            <span
              className={`px-3 py-1 rounded-full text-xs sm:text-sm font-bold ${
                score === questions.length
                  ? 'badge-success'
                  : score >= questions.length * 0.6
                  ? 'badge-primary'
                  : 'badge-warning'
              }`}
            >
              ពិន្ទុ៖ {score} / {questions.length} ({Math.round((score / questions.length) * 100)}%)
            </span>
            <button
              type="button"
              onClick={handleReset}
              className="btn-light px-3 py-1.5 rounded-lg flex items-center gap-1.5 text-xs font-semibold cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>ធ្វើឡើងវិញ</span>
            </button>
          </div>
        )}
      </div>

      <div className="space-y-6">
        {questions.map((q, qIndex) => {
          const userAnswer = selectedAnswers[q.id];
          const isCorrect = userAnswer === q.correctIndex;

          return (
            <div
              key={q.id}
              className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 shadow-2xs transition-colors"
            >
              <div className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-3">
                <span className="text-blue-600 dark:text-blue-400 font-bold mr-1.5">សំណួរទី {qIndex + 1}:</span>
                <RichMarkdown content={q.question} inline />
              </div>

              <div className="space-y-2">
                {q.options.map((option, optIdx) => {
                  const isSelected = userAnswer === optIdx;
                  let optionStyles = 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/70 shadow-2xs';

                  if (submitted) {
                    if (optIdx === q.correctIndex) {
                      optionStyles = 'bg-emerald-50 dark:bg-emerald-950/70 border-emerald-500 text-emerald-800 dark:text-emerald-200 font-medium ring-1 ring-emerald-500/30';
                    } else if (isSelected && !isCorrect) {
                      optionStyles = 'bg-rose-50 dark:bg-rose-950/70 border-rose-500 text-rose-800 dark:text-rose-200 ring-1 ring-rose-500/30';
                    } else {
                      optionStyles = 'bg-slate-100/60 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 text-slate-400 dark:text-slate-500 opacity-70';
                    }
                  } else if (isSelected) {
                    optionStyles = 'bg-blue-50 dark:bg-blue-600/25 border-blue-600 dark:border-blue-500 text-blue-900 dark:text-white font-medium ring-2 ring-blue-500/30 shadow-xs';
                  }

                  return (
                    <button
                      key={optIdx}
                      type="button"
                      disabled={submitted}
                      onClick={() => handleSelect(q.id, optIdx)}
                      className={`w-full text-left px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm flex items-center justify-between transition-all cursor-pointer ${optionStyles}`}
                    >
                      <span className="flex items-center">
                        <span className="w-5 h-5 rounded-md bg-slate-100 dark:bg-slate-700 font-mono text-slate-600 dark:text-slate-300 mr-2.5 text-[11px] font-bold flex items-center justify-center">
                          {String.fromCharCode(65 + optIdx)}
                        </span>
                        <span>{option}</span>
                      </span>
                      {submitted && optIdx === q.correctIndex && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                      )}
                      {submitted && isSelected && !isCorrect && (
                        <XCircle className="w-4 h-4 text-rose-600 dark:text-rose-400 flex-shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {submitted && (
                <div
                  className={`mt-3 p-3 rounded-xl text-xs leading-relaxed border ${
                    isCorrect
                      ? 'bg-emerald-50/90 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200'
                      : 'bg-rose-50/90 dark:bg-rose-950/40 border-rose-300 dark:border-rose-800 text-rose-900 dark:text-rose-200'
                  }`}
                >
                  <span className="font-bold block mb-1">
                    {isCorrect ? '✓ ចម្លើយត្រឹមត្រូវ!' : '✗ ចម្លើយមិនត្រឹមត្រូវ:'}
                  </span>
                  <RichMarkdown content={q.explanation} inline />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {!submitted && (
        <div className="mt-6 flex justify-end">
          <button
            type="button"
            disabled={!allAnswered}
            onClick={() => setSubmitted(true)}
            className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all ${
              allAnswered
                ? 'btn-primary cursor-pointer'
                : 'bg-slate-200 dark:bg-slate-800 text-slate-400 dark:text-slate-500 cursor-not-allowed border border-slate-300 dark:border-slate-700'
            }`}
          >
            {allAnswered ? 'ពិនិត្យចម្លើយ (Submit Quiz)' : `សូមឆ្លើយគ្រប់សំណួរ (${Object.keys(selectedAnswers).length}/${questions.length})`}
          </button>
        </div>
      )}
    </div>
  );
};
