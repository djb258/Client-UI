import React from 'react';
import { EnvelopeIcon } from './Icons';

interface EmailTemplateVisualizerProps {
  templateHtml: string;
}

const EmailTemplateVisualizer: React.FC<EmailTemplateVisualizerProps> = ({ templateHtml }) => {
  
  const mockData = {
    company_name: "Acme Innovations Inc.",
    period_start: new Date().toLocaleDateString(),
    advisor_completed: 4,
    advisor_overdue: 1,
    hr_completed: 12,
    hr_pending: 3,
    cfo_reviewed: 3,
    cfo_due_next: 2,
    system_tasks: 11,
    time_saved_hours: 8,
    advisor_points: [
      "Closed 4 renewal tasks including rate verification.",
      "Sent updated SPD links to 3 vendors.",
      "Improved overall completion rate to 88%."
    ],
    hr_points: [
      "Approved 12 employee benefit cost entries.",
      "Uploaded final payroll deduction schedule."
    ],
    cfo_points: [
      "Reviewed 3 cost projections for next quarter.",
      "Confirmed renewal budget alignment."
    ],
    system_points: [
      "Auto-synced 9 compliance docs from vendor portals.",
      "Triggered 2 renewal prep workflows."
    ],
    upcoming_tasks: [
        "Finalize Q4 budget (Due in 3 days - CFO)",
        "Distribute open enrollment packets (Due in 5 days - HR)",
        "Vendor contract review (Due in 6 days - Advisor)"
    ],
    dashboard_url: "#",
    ack_url: "#",
    timestamp_generated: new Date().toLocaleString(),
  };

  const renderTemplate = (template: string, data: typeof mockData) => {
    let output = template;
    
    // Replace simple placeholders
    for (const [key, value] of Object.entries(data)) {
      if (typeof value === 'string' || typeof value === 'number') {
        output = output.replace(new RegExp(`{{${key}}}`, 'g'), String(value));
      }
    }

    // Handle #each blocks
    const listRegex = /{{\#each (\w+)}}([\s\S]*?){{\/each}}/g;
    output = output.replace(listRegex, (match, listName, itemTemplate) => {
      const list = data[listName as keyof typeof mockData];
      if (Array.isArray(list)) {
        return list.map(item => {
          let renderedItem = itemTemplate;
          if (typeof item === 'string') {
            return renderedItem.replace(/{{this}}/g, item);
          }
          for (const [key, value] of Object.entries(item)) {
            renderedItem = renderedItem.replace(new RegExp(`{{${key}}}`, 'g'), String(value));
          }
          return renderedItem;
        }).join('');
      }
      return '';
    });

    return output;
  }
  
  const renderedHtml = renderTemplate(templateHtml, mockData);

  return (
    <div className="bg-gray-800/50 rounded-lg shadow-lg p-6 border border-gray-700">
      <div className="flex items-center space-x-3 mb-4 border-b border-gray-600 pb-3">
        <EnvelopeIcon className="text-sky-400 w-8 h-8"/>
        <div>
          <h2 className="text-2xl font-semibold text-sky-400">
            Email Template Preview
          </h2>
          <p className="text-gray-400">Operations Intelligence Brief</p>
        </div>
      </div>
      <div className="bg-gray-700/50 rounded-lg p-2 border border-gray-600">
         <div className="w-full h-[500px] bg-white rounded-md overflow-hidden">
            <iframe
                srcDoc={renderedHtml}
                title="Email Preview"
                className="w-full h-full border-0"
            />
        </div>
      </div>
    </div>
  );
};

export default EmailTemplateVisualizer;