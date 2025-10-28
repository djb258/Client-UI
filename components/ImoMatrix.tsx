import React from 'react';
import type { ImoWiringData } from '../types';

interface ImoMatrixProps {
  imoWiringData: ImoWiringData;
}

const DataBadge: React.FC<{ text: string; color: string }> = ({ text, color }) => (
  <span className={`inline-block bg-${color}-500/20 text-${color}-300 border border-${color}-500/30 rounded-full px-3 py-1 text-xs font-semibold mr-2 mb-2`}>
    {text}
  </span>
);

const ImoMatrix: React.FC<ImoMatrixProps> = ({ imoWiringData }) => {
  return (
    <div className="bg-gray-800/50 rounded-lg shadow-lg p-6 border border-gray-700">
      <h2 className="text-2xl font-semibold text-sky-400 mb-4 border-b border-gray-600 pb-3">
        IMO Data Flow Matrix <span className="text-base text-gray-400 font-normal">(30,000 ft)</span>
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[800px] text-sm text-left text-gray-300">
          <thead className="text-xs text-sky-300 uppercase bg-gray-700/50">
            <tr>
              <th scope="col" className="px-6 py-3 rounded-tl-lg">Page</th>
              <th scope="col" className="px-6 py-3">Inputs</th>
              <th scope="col" className="px-6 py-3">Middle</th>
              <th scope="col" className="px-6 py-3 rounded-tr-lg">Outputs</th>
            </tr>
          </thead>
          <tbody>
            {imoWiringData.pages.map((page) => (
              <tr key={page.page} className="border-b border-gray-700 hover:bg-gray-700/30">
                <th scope="row" className="px-6 py-4 font-bold text-gray-100 whitespace-nowrap capitalize">
                  {page.page}
                </th>
                <td className="px-6 py-4">
                  {page.inputs.map((input, i) => <DataBadge key={i} text={input} color="blue" />)}
                </td>
                <td className="px-6 py-4">
                  {page.middle.map((mid, i) => <DataBadge key={i} text={mid} color="amber" />)}
                </td>
                <td className="px-6 py-4">
                  {page.outputs.map((output, i) => <DataBadge key={i} text={output} color="emerald" />)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ImoMatrix;
