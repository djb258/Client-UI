
import React from 'react';
import type { VendorFormDataTemplate, FieldDefinition } from '../types';
import { DocumentTextIcon } from './Icons';

interface VendorFormDataVisualizerProps {
  templateData: VendorFormDataTemplate;
}

const DataBadge: React.FC<{ text: string; color: string }> = ({ text, color }) => (
    <span className={`inline-block bg-${color}-500/20 text-${color}-300 border border-${color}-500/30 rounded-full px-3 py-1 text-xs font-semibold mr-2 mb-2`}>
      {text}
    </span>
);

const FieldDetail: React.FC<{ name: string; def: FieldDefinition }> = ({ name, def }) => (
    <div className="p-3 rounded-md bg-gray-700/40">
        <div className="flex justify-between items-center">
            <span className="font-mono text-gray-200">{name}</span>
            <span className="font-mono text-violet-400 text-xs">{def.type}</span>
        </div>
        <p className="text-xs text-gray-400 mt-1">{def.description}</p>
        <div className="mt-2 text-xs flex flex-wrap gap-2">
            {def.format && <DataBadge text={`Format: ${def.format}`} color="amber" />}
            {def.pattern && <DataBadge text={`Pattern: ${def.pattern}`} color="amber" />}
            {def.enum && <DataBadge text={`Enum: [${def.enum.join(', ')}]`} color="amber" />}
        </div>
    </div>
);


const VendorFormDataVisualizer: React.FC<VendorFormDataVisualizerProps> = ({ templateData }) => {
  const { description, required_fields, fields } = templateData;

  return (
    <div className="bg-gray-800/50 rounded-lg shadow-lg p-6 border border-gray-700">
      <div className="flex items-center space-x-3 mb-4 border-b border-gray-600 pb-3">
        <DocumentTextIcon className="text-sky-400 w-8 h-8"/>
        <div>
          <h2 className="text-2xl font-semibold text-sky-400">
            Vendor Form Data Template
          </h2>
          <p className="text-gray-400">{description}</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
            <h3 className="text-xl font-semibold text-sky-300 mb-4">Required Fields</h3>
            <div className="p-4 bg-gray-800/60 rounded-lg border border-gray-700">
                <div className="flex flex-wrap gap-2">
                    {required_fields.map(field => <DataBadge key={field} text={field} color="rose" />)}
                </div>
            </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-sky-300 mb-4">Field Definitions</h3>
          <div className="p-4 bg-gray-800/60 rounded-lg border border-gray-700 max-h-[350px] overflow-y-auto space-y-3">
            {Object.entries(fields).map(([name, def]) => (
                <FieldDetail key={name} name={name} def={def} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorFormDataVisualizer;
