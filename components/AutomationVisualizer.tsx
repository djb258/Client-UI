import React from 'react';
import type { AutomationRegistryData, AutomationDefinition } from '../types';
import { LightningBoltIcon } from './Icons';

interface AutomationVisualizerProps {
  automationData: AutomationRegistryData;
  automationCode: { [key: string]: string };
}

const DataBadge: React.FC<{ text: string; color: string }> = ({ text, color }) => (
    <span className={`inline-block bg-${color}-500/20 text-${color}-300 border border-${color}-500/30 rounded-full px-3 py-1 text-xs font-semibold mr-2 mb-2`}>
      {text}
    </span>
);

const AutomationCard: React.FC<{ automation: AutomationDefinition; code: string }> = ({ automation, code }) => {
    return (
        <div className="bg-gray-800/60 rounded-lg border border-gray-700 overflow-hidden">
            <div className="p-4">
                <h3 className="font-bold text-lg text-emerald-400 font-mono">{automation.automation_id}</h3>
                <p className="text-gray-400 text-sm mt-1 mb-3">{automation.description}</p>

                <div className="space-y-3 text-sm">
                    <div>
                        <h4 className="font-semibold text-gray-300">Trigger</h4>
                        <DataBadge text={automation.trigger} color="sky" />
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-300">Conditions</h4>
                        {automation.conditions?.map(c => <code key={c} className="block bg-gray-700 text-amber-400 p-1.5 rounded-sm text-xs mt-1">{c}</code>)}
                    </div>
                     <div>
                        <h4 className="font-semibold text-gray-300">Actions</h4>
                        <ul className="list-disc list-inside space-y-2 mt-1 pl-1">
                            {automation.actions.map((action, i) => (
                                <li key={i} className="text-gray-300">
                                    <span className="font-semibold">{action.type}:</span>
                                    <code className="bg-gray-700 text-violet-400 p-1 rounded-sm text-xs ml-1">{action.target || action.path}</code>
                                </li>
                             ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-300">Doctrine Reference</h4>
                        <DataBadge text={automation.doctrine_ref} color="gray" />
                    </div>
                </div>
            </div>
            <div>
                <h4 className="text-sm font-semibold text-gray-300 px-4 pt-2">Implementation</h4>
                <div className="bg-gray-900/70 m-4 rounded-md">
                    <pre className="text-xs text-gray-300 p-4 overflow-x-auto">
                        <code>{code}</code>
                    </pre>
                </div>
            </div>
        </div>
    );
};

const AutomationVisualizer: React.FC<AutomationVisualizerProps> = ({ automationData, automationCode }) => {
  return (
    <div className="bg-gray-800/50 rounded-lg shadow-lg p-6 border border-gray-700">
      <div className="flex items-center space-x-3 mb-4 border-b border-gray-600 pb-3">
        <LightningBoltIcon className="text-sky-400 w-8 h-8"/>
        <div>
           <h2 className="text-2xl font-semibold text-sky-400">
            Automation Layer
          </h2>
          <p className="text-gray-400">Event-driven logic and automated workflows. (10,000 ft)</p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {Object.entries(automationData).map(([name, def]) => (
          <AutomationCard key={name} automation={def} code={automationCode[name] || ''} />
        ))}
      </div>
    </div>
  );
};

export default AutomationVisualizer;