'use client'
//import types (QuestionMarkProps) for typesafety. Look at "app/types/types.ts"
import { type QuestionMarkProps } from '../../types/types';

// Boilerplate for SurveySection.tsx
// Pass helpText variable as an argument for reusability
export default function QuestionMark({ helpText, onHelpClick }: QuestionMarkProps) {
  return (
    <button
      type="button"
      onClick={() => onHelpClick(helpText)}
      className="ml-2 shrink-0 rounded-full bg-white/20 text-xs text-white hover:bg-white/30"
      style={{ 
        width: '16px', 
        height: '16px',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        transform: 'translateY(-1px)'
      }}
    >
      ?
    </button>
  );
} 