'use client'
import { type Section } from "../types/types";
import DonutChart from './survey/DonutChart';

// Typesafety for the SideNavigation component
interface SideNavigationProps {
  sections: Section[];
  completionStats: {
    totalQuestions: number;
    completedQuestions: number;
  };
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
}

// The actual SideNavigation component
export default function SideNavigation({ 
  sections, 
  completionStats, 
  activeSection, 
  onSectionClick 
}: SideNavigationProps) {
  return (
  <aside className="w-64 bg-[#1a1744] p-4 pt-20 shadow-lg flex flex-col justify-between">
  
    <div>

    <div className="mb-4 text-xl font-bold text-white">Framework Domains</div>
      <nav className="space-y-2">
        {/* Render each section as a button || .map() function and pass the section's id and title as props */}
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => onSectionClick(section.id)}
            className={`flex w-full items-center rounded-lg px-4 py-2 text-left text-gray-300 transition-colors hover:bg-white/10 hover:text-white ${
              activeSection === section.id ? 'bg-white/10 text-white' : ''
            }`}
          >
            <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-[hsl(280,100%,70%)]">
              {section.isComplete ? (
                <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <span className="text-sm">{sections.indexOf(section) + 1}</span>
              )}
            </div>
            <span className="flex-1">{section.title}</span>
          </button>
        ))}
      </nav>
    </div>

  {/* Donut Chart at the bottom */}
  <div className="mb-8 flex justify-center">
    <DonutChart 
      completed={completionStats.completedQuestions} 
      total={completionStats.totalQuestions} 
    />
  </div>
</aside>

  );
} 