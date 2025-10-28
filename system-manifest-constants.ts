import type { SystemManifestData } from './types';

export const SYSTEM_MANIFEST_DATA: SystemManifestData = {
  "project_name": "Client Setup Template – Powered by IMO_Creator",
  "summary": "Unified client intake + operations dashboard template. Neon schema pending implementation.",
  "last_updated": "2025-10-28T00:00:00Z",
  "modules": {
    "ui": [
      {"name": "Admin Page","path": "/imo/pages/admin/","status": "complete", type: "Page"},
      {"name": "Service Page","path": "/imo/pages/service/","status": "complete", type: "Page"},
      {"name": "Company To-Dos Dashboard","path": "/imo/pages/company-dashboard/","status": "complete", type: "Dashboard"}
    ],
    "neon": [
      {"name": "v_todo_summary","type": "view","status": "pending"},
      {"name": "v_todo_activity","type": "view","status": "pending"},
      {"name": "v_todo_health","type": "view","status": "pending"},
      {"name": "v_todo_role_summary","type": "view","status": "pending"},
      {"name": "clnt.company_todos_master","type": "table","status": "pending"},
      {"name": "clnt.todo_events","type": "table","status": "pending"}
    ],
    "automations": [
      {"name": "benefit_setup_writer","path": "/scripts/benefit_setup_writer.js","status": "complete", type: "Automation"},
      {"name": "send_weekly_todo_digest","path": "/scripts/send_weekly_todo_digest.js","status": "complete", type: "Automation"},
      {"name": "update_system_overview","path": "/scripts/update_system_overview.js","status": "complete", type: "Automation"}
    ],
    "templates": [
      {"name": "weekly_todo_digest.html","path": "/templates/email/weekly_todo_digest.html","status": "complete", type: "Email Template"}
    ]
  },
  "notes": [
    {"topic": "Neon Integration","description": "Views and tables pending creation. Marked as 'pending' until SQL migrations are executed.","added_on": "2025-10-28"}
  ],
  "audit": {
    "last_committed_by": "AI Studio (system)",
    "last_event_type": "onSystemOverviewUpdate"
  }
};
