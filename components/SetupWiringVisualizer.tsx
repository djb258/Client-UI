
import React from 'react';
// FIX: Import SetupWiringMapping for better type safety
import type { SetupWiringData, SetupWiringMapping } from '../types';
import { ShareIcon } from './Icons';

interface SetupWiringVisualizerProps {
  wiringData: SetupWiringData;
}

const SetupWiringVisualizer: React.FC<SetupWiringVisualizerProps> = ({ wiringData }) => {
  const { description, mappings } = wiringData;

  return (
    <div className="bg-gray-800/50 rounded-lg shadow-lg p-6 border border-gray-700">
      <div className="flex items-center space-x-3 mb-4 border-b border-gray-600 pb-3">
        <ShareIcon className="text-sky-400 w-8 h-8"/>
        <div>
          <h2 className="text-2xl font-semibold text-sky-400">
            Setup Wiring Configuration
          </h2>
          <p className="text-gray-400">{description}</p>
        </div>
      </div>
      
      <div>
        <h3 className="text-xl font-semibold text-sky-300 mb-4">Field Mappings</h3>
        <div className="p-4 bg-gray-800/60 rounded-lg border border-gray-700">
          <ul className="space-y-2 text-sm">
              {/* Fix: Cast target object to its correct type. Object.entries() infers the value as `unknown`. */}
              {Object.entries(mappings).map(([input, target]) => {
                  const typedTarget = target as SetupWiringMapping;
                  return (
                    <li key={input} className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-2 rounded-md bg-gray-700/40">
                        <span className="font-mono text-gray-200">{input}</span>
                        <div className="flex items-center space-x-2 mt-1 sm:mt-0">
                          <span className="font-mono text-emerald-400 text-xs text-right">
                              {typedTarget.target_table}
                          </span>
                          <span className="text-gray-500">→</span>
                          <span className="font-mono text-violet-400 text-xs text-right">
                              {typedTarget.target_column}
                          </span>
                        </div>
                    </li>
                  );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SetupWiringVisualizer;