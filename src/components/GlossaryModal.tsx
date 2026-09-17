import React, { useState } from 'react';
import { X, Search, BookA } from 'lucide-react';
import { glossaryTerms } from '../data/roadmapData';

interface GlossaryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GlossaryModal: React.FC<GlossaryModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const filtered = glossaryTerms.filter(
    (t) =>
      t.km.toLowerCase().includes(query.toLowerCase()) ||
      t.en.toLowerCase().includes(query.toLowerCase()) ||
      t.definition.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-slate-950">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
              <BookA className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">
                វចនានុក្រមពាក្យបច្ចេកទេស JavaScript
              </h2>
              <p className="text-xs text-slate-400">
                Khmer & English Front-End Web Development Glossary
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search */}
        <div className="p-4 border-b border-slate-800 bg-slate-900">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="ស្វែងរកពាក្យបច្ចេកទេស (ឧ. អថេរ, DOM, Event)..."
              className="w-full pl-10 pr-4 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        {/* List */}
        <div className="p-5 overflow-y-auto space-y-3">
          {filtered.length === 0 ? (
            <p className="text-center text-xs text-slate-500 py-8">
              រកមិនឃើញពាក្យដែលអ្នកស្វែងរកឡើយ។
            </p>
          ) : (
            filtered.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-2"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-white">{item.km}</h3>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-900 text-blue-400 border border-slate-800">
                    {item.en}
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.definition}
                </p>
                <div className="p-2 rounded bg-slate-950 border border-slate-800 font-mono text-[11px] text-emerald-400 overflow-x-auto">
                  {item.example}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
