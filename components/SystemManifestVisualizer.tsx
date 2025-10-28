import React from 'react';
import type { SystemManifestData, SystemModule } from '../types';
import {
  FileIcon,
  FolderIcon,
  LightningBoltIcon,
  EnvelopeIcon,
  DatabaseIcon,
  ChartPieIcon
} from './Icons';

interface SystemManifestVisualizerProps {
  manifestData: SystemManifestData;
}

const getIconForType = (type: string) => {
  switch(type.toLowerCase()){
    case 'page': return <FolderIcon className="w-4 h-4 text-sky-400" />;
    case 'dashboard': return <ChartPieIcon className="w-4 h-4 text-sky-400" />;
    case 'view': return <DatabaseIcon className="w-4 h-4 text-violet-400" />;
    case 'table': return <DatabaseIcon className="w-4 h-4 text-emerald-400" />;
    case 'automation': return <LightningBoltIcon className="w-4 h-4 text-amber-400" />;
    case 'email template': return <EnvelopeIcon className="w-4 h-4 text-rose-400" />;
    default: return <FileIcon className="w-4 h-4 text-gray-400" />;
  }
}

const ModuleList: React.FC<{ title: string; modules: SystemModule[] }> = ({ title, modules }) => (
    <div>
        <h4 className="text-lg font-semibold text-sky-300 mb-2">{title}</h4>
        <div className="space-y-2">
            {modules.map(mod => (
                <div key={mod.name} className="flex items-center justify-between p-2 bg-gray-700/50 rounded-md">
                    <div className="flex items-center space-x-2">
                        {getIconForType(mod.type)}
                        <span className="text-sm text-gray-200">{mod.name}</span>
                    </div>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${mod.status === 'complete' ? 'bg-green-500/20 text-green-300' : 'bg-amber-500/20 text-amber-300'}`}>
                        {mod.status}
                    </span>
                </div>
            ))}
        </div>
    </div>
);

const SystemManifestVisualizer: React.FC<SystemManifestVisualizerProps> = ({ manifestData }) => {
  const { project_name, summary, last_updated, modules, notes, audit } = manifestData;
  return (
    <div className="bg-gray-800/50 rounded-lg shadow-lg p-6 border border-gray-700">
      <div className="border-b border-gray-600 pb-3 mb-4">
        <h2 className="text-2xl font-semibold text-sky-400">{project_name}</h2>
        <p className="text-gray-400">{summary}</p>
        <p className="text-xs text-gray-500 mt-1">Last Updated: {new Date(last_updated).toLocaleString()}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
            <ModuleList title="UI Modules" modules={modules.ui} />
            <ModuleList title="Neon DB Schema" modules={modules.neon} />
        </div>
        <div className="space-y-6">
            <ModuleList title="Automations" modules={modules.automations} />
            <ModuleList title="Templates" modules={modules.templates} />
        </div>
      </div>
    </div>
  );
};

export default SystemManifestVisualizer;
