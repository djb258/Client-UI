
import type { SystemOverviewData } from './types';

export const SYSTEM_OVERVIEW_DATA: SystemOverviewData = {
    layers: [
        {
            name: "Client Setup Template Repo",
            altitude: "40,000 ft",
            description: "A clonable blueprint for standing up new client hubs. Contains all necessary pages, data structures, and automation logic in a locked, read-only state.",
            components: ["Pages", "IMO Data Model", "Branding Registry", "Automation Layer"]
        },
        {
            name: "Inter-Module Orchestration (IMO)",
            altitude: "30,000 ft",
            description: "Defines the high-level data flow between different page modules and external systems. Maps inputs, processing steps, and outputs for each business function.",
            components: ["Data Flow Matrix", "Bridge Registry"]
        },
        {
            name: "Page & Module Specialization",
            altitude: "20,000 ft",
            description: "Specifies the unique configuration, access control, and capabilities of each page dashboard. Includes module definitions like the Client Setup Wizard.",
            components: ["Page Dashboards", "Access Registry", "Wizard Modules"]
        },
        {
            name: "Automation & Logic Layer",
            altitude: "10,000 ft",
            description: "Contains event-driven automations that handle tasks like template unlocking, data synchronization, and initial data seeding upon client setup.",
            components: ["Event Triggers", "Conditional Logic", "Action Scripts"]
        },
        {
            name: "Data & Schema Layer",
            altitude: "Ground Level",
            description: "The foundational database schema defining all tables, columns, and relationships for client, employee, and benefits data within the Neon database.",
            components: ["Neon DB Schema", "Table Definitions"]
        }
    ]
};
