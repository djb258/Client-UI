import React from 'react';
import type { ProblemLog } from '../types';

interface ProblemLoggerProps {
  logs: ProblemLog[];
}

const severityStyles = {
    info: { bg: 'bg-sky-500/20', text: 'text-sky-300' },
    warning: { bg: 'bg-amber-500/20', text: 'text-amber-300' },
    error: { bg: 'bg-rose-500/20', text: 'text-rose-300' }
};

const ProblemLogger: React.FC<ProblemLoggerProps> = ({ logs }) => {
  return (
    <div className="bg-gray-800/50 rounded-lg shadow-lg p-6 border border-gray-700">
      <h2 className="text-2xl font-semibold text-sky-400 mb-4 border-b border-gray-600 pb-3">
        System Event & Problem Log
      </h2>
      <div className="font-mono text-xs text-gray-400 space-y-2 max-h-[400px] overflow-y-auto pr-2">
        {logs.map((log, index) => {
            const styles = severityStyles[log.severity];
            return (
                <div key={index} className={`p-2 rounded-md ${styles.bg}`}>
                    <span className="text-gray-500">{new Date(log.timestamp).toLocaleTimeString()}</span>
                    <span className={`font-bold ml-2 ${styles.text}`}>[{log.severity.toUpperCase()}]</span>
                    <span className="ml-2 text-gray-300">{log.source}:</span>
                    <span className="ml-2 text-gray-200">{log.message}</span>
                </div>
            )
        })}
      </div>
    </div>
  );
};

export default ProblemLogger;
