import type { AiStudioManifestData } from './types';

export const AI_STUDIO_MANIFEST_DATA: AiStudioManifestData = {
    "workspace_manifest_version": "1.2",
    "description": "Manifest for client setup automation and data processing.",
    "event_bindings": {
        "on_weekly_digest": {
            "description": "Generates and sends a weekly summary email to all stakeholders.",
            "automation_path": "send_weekly_todo_digest.js",
            "schedule": "FREQ=WEEKLY;BYDAY=FR;BYHOUR=10;BYMINUTE=0;BYSECOND=0"
        },
        "on_system_health_check": {
            "description": "Periodically checks system components and updates the live overview dashboard.",
            "automation_path": "update_system_overview.js",
            "triggers": ["schedule"],
            "schedule": "FREQ=MINUTELY;INTERVAL=5"
        }
    },
    "ui_bindings": {
        "client_setup_wizard": { "source": "clnt.company_master" },
        "todo_dashboard": { "source": "v_todo_summary" }
    },
    "variables": {
        "admin_email_list": ["admin@example.com", "ops@example.com"],
        "default_region": "us-central1"
    },
    "documentation": {
        "readme": "/docs/README.md",
        "doctrine_source": "Barton_Doctrine_47"
    }
};

export const AI_STUDIO_SCRIPT_CODE: { [key: string]: string } = {
    "send_weekly_todo_digest.js": `
// Pseudo-code for generating weekly digest
async function run() {
    const clients = await NeonDB.query('SELECT * FROM clnt.active_clients');
    for (const client of clients) {
        const stats = await getTodoStats(client.id);
        const emailHtml = renderTemplate('weekly_digest.html', stats);
        await EmailService.send(client.contacts, 'Weekly Digest', emailHtml);
    }
}
    `.trim(),
    "update_system_overview.js": `
// Pseudo-code for updating system health
async function run() {
    const jotformHealth = await checkApiService('Jotform');
    const neonHealth = await checkDatabaseHealth('Neon');
    const overallStatus = aggregateStatus(jotformHealth, neonHealth);
    await Firestore.write('/system_health/live', {
        status: overallStatus,
        last_updated: new Date()
    });
}
    `.trim()
};
