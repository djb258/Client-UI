import React, { useState } from 'react';
import type { SchemaData, TableDefinition, ViewDefinition } from '../types';
import { DatabaseIcon, ChevronDownIcon } from './Icons';

interface TableVisualizerProps {
  tableName: string;
  tableDef: TableDefinition;
}

const TableVisualizer: React.FC<TableVisualizerProps> = ({ tableName, tableDef }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gray-800/50 rounded-lg border border-gray-700 mb-4 overflow-hidden">
      <button
        className="w-full flex justify-between items-center text-left p-4 bg-gray-700/50 hover:bg-gray-700/80 transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`table-${tableName}-content`}
      >
        <div className="flex flex-col text-left">
          <span className="font-mono text-emerald-400 text-lg">{tableName}</span>
          <span className="text-gray-400 text-sm mt-1">{tableDef.description}</span>
        </div>
        <ChevronDownIcon className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div id={`table-${tableName}-content`} className="p-4 bg-gray-800">
          <h4 className="text-md font-semibold text-sky-300 mb-3">Columns</h4>
          <ul className="space-y-2 text-sm">
            {Object.entries(tableDef.columns).map(([colName, colDef]) => (
              <li key={colName} className="flex flex-wrap justify-between items-center p-2 rounded-md bg-gray-700/40">
                <span className="font-mono text-gray-200">{colName}</span>
                <span className="font-mono text-amber-400 text-xs text-right">{colDef}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const ViewVisualizer: React.FC<{ viewName: string; viewDef: ViewDefinition }> = ({ viewName, viewDef }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gray-800/50 rounded-lg border border-gray-700 mb-4 overflow-hidden">
      <button
        className="w-full flex justify-between items-center text-left p-4 bg-gray-700/50 hover:bg-gray-700/80 transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`view-${viewName}-content`}
      >
        <div className="flex flex-col text-left">
          <span className="font-mono text-violet-400 text-lg">{viewName}</span>
          <span className="text-gray-400 text-sm mt-1">{viewDef.description}</span>
        </div>
        <ChevronDownIcon className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div id={`view-${viewName}-content`} className="p-4 bg-gray-800">
          <h4 className="text-md font-semibold text-sky-300 mb-3">Columns</h4>
          <ul className="space-y-2 text-sm">
            {viewDef.columns.map((colName) => (
              <li key={colName} className="flex flex-wrap justify-between items-center p-2 rounded-md bg-gray-700/40">
                <span className="font-mono text-gray-200">{colName}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

interface SchemaVisualizerProps {
  schemaData: SchemaData;
}

const SchemaVisualizer: React.FC<SchemaVisualizerProps> = ({ schemaData }) => {
  return (
    <div className="bg-gray-800/50 rounded-lg shadow-lg p-6 border border-gray-700">
      <div className="flex items-center space-x-3 mb-4 border-b border-gray-600 pb-3">
        <DatabaseIcon className="text-sky-400 w-8 h-8"/>
        <div>
           <h2 className="text-2xl font-semibold text-sky-400">
            Database Schema
          </h2>
          <p className="text-gray-400">Schema: <span className="font-mono text-emerald-400">{schemaData.schema}</span></p>
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-sky-300 mb-4">Tables</h3>
        {Object.entries(schemaData.tables).map(([tableName, tableDef]) => (
          <TableVisualizer key={tableName} tableName={tableName} tableDef={tableDef} />
        ))}
        {schemaData.views && (
          <>
            <h3 className="text-xl font-semibold text-sky-300 my-4 pt-4 border-t border-gray-700">Views</h3>
            {Object.entries(schemaData.views).map(([viewName, viewDef]) => (
              <ViewVisualizer key={viewName} viewName={viewName} viewDef={viewDef} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default SchemaVisualizer;
