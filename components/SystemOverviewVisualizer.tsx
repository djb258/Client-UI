
import React from 'react';
import type { SystemOverviewData, SystemLayer } from '../types';
import { GlobeAltIcon } from './Icons';

interface SystemOverviewVisualizerProps {
  systemData: SystemOverviewData;
}

const LayerCard: React.FC<{ layer: SystemLayer }> = ({ layer }) => (
    <div className="bg-gray-800/60 p-4 rounded-lg border border-gray-700 h-full flex flex-col">
        <div className="flex-grow">
            <h4 className="font-bold text-lg text-emerald-400">{layer.name}</h4>
            <span className="text-xs font-mono text-amber-400 bg-gray-700/80 px-2 py-1 rounded-md">{layer.altitude}</span>
            <p className="text-gray-400 text-sm mt-2 mb-3">{layer.description}</p>
        </div>
        <div>
            <h5 className="font-semibold text-gray-300 text-xs mb-1">Key Components</h5>
            <div className="flex flex-wrap gap-1.5">
                {layer.components.map(comp => (
                    <span key={comp} className="inline-block bg-gray-700 text-gray-300 rounded-full px-2.5 py-0.5 text-xs font-medium">
                        {comp}
                    </span>
                ))}
            </div>
        </div>
    </div>
);


const SystemOverviewVisualizer: React.FC<SystemOverviewVisualizerProps> = ({ systemData }) => {
  return (
    <div className="bg-gray-800/50 rounded-lg shadow-lg p-6 border border-gray-700">
        <div className="flex items-center space-x-3 mb-4 border-b border-gray-600 pb-3">
            <GlobeAltIcon className="text-sky-400 w-8 h-8"/>
            <div>
                <h2 className="text-2xl font-semibold text-sky-400">
                    System Architecture Overview
                </h2>
                <p className="text-gray-400">A multi-layered view of the client setup architecture.</p>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {systemData.layers.map(layer => (
                <LayerCard key={layer.name} layer={layer} />
            ))}
        </div>
    </div>
  );
};

export default SystemOverviewVisualizer;
