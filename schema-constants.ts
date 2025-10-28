import type { SchemaData } from './types';

export const SCHEMA_DATA: SchemaData = {
  schema: "clnt",
  tables: {
    "company_master": {
      "description": "Core identity and contact information for a client company.",
      "columns": {
        "company_unique_id": "UUID (Primary Key)",
        "company_name": "TEXT",
        "ein": "TEXT",
        "hq_state": "TEXT",
        "contact_email": "TEXT",
        "contact_phone": "TEXT",
        "status": "TEXT ('active'/'inactive')",
        "timestamp_created": "TIMESTAMPTZ",
        "timestamp_last_updated": "TIMESTAMPTZ"
      }
    },
    "company_vendor_link": {
      "description": "Links companies to vendors and stores compliance configuration.",
      "columns": {
        "link_unique_id": "UUID (Primary Key)",
        "company_unique_id": "UUID (Foreign Key)",
        "vendor_unique_id": "UUID",
        "funding_type": "TEXT ('self-funded'/'fully insured')",
        "compliance_owner": "TEXT ('advisor'/'client'/'shared')",
        "spd_url": "TEXT",
        "renewal_date": "DATE",
        "timestamp_created": "TIMESTAMPTZ",
        "timestamp_last_updated": "TIMESTAMPTZ"
      }
    },
    "benefit_master": {
      "description": "Stores master definitions for each benefit type offered by a company.",
      "columns": {
        "benefit_unique_id": "UUID (Primary Key)",
        "company_unique_id": "UUID (Foreign Key)",
        "benefit_type": "TEXT ('medical', 'dental', etc.)",
        "effective_date": "DATE",
        "renewal_date": "DATE",
        "timestamp_created": "TIMESTAMPTZ"
      }
    },
    "company_todos_master": {
      "description": "Master table for project management tasks and to-dos.",
      "columns": {
        "todo_id": "UUID (Primary Key)",
        "company_unique_id": "UUID (Foreign Key)",
        "title": "TEXT",
        "assigned_role": "TEXT ('advisor'/'hr'/'cfo'/'system')",
        "status": "TEXT ('pending'/'completed'/'overdue'/'validated')",
        "due_date": "DATE",
        "validated": "BOOLEAN",
        "timestamp_created": "TIMESTAMPTZ",
        "timestamp_updated": "TIMESTAMPTZ"
      }
    },
    "todo_events": {
      "description": "Immutable log of all events related to a to-do item for audit purposes.",
      "columns": {
        "event_id": "UUID (Primary Key)",
        "todo_id": "UUID (Foreign Key)",
        "event_type": "TEXT",
        "triggered_by": "TEXT",
        "payload": "JSONB",
        "timestamp_logged": "TIMESTAMPTZ"
      }
    }
  },
  views: {
    "v_todo_summary": {
      "description": "Aggregates task completion statistics for each company.",
      "columns": [
        "company_unique_id",
        "total_tasks",
        "completed_tasks",
        "completion_rate",
        "last_activity"
      ]
    },
    "v_todo_activity": {
      "description": "Provides a denormalized feed of all to-do events for activity timelines.",
      "columns": [
        "todo_id",
        "company_unique_id",
        "event_type",
        "triggered_by",
        "timestamp_logged",
        "payload"
      ]
    },
    "v_todo_health": {
      "description": "Calculates health metrics like overdue and upcoming tasks.",
      "columns": [
        "company_unique_id",
        "overdue_tasks",
        "due_next_week",
        "validated_tasks"
      ]
    },
    "v_todo_role_summary": {
      "description": "Summarizes task statistics grouped by the assigned role.",
      "columns": [
        "company_unique_id",
        "assigned_role",
        "completed",
        "pending",
        "overdue"
      ]
    }
  }
};

export const SHQ_SCHEMA_DATA: SchemaData = {
    schema: "shq",
    tables: {
        "audit_log": {
            "description": "Global, system-wide audit trail for all significant events and actions.",
            "columns": {
                "audit_id": "UUID (Primary Key)",
                "event_type": "TEXT",
                "actor": "TEXT",
                "message": "TEXT",
                "layer": "TEXT",
                "severity": "TEXT",
                "payload": "JSONB",
                "timestamp_logged": "TIMESTAMPTZ"
            }
        }
    }
};