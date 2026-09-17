export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface CodeFile {
  filename: string;
  language: 'html' | 'css' | 'javascript' | 'json';
  code: string;
}

export interface GuidedPractice {
  title: string;
  description: string;
  files: CodeFile[];
  expectedOutput: string;
  runnableJsCode?: string;
}

export interface ExerciseItem {
  level: 'មូលដ្ឋាន (Basic)' | 'អនុវត្ត (Practical)' | 'អនុវត្ត (Applied)' | 'ប្រកួតប្រជែង (Challenge)' | 'ប្រកួតប្រជែង (Competitive)' | string;
  prompt: string;
  solutionCode: string;
  explanation: string;
}

export interface CommonMistake {
  mistake: string;
  cause: string;
  wrongCode?: string;
  fixedCode?: string;
  fix: string;
}

export interface Lesson {
  id: number;
  slug: string;
  titleKm: string;
  titleEn: string;
  category: 'Fundamentals' | 'Logic & Flow' | 'Data Structures' | 'DOM & Events' | 'Web APIs & Async' | 'Architecture & Project';
  prerequisites: string[];
  learningOutcomes: string[];
  scenario: string;
  conceptsExplanation: string;
  syntaxExamples: {
    title: string;
    description: string;
    code: string;
  }[];
  guidedPractice: GuidedPractice;
  commonMistakes: CommonMistake[];
  exercises: ExerciseItem[];
  quiz: QuizQuestion[];
  summary: string[];
}

export interface CurriculumMapping {
  id: number;
  originalTopic: string;
  newLesson: string;
  reason: string;
}

export interface GlossaryTerm {
  km: string;
  en: string;
  definition: string;
  example: string;
}

export type AppViewMode = 'dashboard' | 'lesson' | 'playground' | 'roadmap';
