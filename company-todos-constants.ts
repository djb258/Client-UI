
import type { CompanyTodoData } from './types';
import { ShieldCheckIcon, LockClosedIcon, SparklesIcon, GlobeAltIcon } from './components/Icons';

export const COMPANY_TODO_DATA: CompanyTodoData = {
    features: [
        {
            name: "Row-Level Security",
            description: "Advisors & clients only see tasks belonging to them, ensuring data privacy and preventing cross-visibility.",
            icon: ShieldCheckIcon
        },
        {
            name: "status_by_role JSON",
            description: "Parallel status tracking eliminates collisions. Advisors, Clients, and Admins can update their status independently.",
            icon: LockClosedIcon
        },
        {
            name: "Acknowledgment Events",
            description: "Advisors must explicitly accept tasks, creating a clear chain of liability and responsibility.",
            icon: SparklesIcon
        },
        {
            name: "Event Bus Dispatcher",
            description: "A single, central automation hub handles all notifications, email digests, and triggers for downstream workflows.",
            icon: GlobeAltIcon
        }
    ],
    eventFlow: [
        {
            event: "onTodoStatusChange",
            script: "/scripts/onTodoStatusChange.js",
            description: "Fires when a user updates a task status. Updates the `status_by_role` JSON, creates a `todo_events` record, and publishes the event to the bus."
        },
        {
            event: "onTodoAcknowledge",
            script: "/scripts/onTodoAcknowledge.js",
            description: "Fires when an advisor accepts a task. Sets `acknowledged` to true, logs the event, and emails a summary to key contacts."
        },
        {
            event: "onTodoEvent",
            script: "/scripts/todo_event_dispatcher.js",
            description: "Listens for events on the bus. Routes notifications and triggers other workflows (e.g., updating a renewal dashboard) based on the event type."
        }
    ]
};
