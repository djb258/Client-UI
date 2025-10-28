import type { SystemHealthData, ProblemLog } from './types';

export const SYSTEM_HEALTH_DATA: SystemHealthData = {
  overall_status: 'degraded_performance',
  last_checked: new Date().toISOString(),
  components: [
    {
      name: "Neon DB",
      status: 'operational',
      metrics: [
        { name: "CPU Utilization", value: "25", unit: "%", status: 'healthy' },
        { name: "Query Latency", value: "120", unit: "ms", status: 'healthy' }
      ]
    },
    {
      name: "Firebase Functions",
      status: 'operational',
      metrics: [
        { name: "Invocation Rate", value: "200", unit: "/min", status: 'healthy' },
        { name: "Error Rate", value: "0.5", unit: "%", status: 'healthy' }
      ]
    },
    {
      name: "Jotform Webhook API",
      status: 'degraded_performance',
      metrics: [
        { name: "API Latency", value: "1500", unit: "ms", status: 'warning' },
        { name: "Success Rate", value: "98", unit: "%", status: 'healthy' }
      ]
    },
    {
      name: "Cloud Storage",
      status: 'full_outage',
      metrics: [
        { name: "Upload Success", value: "0", unit: "%", status: 'critical' },
        { name: "Download Latency", value: "N/A", unit: "", status: 'critical' }
      ]
    }
  ]
};

export const PROBLEM_LOG_DATA: ProblemLog[] = [
    { timestamp: new Date(Date.now() - 2 * 60000).toISOString(), source: "Cloud Storage", severity: 'error', message: "Upload failed: Connection timeout." },
    { timestamp: new Date(Date.now() - 5 * 60000).toISOString(), source: "Jotform API", severity: 'warning', message: "API response time exceeded 1.2s threshold." },
    { timestamp: new Date(Date.now() - 10 * 60000).toISOString(), source: "Firebase Auth", severity: 'info', message: "User 'test@example.com' logged in successfully." },
    { timestamp: new Date(Date.now() - 11 * 60000).toISOString(), source: "Cloud Storage", severity: 'error', message: "Bucket 'client-docs-prod' not found." },
];
