// SurveySection component handles the rendering of individual survey sections
// Each section contains a table with questions, radio inputs, and comment fields
import { type SurveySectionProps} from '../../types/types';
import QuestionRow from './QuestionRow';

export default function SurveySection({ id, title, questions, onHelpClick, onRadioChange }: SurveySectionProps) {
  // Likert scale options for the radio buttons (1-5 rating)
  const likertOptions = ['1', '2', '3', '4', '5'];

  return (
    // Container for each survey section with unique ID for navigation
    <section id={id} className="rounded-xl bg-[#15162c] p-8">
      <h2 className="mb-6 text-2xl font-bold text-white">{title}</h2>

      <div className="mb-6 h-24 w-full overflow-hidden rounded-lg bg-white/5">
      {/* Placeholder image for the section */}
          <img 
            src={'https://6fikixnjm9.ufs.sh/f/W6lDwSyomLOB10jFAjEtaij7RU3fhC4HdI5bXcnkB0MvqxyG'} 
            alt="Section visual" 
            className="h-full w-full object-cover"
          />
      </div> 
        
      <div className="space-y-4">
        <table className="w-full">
          {/* Table header with Likert scale options */}
          <thead>
            <tr className="border-b border-white/10">
              <th className="w-1/2 pb-4 text-left text-lg font-medium text-white">Question</th>
              {likertOptions.map((option) => (
                <th key={option} className="w-8 pb-4 text-center text-sm font-medium text-white">
                  {option}
                </th>
              ))}
              <th className="w-64 pb-4 text-left text-sm font-medium text-white">Comments</th>
            </tr>
          </thead>

          {/* Render individual question rows */}
          <tbody>
            {questions.map((question) => (
              <QuestionRow 
                key={question.id} 
                question={question} 
                onHelpClick={onHelpClick}
                onRadioChange={onRadioChange}
              />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
} 