import { useState, useCallback, useEffect } from "react";
import { type Section } from "~/types/types";

type Answers = Record<string, string>;

// Custom hook to manage survey form state and logic
export function useSurveyForm(initialSections: Section[]) {
  // State to track sections and their completion status
  const [sections, setSections] = useState(initialSections);
  const [answers, setAnswers] = useState<Answers>({});
  const [completionStats, setCompletionStats] = useState({ totalQuestions: 0, completedQuestions: 0 });
  const [activeSection, setActiveSection] = useState<string>(initialSections[0]?.id ?? 'strategy');

  // Updates the completion status of a specific section
  const updateSectionCompletion = (sectionId: string, isComplete: boolean) => {
    setSections(prevSections => 
      prevSections.map(section => 
        section.id === sectionId ? { ...section, isComplete } : section
      )
    );
  };

  const calculateCompletionStats = useCallback(() => {
    if (typeof window === 'undefined') return;

    const totalQuestions = sections.reduce((acc, section) => 
      acc + section.questions.length, 0
    );
    
    const completedQuestions = Object.keys(answers).length;
    setCompletionStats({ totalQuestions, completedQuestions });
  }, [sections, answers]);

  useEffect(() => {
    calculateCompletionStats();
  }, [calculateCompletionStats]);

  // Handles radio button changes and updates section completion
  const handleRadioChange = (sectionId: string, questionId: string, value: string) => {
    // Store the answer
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));

    // Check section completion
    const section = sections.find(s => s.id === sectionId);
    if (!section) return;

    const allQuestionsAnswered = section.questions.every(q => 
      answers[q.id] ?? q.id === questionId // Include the current answer
    );

    updateSectionCompletion(sectionId, allQuestionsAnswered);
    calculateCompletionStats();
  };

  return { 
    sections, 
    handleRadioChange,
    completionStats,
    answers,
    activeSection,
    setActiveSection
  };
} 