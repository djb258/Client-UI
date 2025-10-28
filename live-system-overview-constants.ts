import type { LiveSystemOverviewData } from './types';

export const LIVE_SYSTEM_OVERVIEW_DATA: LiveSystemOverviewData = {
    last_updated: new Date().toISOString(),
    layers: [
        {
            name: "Data Ingestion Layer",
            description: "Handles incoming data from various sources.",
            components: [
                { name: "Jotform Webhook", status: "operational", metrics: { "requests/min": 12, "latency": "50ms" } },
                { name: "Smartsheet API", status: "operational", metrics: { "syncs/hr": 4, "latency": "300ms" } },
                { name: "CSV SFTP Drop", status: "degraded", metrics: { "last_file": "2h ago", "queue_depth": 5 } }
            ]
        },
        {
            name: "Processing & Orchestration",
            description: "Core logic and data transformation pipelines.",
            components: [
                { name: "Firebase Functions", status: "operational", metrics: { "invocations/min": 150, "errors": "0.1%" } },
                { name: "AI Studio Scheduler", status: "operational", metrics: { "jobs_executed": 24, "failures": 0 } }
            ]
        },
        {
            name: "Data Persistence Layer",
            description: "Primary databases and storage.",
            components: [
                { name: "Neon DB (Postgres)", status: "operational", metrics: { "cpu": "15%", "active_connections": 45 } },
                { name: "Firestore (Hubs)", status: "operational", metrics: { "reads/s": 250, "writes/s": 80 } },
                { name: "Cloud Storage (Docs)", status: "outage", metrics: { "availability": "0%", "error_rate": "100%" } }
            ]
        }
    ]
};
