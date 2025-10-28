import React from 'react';
import type { DashboardData } from '../types';
import { ChartPieIcon, ClockIcon, PaperClipIcon, QuestionMarkCircleIcon } from './Icons';

interface CompanyTodosDashboardProps {
  dashboardData: DashboardData;
}

const DonutChart = ({ percentage }: { percentage: number }) => {
    const sqSize = 100;
    const strokeWidth = 10;
    const radius = (sqSize - strokeWidth) / 2;
    const viewBox = `0 0 ${sqSize} ${sqSize}`;
    const dashArray = radius * Math.PI * 2;
    const dashOffset = dashArray - dashArray * percentage / 100;

    return (
        <svg width={sqSize} height={sqSize} viewBox={viewBox} className="-rotate-90">
            <circle
                className="text-gray-700"
                cx={sqSize / 2}
                cy={sqSize / 2}
                r={radius}
                strokeWidth={`${strokeWidth}px`}
                fill="none"
                stroke="currentColor"
            />
            <circle
                className="text-teal-400"
                cx={sqSize / 2}
                cy={sqSize / 2}
                r={radius}
                strokeWidth={`${strokeWidth}px`}
                transform={`rotate(0 ${sqSize/2} ${sqSize/2})`}
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                style={{
                    strokeDasharray: dashArray,
                    strokeDashoffset: dashOffset,
                    transition: 'stroke-dashoffset 0.5s ease-in-out'
                }}
            />
            <text
                className="fill-current text-gray-200 text-xl font-bold"
                x="50%"
                y="50%"
                dy=".3em"
                textAnchor="middle"
                transform={`rotate(90 ${sqSize/2} ${sqSize/2})`}
            >
                {`${percentage}%`}
            </text>
        </svg>
    );
};

const CompanyTodosDashboard: React.FC<CompanyTodosDashboardProps> = ({ dashboardData }) => {
  const { todo_summary_block, todo_activity_feed, file_upload_preview, knowledge_drawer } = dashboardData;

  // Mock data for visualization
  const summaryData = { total_tasks: 25, completed_tasks: 18, completion_rate: 72, last_activity: "2 hours ago" };
  const activityFeed = [
    { event: "status_change", user: "advisor@acme.com", time: "1h ago", details: "Marked 'Review 5500' as completed." },
    { event: "acknowledged", user: "client@acme.com", time: "3h ago", details: "Acknowledged 'Upload Q3 Census'." },
    { event: "comment_added", user: "advisor@acme.com", time: "8h ago", details: "Commented on 'Finalize Renewal Rates'." },
    { event: "created", user: "system", time: "1d ago", details: "New task 'Prepare for Q4 Meeting' created." },
  ];
  const uploadedFiles = [
    { title: "Q3_Census_Final.xlsx", user: "client@acme.com", time: "4h ago" },
    { title: "Signed_BAA.pdf", user: "client@acme.com", time: "2d ago" },
  ];

  return (
    <div className="bg-gray-800/50 rounded-lg shadow-lg p-6 border border-gray-700">
      <div className="flex items-center space-x-3 mb-4 border-b border-gray-600 pb-3">
        <ChartPieIcon className="text-sky-400 w-8 h-8"/>
        <div>
          <h2 className="text-2xl font-semibold text-sky-400">
            Company To-Dos Dashboard
          </h2>
          <p className="text-gray-400">Live metrics, activity, and compliance context for client tasks.</p>
        </div>
      </div>
      
      {/* Summary Block */}
      <div className="bg-gray-800/60 p-4 rounded-lg border border-gray-700 mb-8">
        <h3 className="text-lg font-semibold text-teal-300 mb-4">{todo_summary_block.display_name}</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
            <div className="flex justify-center">
                <DonutChart percentage={summaryData.completion_rate} />
            </div>
            <div className="text-center">
                <p className="text-3xl font-bold text-gray-100">{summaryData.total_tasks}</p>
                <p className="text-sm text-gray-400">Total Tasks</p>
            </div>
            <div className="text-center">
                <p className="text-3xl font-bold text-gray-100">{summaryData.completed_tasks}</p>
                <p className="text-sm text-gray-400">Completed</p>
            </div>
            <div className="text-center">
                <p className="text-lg font-semibold text-gray-100">{summaryData.last_activity}</p>
                <p className="text-sm text-gray-400">Last Activity</p>
            </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Activity Feed */}
        <div className="lg:col-span-2">
            <div className="bg-gray-800/60 p-4 rounded-lg border border-gray-700 h-full">
                <h3 className="flex items-center space-x-2 text-lg font-semibold text-violet-300 mb-4">
                    <ClockIcon className="w-5 h-5" />
                    <span>{todo_activity_feed.display_name}</span>
                </h3>
                <div className="space-y-4">
                    {activityFeed.map((item, i) => (
                        <div key={i} className="flex space-x-3">
                            <div className="w-1.5 h-auto bg-gray-700 rounded-full"></div>
                            <div>
                                <p className="text-sm text-gray-200">{item.details}</p>
                                <p className="text-xs text-gray-500">{item.user} - {item.time}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        
        <div className="space-y-8">
            {/* File Uploads */}
            <div className="bg-gray-800/60 p-4 rounded-lg border border-gray-700">
                <h3 className="flex items-center space-x-2 text-lg font-semibold text-amber-300 mb-4">
                    <PaperClipIcon className="w-5 h-5" />
                    <span>{file_upload_preview.display_name}</span>
                </h3>
                <div className="space-y-2">
                    {uploadedFiles.map((file, i) => (
                        <div key={i} className="bg-gray-700/50 p-2 rounded-md text-sm">
                            <p className="text-gray-200 truncate">{file.title}</p>
                            <p className="text-xs text-gray-500">{file.user} - {file.time}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Knowledge Drawer */}
            <div className="bg-gray-800/60 p-4 rounded-lg border border-gray-700">
                <h3 className="flex items-center space-x-2 text-lg font-semibold text-sky-300 mb-4">
                    <QuestionMarkCircleIcon className="w-5 h-5" />
                    <span>{knowledge_drawer.display_name}</span>
                </h3>
                <p className="text-sm text-gray-400">
                    This section provides contextual guidance based on the current task. It pulls from the central doctrine to explain compliance requirements, deadlines, and best practices, ensuring all actions are informed and auditable.
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyTodosDashboard;
