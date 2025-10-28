import React from 'react';
import type { LiveSystemOverviewData, LiveSystemLayer } from '../types';
import { CpuChipIcon, ServerIcon, CloudArrowUpIcon } from './Icons';

interface LiveSystemOverviewVisualizerProps {
  systemData: LiveSystemOverviewData;
}

const statusStyles = {
    operational: {
        bg: 'bg-green-500/20',
        text: 'text-green-300',
        border: 'border-green-500/30',
        dot: 'bg-green-400'
    },
    degraded: {
        bg: 'bg-amber-500/20',
        text: 'text-amber-300',
        border: 'border-amber-500/30',
        dot: 'bg-amber-400'
    },
    outage: {
        bg: 'bg-rose-500/20',
        text: 'text-rose-300',
        border: 'border-rose-500/30',
        dot: 'bg-rose-400'
    }
}

const getIconForLayer = (layerName: string) => {
    if (layerName.toLowerCase().includes('ingestion')) return <CloudArrowUpIcon className="w-6 h-6" />;
    if (layerName.toLowerCase().includes('processing')) return <CpuChipIcon className="w-6 h-6" />;
    if (layerName.toLowerCase().includes('persistence')) return <ServerIcon className="w-6 h-6" />;
    return <ServerIcon className="w-6 h-6" />;
};

const LayerCard: React.FC<{ layer: LiveSystemLayer }> = ({ layer }) => (
    <div className="bg-gray-800/60 p-4 rounded-lg border border-gray-700 h-full flex flex-col">
        <div className="flex items-center space-x-3 mb-3 text-emerald-400">
            {getIconForLayer(layer.name)}
            <h4 className="font-bold text-lg">{layer.name}</h4>
        </div>
        <p className="text-gray-400 text-sm mb-4 flex-grow">{layer.description}</p>
        <div className="space-y-2">
            {layer.components.map(comp => {
                const styles = statusStyles[comp.status];
                return (
                    <div key={comp.name} className={`p-2 rounded-md border ${styles.bg} ${styles.border}`}>
                        <div className="flex justify-between items-center mb-1">
                            <span className="font-semibold text-gray-200 text-sm">{comp.name}</span>
                            <div className="flex items-center space-x-2">
                                <div className={`w-2.5 h-2.5 rounded-full ${styles.dot}`}></div>
                                <span className={`text-xs font-bold capitalize ${styles.text}`}>{comp.status}</span>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-gray-400">
                            {Object.entries(comp.metrics).map(([key, value]) => (
                                <div key={key}>
                                    <span className="capitalize">{key}: </span>
                                    <span className="font-mono text-sky-300">{value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
);


const LiveSystemOverviewVisualizer: React.FC<LiveSystemOverviewVisualizerProps> = ({ systemData }) => {
  return (
    <div className="bg-gray-800/50 rounded-lg shadow-lg p-6 border border-gray-700">
        <div className="flex items-center justify-between mb-4 border-b border-gray-600 pb-3">
            <div className="flex items-center space-x-3">
                <CpuChipIcon className="text-sky-400 w-8 h-8"/>
                <div>
                    <h2 className="text-2xl font-semibold text-sky-400">
                        Live System Health
                    </h2>
                    <p className="text-gray-400">Real-time status of production infrastructure.</p>
                </div>
            </div>
            <div className="text-right text-xs text-gray-500">
                <p>Last Updated</p>
                <p className="font-mono">{new Date(systemData.last_updated).toLocaleString()}</p>
            </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {systemData.layers.map(layer => (
                <LayerCard key={layer.name} layer={layer} />
            ))}
        </div>
    </div>
  );
};

export default LiveSystemOverviewVisualizer;
