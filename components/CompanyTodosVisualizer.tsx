
import React from 'react';
import type { CompanyTodoData, TodoFeature } from '../types';
import { ClipboardDocumentCheckIcon } from './Icons';

interface CompanyTodosVisualizerProps {
  todoData: CompanyTodoData;
}

const FeatureCard: React.FC<{ feature: TodoFeature }> = ({ feature }) => (
    <div className="bg-gray-800/60 p-4 rounded-lg border border-gray-700 h-full flex items-start space-x-4">
        <div className="flex-shrink-0">
            <feature.icon className="w-6 h-6 text-emerald-400" />
        </div>
        <div>
            <h4 className="font-bold text-md text-gray-200">{feature.name}</h4>
            <p className="text-gray-400 text-sm mt-1">{feature.description}</p>
        </div>
    </div>
);

const CompanyTodosVisualizer: React.FC<CompanyTodosVisualizerProps> = ({ todoData }) => {
  const { features, eventFlow } = todoData;

  return (
    <div className="bg-gray-800/50 rounded-lg shadow-lg p-6 border border-gray-700">
      <div className="flex items-center space-x-3 mb-4 border-b border-gray-600 pb-3">
        <ClipboardDocumentCheckIcon className="text-sky-400 w-8 h-8"/>
        <div>
          <h2 className="text-2xl font-semibold text-sky-400">
            Company To-Dos System
          </h2>
          <p className="text-gray-400">Secure, multi-role task management with event-driven notifications.</p>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-sky-300 mb-4">Core Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {features.map(feature => (
                <FeatureCard key={feature.name} feature={feature} />
            ))}
        </div>

        <h3 className="text-xl font-semibold text-sky-300 mb-4">Event Dispatch Flow</h3>
        <div className="space-y-4">
          {eventFlow.map((flow, index) => (
            <div key={flow.event} className="bg-gray-800/60 p-4 rounded-lg border border-gray-700">
              <div className="flex items-center space-x-3">
                 <div className="flex-shrink-0 bg-sky-500/20 text-sky-300 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">{index + 1}</div>
                 <div>
                    <h4 className="font-mono text-lg text-emerald-400">{flow.event}</h4>
                    <code className="text-xs bg-gray-700 text-amber-400 p-1 rounded-sm">{flow.script}</code>
                 </div>
              </div>
              <p className="text-sm text-gray-400 mt-3 pl-11">{flow.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyTodosVisualizer;
