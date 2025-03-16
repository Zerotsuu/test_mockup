'use client'
import { type Section } from "../types/types";

interface TopNavigationProps {
  onExport: () => void;
}

export default function TopNavigation({ onExport }: TopNavigationProps) {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 flex h-16 items-center justify-between bg-[#15162c] px-6 shadow-lg">
      <h1 className="text-2xl font-bold text-white">Feedback Survey</h1>
      <div className="flex gap-4">
        <button
          type="button"
          className="rounded-lg bg-white/10 px-4 py-2 text-white transition-colors hover:bg-white/20"
          onClick={onExport}
        >
          Export to Excel
        </button>
        <button
          type="button"
          className="rounded-lg bg-white/10 px-4 py-2 text-white transition-colors hover:bg-white/20"
          onClick={() => {
            // Add save draft functionality
            console.log('Saving draft...');
          }}
        >
          Save Draft
        </button>
        <button
          type="submit"
          form="survey-form"
          className="rounded-lg bg-[hsl(280,100%,70%)] px-4 py-2 text-white transition-colors hover:bg-[hsl(280,100%,60%)]"
        >
          Submit Survey
        </button>
      </div>
    </header>
  );
} 