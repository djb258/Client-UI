import React from 'react';
import type { BrandingRegistryData } from '../types';
import { PaintBrushIcon } from './Icons';

interface BrandingVisualizerProps {
  brandingData: BrandingRegistryData;
}

const ColorSwatch: React.FC<{ color: string; name: string }> = ({ color, name }) => (
    <div className="flex items-center space-x-3">
        <div className="w-8 h-8 rounded-full border-2 border-gray-600" style={{ backgroundColor: color }}></div>
        <div>
            <div className="text-sm font-semibold text-gray-300 capitalize">{name.replace(/_/g, ' ')}</div>
            <div className="text-xs font-mono text-amber-400">{color}</div>
        </div>
    </div>
);

const BrandingVisualizer: React.FC<BrandingVisualizerProps> = ({ brandingData }) => {
    const { branding_defaults, sync_targets, sync_policy } = brandingData;

    return (
        <div className="bg-gray-800/50 rounded-lg shadow-lg p-6 border border-gray-700">
            <div className="flex items-center space-x-3 mb-4 border-b border-gray-600 pb-3">
                <PaintBrushIcon className="text-sky-400 w-8 h-8"/>
                <div>
                    <h2 className="text-2xl font-semibold text-sky-400">
                        Global Branding Registry
                    </h2>
                    <p className="text-gray-400">Admin-controlled branding that propagates across all pages. (Doctrine: Barton_48)</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                    <div>
                        <h3 className="text-xl font-semibold text-sky-300 mb-4">Branding Defaults</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-2 p-4 bg-gray-800/60 rounded-lg border border-gray-700">
                           <ColorSwatch color={branding_defaults.primary_color} name="primary_color" />
                           <ColorSwatch color={branding_defaults.accent_color} name="accent_color" />
                           <ColorSwatch color={branding_defaults.background_color} name="background_color" />
                           <div className="flex items-center col-span-1 sm:col-span-2 space-x-3">
                                <div className="text-sm font-semibold text-gray-300 w-24">Font Family:</div>
                                <code className="text-sm text-emerald-400 bg-gray-700/80 px-2 py-1 rounded-md">{branding_defaults.font_family}</code>
                           </div>
                        </div>
                    </div>
                     <div>
                        <h3 className="text-xl font-semibold text-sky-300 mb-4">Sync Policy</h3>
                         <div className="p-4 bg-gray-800/60 rounded-lg border border-gray-700 space-y-2">
                             {Object.entries(sync_policy).map(([key, value]) => (
                                <div key={key} className="flex items-center justify-between text-sm">
                                    <span className="text-gray-300 capitalize">{key.replace(/_/g, ' ')}</span>
                                    <span className={`font-mono px-2 py-0.5 rounded-md text-xs ${typeof value === 'boolean' ? (value ? 'bg-green-500/20 text-green-300' : 'bg-rose-500/20 text-rose-300') : 'bg-sky-500/20 text-sky-300'}`}>
                                        {value.toString()}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-sky-300 mb-4">Sync Targets</h3>
                    <div className="p-4 bg-gray-800/60 rounded-lg border border-gray-700 max-h-[300px] overflow-y-auto">
                        <div className="space-y-1.5">
                            {sync_targets.map(file => (
                                <code key={file} className="block bg-gray-700 text-emerald-400 p-1.5 rounded-sm text-xs w-full">{file}</code>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandingVisualizer;