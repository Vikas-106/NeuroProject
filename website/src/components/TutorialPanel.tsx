import React, { useState } from 'react';
import { BookOpen, ChevronDown, ChevronRight, ExternalLink } from 'lucide-react';
import { InlineMath, BlockMath } from 'react-katex';
import { AlgorithmType } from '../types';
import { tutorials } from '../data/tutorials';

interface TutorialPanelProps {
  selectedAlgorithm: AlgorithmType;
}

export const TutorialPanel: React.FC<TutorialPanelProps> = ({ selectedAlgorithm }) => {
  const [expandedSections, setExpandedSections] = useState<Set<number>>(new Set([0]));
  const tutorial = tutorials[selectedAlgorithm];

  const toggleSection = (index: number) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedSections(newExpanded);
  };

  const renderContent = (content: string) => {
    const parts = content.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={index} className="font-semibold text-blue-600 dark:text-blue-400">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });
  };

  if (!tutorial) {
    return (
      <div className="flex items-center justify-center h-full text-gray-500 dark:text-gray-400">
        <div className="text-center">
          <BookOpen className="w-12 h-12 mx-auto mb-4 opacity-50" />
          <p>Tutorial not available</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="flex-shrink-0 p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
            <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              {tutorial.title}
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Interactive Tutorial
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        <div className="p-6 space-y-4">
          {tutorial.sections.map((section, index) => (
            <div
              key={index}
              className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                onClick={() => toggleSection(index)}
                className="w-full px-4 py-3 text-left bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 flex items-center justify-between"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {section.title}
                </h3>
                {expandedSections.has(index) ? (
                  <ChevronDown className="w-4 h-4 text-gray-500" />
                ) : (
                  <ChevronRight className="w-4 h-4 text-gray-500" />
                )}
              </button>
              
              {expandedSections.has(index) && (
                <div className="p-4 animate-slide-up">
                  <div className="prose prose-sm max-w-none dark:prose-invert">
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                      {renderContent(section.content)}
                    </p>
                    
                    {section.equations && section.equations.length > 0 && (
                      <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                        <h4 className="text-sm font-semibold text-blue-800 dark:text-blue-300 mb-3">
                          Key Equations:
                        </h4>
                        <div className="space-y-3">
                          {section.equations.map((equation, eqIndex) => (
                            <div key={eqIndex} className="text-center">
                              <BlockMath math={equation} />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Educational Resources Section */}
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden animate-fade-in bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20">
            <div className="px-4 py-3 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 border-b border-purple-200 dark:border-purple-700">
              <h3 className="font-semibold text-gray-900 dark:text-white flex items-center">
                <ExternalLink className="w-4 h-4 mr-2 text-purple-600 dark:text-purple-400" />
                Additional Learning Resources
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Explore these curated resources to deepen your understanding
              </p>
            </div>
            
            <div className="p-4 space-y-3">
              {tutorial.resources.map((resource, index) => (
                <a
                  key={index}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 hover:shadow-md transition-all duration-200 group"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-200">
                        {resource.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 leading-relaxed">
                        {resource.description}
                      </p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-purple-500 transition-colors duration-200 ml-2 flex-shrink-0 mt-0.5" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};