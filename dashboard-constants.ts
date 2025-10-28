import type { DashboardData } from './types';

export const DASHBOARD_DATA: DashboardData = {
  "todo_summary_block": {
    "block_id": "todo_summary_block",
    "display_name": "To-Do Summary Bar",
    "source_view": "v_todo_summary",
    "fields": ["total_tasks", "completed_tasks", "completion_rate", "last_activity"],
    "display": { "type": "bar", "theme": "teal" }
  },
  "todo_activity_feed": {
    "block_id": "todo_activity_feed",
    "display_name": "Activity Feed",
    "source_view": "v_todo_activity",
    "display": { "type": "timeline" },
    "refresh_interval": "5m"
  },
  "knowledge_drawer": {
    "block_id": "knowledge_drawer",
    "display_name": "Why This Matters",
    "source_table": "dpr_doctrine_sections",
    "filter": { "context": "company_todos" },
    "display": { "type": "drawer", "position": "right" }
  },
  "file_upload_preview": {
    "block_id": "file_upload_preview",
    "display_name": "Uploaded Documents",
    "source_table": "clnt.company_todos_master",
    "fields": ["title", "file_url", "timestamp_updated"],
    "display": { "type": "card_grid" }
  }
};
