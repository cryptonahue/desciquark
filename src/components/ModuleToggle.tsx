import { useState, useEffect } from 'react';

interface ModuleToggleProps {
  title: string;
  description: string;
  lessons: string[];
  displayIndex: number;
  actualIndex: number;
  isExpanded?: boolean;
  lang?: string;
}

interface LessonItemProps {
  title: string;
}

const LessonItem = ({ title }: LessonItemProps) => {
  // Extraer la numeración del título (ej: "1.1" de "1.1 ¿Qué es la Ciencia?")
  const parts = title.split(' ');
  const number = parts[0];
  const lessonTitle = parts.slice(1).join(' ');
  
  return (
    <div className="lesson-item p-4 hover:bg-gray-50 transition-colors cursor-pointer">
      <div className="flex items-center gap-3">
        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium min-w-fit">
          {number}
        </span>
        <span className="text-gray-800 text-sm">{lessonTitle}</span>
      </div>
    </div>
  );
};

export default function ModuleToggle({ 
  title, 
  description, 
  lessons, 
  displayIndex, 
  actualIndex, 
  isExpanded = false,
  lang = 'es'
}: ModuleToggleProps) {
  const [expanded, setExpanded] = useState(isExpanded);

  useEffect(() => {
    setExpanded(isExpanded);
  }, [isExpanded]);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const moduleText = lang === 'en' ? 'Module' : 'Módulo';

  return (
    <div className="module-card bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 mb-6">
      <div 
        className="module-header p-6 flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors"
        onClick={toggleExpanded}
      >
        <div>
          <div className="flex items-center gap-3">
            <span className="bg-primary-100 text-primary-700 px-2 py-0.5 rounded text-sm font-medium">
              {moduleText} {displayIndex}
            </span>
            <h3 className="font-semibold text-lg text-gray-800">{title}</h3>
          </div>
          <p className="mt-2 text-gray-600 text-sm">{description}</p>
        </div>
        <div className={`expand-icon transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`}>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6 text-gray-500" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
      
      <div className={`module-content border-t border-gray-100 divide-y divide-gray-100 transition-all duration-300 overflow-hidden ${
        expanded ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      }`}>
        {lessons.map((lesson, i) => (
          <LessonItem 
            key={i}
            title={lesson}
          />
        ))}
      </div>
    </div>
  );
}