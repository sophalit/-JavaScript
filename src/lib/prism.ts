import Prism from 'prismjs';

// Import languages
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-bash';

export type SupportedLanguage = 'javascript' | 'html' | 'markup' | 'css' | 'typescript' | 'json' | 'bash';

export function normalizeLanguage(lang?: string): string {
  if (!lang) return 'javascript';
  const clean = lang.toLowerCase().replace(/^language-/, '').trim();
  if (clean === 'js' || clean === 'javascript') return 'javascript';
  if (clean === 'html' || clean === 'markup' || clean === 'xml' || clean === 'svg') return 'markup';
  if (clean === 'ts' || clean === 'typescript') return 'typescript';
  if (clean === 'css') return 'css';
  if (clean === 'json') return 'json';
  if (clean === 'bash' || clean === 'sh' || clean === 'shell' || clean === 'terminal') return 'bash';
  return clean;
}

export function detectLanguageFromContent(code: string, fallback: string = 'javascript'): string {
  const trimmed = code.trim();
  if (/^\s*<!DOCTYPE\s+html/i.test(trimmed) || /^\s*<html[\s>]/i.test(trimmed) || /^\s*<(!DOCTYPE|div|p|h[1-6]|span|button|script|link|body|head|ul|ol|li|form|input)/i.test(trimmed)) {
    return 'markup';
  }
  if (/^\s*(\{|\}\s*$|\[|\btrue\b|\bfalse\b|\bnull\b)/.test(trimmed) && trimmed.startsWith('{') && trimmed.endsWith('}')) {
    try {
      JSON.parse(trimmed);
      return 'json';
    } catch {
      // not strict JSON
    }
  }
  return fallback;
}

export function highlightCode(code: string, rawLanguage?: string): string {
  if (!code) return '';
  let lang = normalizeLanguage(rawLanguage);

  if (lang === 'javascript') {
    lang = detectLanguageFromContent(code, 'javascript');
  }

  const grammar = Prism.languages[lang] || Prism.languages.javascript;
  try {
    return Prism.highlight(code, grammar, lang);
  } catch (err) {
    console.warn('Prism highlighting error:', err);
    return code
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }
}

export { Prism };
