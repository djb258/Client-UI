
import React, { useState } from 'react';
// FIX: Import UiBinding type to cast the binding object.
import type { AiStudioManifestData, EventBinding, UiBinding } from '../types';
import { SparklesIcon, ChevronDownIcon } from './Icons';

interface AiStudioManifestVisualizerProps {
  manifestData: AiStudioManifestData;
  scriptCode?: { [key: string]: string };
}

const DataBadge: React.FC<{ text: string | number | boolean; color: string }> = ({ text, color }) => (
    <span className={`inline-block bg-${color}-500/20 text-${color}-300 border border-${color}-500/30 rounded-full px-3 py-1 text-xs font-semibold mr-2 mb-2`}>
      {text.toString()}
    </span>
);

const EventBindingCard: React.FC<{ eventName: string; binding: EventBinding; code?: string }> = ({ eventName, binding, code }) => {
    const [isCodeVisible, setIsCodeVisible] = useState(false);
    return (
        <div className="bg-gray-800/60 p-4 rounded-lg border border-gray-700">
            <h4 className="font-bold text-lg text-emerald-400 font-mono">{eventName}</h4>
            <p className="text-gray-400 text-sm mt-1 mb-3">{binding.description}</p>
            <div className="text-xs space-y-3">
                <div>
                    <span className="font-semibold text-gray-300">Script Path: </span>
                    <code className="bg-gray-700 text-amber-400 p-1 rounded-sm">{binding.automation_path}</code>
                </div>
                {binding.schedule && 
                    <div>
                        <span className="font-semibold text-gray-300">Schedule (iCal RRULE): </span>
                        <pre className="bg-gray-700 text-amber-400 p-1.5 rounded-sm text-xs mt-1 overflow-x-auto"><code>{binding.schedule}</code></pre>
                    </div>
                }
                 {binding.triggers && 
                    <div>
                        <span className="font-semibold text-gray-300">Triggers: </span>
                        <div className="flex flex-wrap gap-1.5 mt-1">
                          {binding.triggers.map(t => <DataBadge key={t} text={t} color="sky" />)}
                        </div>
                    </div>
                }
                {binding.log_to && 
                    <div>
                        <span className="font-semibold text-gray-300">Log Target: </span>
                        <DataBadge text={binding.log_to} color="sky" />
                    </div>
                }
                {code && (
                    <div>
                        <button onClick={() => setIsCodeVisible(!isCodeVisible)} className="text-sky-400 hover:text-sky-300 text-xs font-semibold flex items-center space-x-1">
                            <span>Show Script Implementation</span>
                            <ChevronDownIcon className={`w-4 h-4 transform transition-transform ${isCodeVisible ? 'rotate-180' : ''}`} />
                        </button>
                        {isCodeVisible && (
                             <div className="bg-gray-900/70 mt-2 rounded-md">
                                <pre className="text-xs text-gray-300 p-4 overflow-x-auto">
                                    <code>{code}</code>
                                </pre>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

const AiStudioManifestVisualizer: React.FC<AiStudioManifestVisualizerProps> = ({ manifestData, scriptCode = {} }) => {
  const { workspace_manifest_version, description, event_bindings, variables, documentation, permissions, linked_files, ui_bindings } = manifestData;

  return (
    <div className="bg-gray-800/50 rounded-lg shadow-lg p-6 border border-gray-700">
      <div className="flex items-center space-x-3 mb-4 border-b border-gray-600 pb-3">
        <SparklesIcon className="text-sky-400 w-8 h-8"/>
        <div>
          <h2 className="text-2xl font-semibold text-sky-400">
            AI Studio Workspace Manifest
          </h2>
          <p className="text-gray-400">{description}</p>
        </div>
      </div>
      
      <div className="space-y-6">
        {ui_bindings && (
             <div>
                <h3 className="text-xl font-semibold text-sky-300 mb-4">UI Bindings</h3>
                <div className="p-4 bg-gray-800/60 rounded-lg border border-gray-700 space-y-2">
                    {Object.entries(ui_bindings).map(([widget, binding]) => {
                        // FIX: Cast binding to its correct type. Object.entries() infers the value as `unknown`.
                        const typedBinding = binding as UiBinding;
                        return (
                            <div key={widget} className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-sm">
                                <span className="font-mono text-gray-300">{widget}</span>
                                <div className="flex items-center space-x-2 mt-1 sm:mt-0">
                                    <span className="text-gray-500 text-xs">source →</span>
                                    <code className="bg-emerald-500/20 text-emerald-300 px-2 py-1 rounded-md text-xs">{typedBinding.source}</code>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        )}
        {event_bindings && (
            <div>
                <h3 className="text-xl font-semibold text-sky-300 mb-4">Event Bindings</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   {Object.entries(event_bindings).map(([name, binding]) => {
                     const typedBinding = binding as EventBinding;
                     return <EventBindingCard key={name} eventName={name} binding={typedBinding} code={scriptCode[typedBinding.automation_path]} />
                   })}
                </div>
            </div>
        )}

        {variables && (
            <div>
                <h3 className="text-xl font-semibold text-sky-300 mb-4">Variables</h3>
                <div className="p-4 bg-gray-800/60 rounded-lg border border-gray-700 space-y-2">
                    {Object.entries(variables).map(([key, value]) => (
                        <div key={key} className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-sm">
                            <span className="font-mono text-gray-300">{key}</span>
                            <div className="mt-1 sm:mt-0 text-right">
                                {Array.isArray(value) ? (
                                    <div className="flex flex-wrap justify-end gap-1.5">
                                        {value.map(v => <DataBadge key={v} text={v} color="violet" />)}
                                    </div>
                                ) : (
                                    <code className="bg-sky-500/20 text-sky-300 px-2 py-1 rounded-md text-xs">{value}</code>
                                )}
                           </div>
                        </div>
                    ))}
                </div>
            </div>
        )}
        
        {documentation && (
            <div>
                <h3 className="text-xl font-semibold text-sky-300 mb-4">Documentation</h3>
                <div className="p-4 bg-gray-800/60 rounded-lg border border-gray-700">
                    {Object.entries(documentation).map(([key, value]) => (
                        <div key={key} className="text-sm">
                            <span className="font-semibold text-gray-300 capitalize">{key.replace(/_/g, ' ')}: </span>
                            <code className="bg-gray-700 text-amber-400 p-1 rounded-sm">{value}</code>
                        </div>
                    ))}
                </div>
            </div>
        )}
      </div>
    </div>
  );
};

export default AiStudioManifestVisualizer;