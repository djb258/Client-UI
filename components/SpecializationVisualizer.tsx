import React, { useState } from 'react';
import type { PageSpecializationData, AccessRegistryData, PageSpecialization, AccessScope } from '../types';
import { ViewGridIcon, ShieldCheckIcon, LockClosedIcon, LockOpenIcon } from './Icons';

interface SpecializationVisualizerProps {
    pageData: PageSpecializationData;
    accessData: AccessRegistryData;
}

const DataBadge: React.FC<{ text: string; color: string }> = ({ text, color }) => (
    <span className={`inline-block bg-${color}-500/20 text-${color}-300 border border-${color}-500/30 rounded-full px-3 py-1 text-xs font-semibold mr-2 mb-2`}>
      {text}
    </span>
);

const PageSpecializationTab: React.FC<{ pageData: PageSpecializationData }> = ({ pageData }) => (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {Object.entries(pageData).map(([pageName, pageDef]: [string, PageSpecialization]) => (
            <div key={pageName} className="bg-gray-800/60 p-4 rounded-lg border border-gray-700">
                <h4 className="font-bold text-lg text-emerald-400 font-mono">{pageName}</h4>
                <p className="text-gray-400 text-sm mt-1 mb-3">{pageDef.description}</p>
                <div className="text-xs space-y-3">
                    <div>
                        <span className="font-semibold text-gray-300">Route: </span>
                        <code className="bg-gray-700 text-amber-400 p-1 rounded-sm">{pageDef.route_path}</code>
                    </div>
                    <div>
                        <span className="font-semibold text-gray-300">Access Scope: </span>
                        <DataBadge text={pageDef.access_scope} color="sky" />
                    </div>
                    {pageDef.data_sources && (
                        <div>
                            <span className="font-semibold text-gray-300">Data Sources: </span>
                            <div className="pt-1">
                                <DataBadge text={`Primary: ${pageDef.data_sources.primary}`} color="green" />
                                {pageDef.data_sources.secondary.map(s => <DataBadge key={s} text={s} color="gray" />)}
                            </div>
                        </div>
                    )}
                    {pageDef.permissions && (
                        <div>
                            <span className="font-semibold text-gray-300">Permissions: </span>
                            <div className="pt-1 flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2 items-start">
                                <div className={`flex items-center space-x-1.5 p-1.5 rounded-md text-xs ${pageDef.permissions.allow_write ? 'bg-green-500/20 text-green-300' : 'bg-rose-500/20 text-rose-300'}`}>
                                    {pageDef.permissions.allow_write ? <LockOpenIcon /> : <LockClosedIcon />}
                                    <span>Template Write: {pageDef.permissions.allow_write ? 'Enabled' : 'Disabled'}</span>
                                </div>
                                <div className={`flex items-center space-x-1.5 p-1.5 rounded-md text-xs ${pageDef.permissions.allow_clone_write ? 'bg-green-500/20 text-green-300' : 'bg-rose-500/20 text-rose-300'}`}>
                                     {pageDef.permissions.allow_clone_write ? <LockOpenIcon /> : <LockClosedIcon />}
                                     <span>Clone Write: {pageDef.permissions.allow_clone_write ? 'Enabled' : 'Disabled'}</span>
                                </div>
                            </div>
                        </div>
                    )}
                    {pageDef.allowed_block_types && 
                        <div>
                            <span className="font-semibold text-gray-300">Allowed Blocks: </span>
                            <div className="pt-1">
                                {pageDef.allowed_block_types.map(b => <DataBadge key={b} text={b} color="gray" />)}
                            </div>
                        </div>
                    }
                </div>
            </div>
        ))}
    </div>
);

const AccessRegistryTab: React.FC<{ accessData: AccessRegistryData }> = ({ accessData }) => (
     <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {Object.entries(accessData).map(([scopeName, scopeDef]: [string, AccessScope]) => (
            <div key={scopeName} className="bg-gray-800/60 p-4 rounded-lg border border-gray-700">
                <h4 className="font-bold text-lg text-sky-400 font-mono">{scopeName}</h4>
                <div className="mt-2 text-sm space-y-3">
                    <div>
                        <h5 className="font-semibold text-gray-300 mb-1">Roles Allowed</h5>
                        {scopeDef.roles_allowed.map(r => <DataBadge key={r} text={r} color="violet" />)}
                    </div>
                     <div>
                        <h5 className="font-semibold text-gray-300 mb-1">Read Collections</h5>
                        {scopeDef.collections_read.map(c => <DataBadge key={c} text={c} color="green" />)}
                    </div>
                    {scopeDef.collections_write && scopeDef.collections_write.length > 0 && (
                         <div>
                            <h5 className="font-semibold text-gray-300 mb-1">Write Collections</h5>
                            {scopeDef.collections_write.map(c => <DataBadge key={c} text={c} color="rose" />)}
                        </div>
                    )}
                </div>
            </div>
        ))}
    </div>
);


const SpecializationVisualizer: React.FC<SpecializationVisualizerProps> = ({ pageData, accessData }) => {
    const [activeTab, setActiveTab] = useState<'pages' | 'access'>('pages');

    const TabButton: React.FC<{ tabName: 'pages' | 'access'; label: string; icon: React.ReactNode }> = ({ tabName, label, icon }) => (
        <button
            onClick={() => setActiveTab(tabName)}
            className={`flex items-center space-x-2 px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                activeTab === tabName 
                ? 'bg-sky-500/20 text-sky-300' 
                : 'text-gray-400 hover:bg-gray-700/50'
            }`}
        >
            {icon}
            <span>{label}</span>
        </button>
    );

    return (
        <div className="bg-gray-800/50 rounded-lg shadow-lg p-6 border border-gray-700">
            <h2 className="text-2xl font-semibold text-sky-400 mb-4 border-b border-gray-600 pb-3">
                CTB Page Specialization <span className="text-base text-gray-400 font-normal">(20,000 ft)</span>
            </h2>
            <div className="flex space-x-2 mb-6 border-b border-gray-700 pb-3">
                <TabButton tabName="pages" label="Page Dashboards" icon={<ViewGridIcon className="w-5 h-5"/>} />
                <TabButton tabName="access" label="Access Registry" icon={<ShieldCheckIcon className="w-5 h-5"/>} />
            </div>

            <div>
                {activeTab === 'pages' && <PageSpecializationTab pageData={pageData} />}
                {activeTab === 'access' && <AccessRegistryTab accessData={accessData} />}
            </div>
        </div>
    );
};

export default SpecializationVisualizer;
