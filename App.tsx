
import React from 'react';
import { REPO_DATA } from './constants';
import type { TreeNode } from './types';
import TreeNodeComponent from './components/TreeNode';

const Header: React.FC = () => (
  <header className="text-center p-4 md:p-6 border-b border-gray-700">
    <h1 className="text-3xl md:text-4xl font-bold text-sky-400">
      Client Setup Template
    </h1>
    <p className="text-lg text-gray-400">Powered by imo_creator</p>
  </header>
);

interface InfoCardProps {
  title: string;
  data: Record<string, string | number | boolean>;
  gridCols?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, data, gridCols = 'grid-cols-2' }) => (
    <div className="bg-gray-800/50 rounded-lg shadow-lg p-6 border border-gray-700">
        <h2 className="text-xl font-semibold text-sky-400 mb-4 border-b border-gray-600 pb-2">{title}</h2>
        <div className={`grid ${gridCols} gap-4 text-sm`}>
            {Object.entries(data).map(([key, value]) => (
                <div key={key} className="flex flex-col">
                    <span className="text-gray-400 capitalize">{key.replace(/_/g, ' ')}</span>
                    <span className="font-mono text-emerald-400 break-all">{value.toString()}</span>
                </div>
            ))}
        </div>
    </div>
);

const InstructionsCard: React.FC<{ title: string; steps: string[] }> = ({ title, steps }) => (
    <div className="bg-gray-800/50 rounded-lg shadow-lg p-6 border border-gray-700">
        <h2 className="text-xl font-semibold text-sky-400 mb-4 border-b border-gray-600 pb-2">{title}</h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-300">
            {steps.map((step, index) => (
                <li key={index}><code className="bg-gray-700 text-emerald-400 p-1 rounded-sm text-sm">{step}</code></li>
            ))}
        </ol>
    </div>
);

const App: React.FC = () => {
    const { repo_name, template_mode, doctrine_source, altitude, variables, pages, clone_instructions, template_doctrine } = REPO_DATA;

    const fileTreeData: TreeNode[] = [
        { name: template_doctrine.file, type: 'file' },
        { name: clone_instructions.file, type: 'file' },
        {
            name: 'pages',
            type: 'folder',
            children: pages.map(page => ({
                name: page.name,
                type: 'folder',
                children: [
                    { name: 'mission_statement.md', type: 'file' },
                    { name: 'variables.json', type: 'file' },
                    { name: 'future_components.json', type: 'file' },
                    { name: 'meta.json', type: 'file' },
                ]
            }))
        }
    ];

    const repoDetails = {
        repo_name,
        template_mode,
        doctrine_source,
        altitude
    };

    return (
        <div className="min-h-screen bg-gray-900 font-sans p-4 md:p-8">
            <div className="max-w-7xl mx-auto">
                <Header />
                <main className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-8">
                        <div className="grid md:grid-cols-2 gap-8">
                           <InfoCard title="Repository Details" data={repoDetails} gridCols="grid-cols-1 sm:grid-cols-2" />
                           <InfoCard title="Template Variables" data={variables} gridCols="grid-cols-1" />
                        </div>
                        <InstructionsCard title={clone_instructions.file} steps={clone_instructions.steps} />
                    </div>
                    <div className="lg:col-span-1">
                        <div className="bg-gray-800/50 rounded-lg shadow-lg p-6 border border-gray-700 h-full">
                           <h2 className="text-xl font-semibold text-sky-400 mb-4 border-b border-gray-600 pb-2">File Structure (40,000 ft)</h2>
                           <div className="font-mono text-sm">
                            {fileTreeData.map((node, index) => (
                                <TreeNodeComponent key={index} node={node} />
                            ))}
                           </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default App;
