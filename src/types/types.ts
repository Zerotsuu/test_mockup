// Core interfaces for the survey application

// Represents a single survey question
export interface Question {
  id: string;
  text: string;
  helpText: string;
}

// Represents a section of the survey containing multiple questions
export interface Section {
  id: string;
  title: string;
  questions: Question[];
  isComplete: boolean;
  imageUrl?: string;
}

// Props for the RadioGroup component
export interface RadioGroupProps {
  name: string;
  value?: string;
  onChange?: (name: string, value: string) => void;
}

// Props for the QuestionRow component
export interface QuestionRowProps {
  question: Question;
  onHelpClick: (text: string) => void;
  onRadioChange: (questionId: string, value: string) => void;
}

// Props for the SurveySection component
export interface SurveySectionProps {
  id: string;
  title: string;
  questions: Question[];
  onHelpClick: (text: string) => void;
  onRadioChange: (questionId: string, value: string) => void;
  imageUrl?:string;
}

export interface QuestionMarkProps {
  helpText: string;
  onHelpClick: (text: string) => void;
}

