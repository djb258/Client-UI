import React from 'react';
import type { ClientSetupWizardBlock } from '../types';
import { WrenchScrewdriverIcon } from './Icons';

interface ClientSetupWizardVisualizerProps {
  moduleData: ClientSetupWizardBlock;
}

const DataBadge: React.FC<{ text: string; color: string }> = ({ text, color }) => (
    <span className={`inline-block bg-${color}-500/20 text-${color}-300 border border-${color}-500/30 rounded-full px-3 py-1 text-xs font-semibold mr-2 mb-2`}>
      {text}
    </span>
);

const ClientSetupWizardVisualizer: React.FC<ClientSetupWizardVisualizerProps> = ({ moduleData }) => {
  const { module_id, description, fields, automations, output_targets, validation_rules } = moduleData;

  return (
    <div className="bg-gray-800/50 rounded-lg shadow-lg p-6 border border-gray-700">
      <div className="flex items-center space-x-3 mb-4 border-b border-gray-600 pb-3">
        <WrenchScrewdriverIcon className="text-sky-400 w-8 h-8"/>
        <div>
          <h2 className="text-2xl font-semibold text-sky-400">
            Client Setup Wizard Module
          </h2>
          <p className="text-gray-400">Post-clone guided intake block. (20,000 ft)</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold text-sky-300 mb-2">{module_id}</h3>
          <p className="text-sm text-gray-400 mb-4">{description}</p>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold text-gray-300">Automations</h4>
              {automations.map(a => <DataBadge key={a} text={a} color="sky" />)}
            </div>
            <div>
              <h4 className="font-semibold text-gray-300">Output Targets</h4>
              {output_targets.map(o => <DataBadge key={o} text={o} color="emerald" />)}
            </div>
            <div>
              <h4 className="font-semibold text-gray-300">Validation Rules</h4>
              {validation_rules.map(v => <DataBadge key={v} text={v} color="amber" />)}
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-sky-300 mb-4">Wizard Fields</h3>
          <div className="p-4 bg-gray-800/60 rounded-lg border border-gray-700 max-h-[300px] overflow-y-auto">
            <ul className="space-y-2 text-sm">
                {Object.entries(fields).map(([fieldName, fieldType]) => (
                    <li key={fieldName} className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-2 rounded-md bg-gray-700/40">
                        <span className="font-mono text-gray-200">{fieldName}</span>
                        <span className="font-mono text-violet-400 text-xs text-right mt-1 sm:mt-0">
                            {Array.isArray(fieldType) ? `Checkbox [${fieldType.join(', ')}]` : fieldType}
                        </span>
                    </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientSetupWizardVisualizer;