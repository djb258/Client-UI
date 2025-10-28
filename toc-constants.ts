import type { TocData } from './types';

export const TOC_DATA: TocData = {
  "toc_id": "main_sidebar",
  "display_name": "Navigation",
  "theme": "dark",
  "sections": [
    {
      "group": "Administration",
      "items": [
        {"label": "Admin Home", "route": "/admin", "icon": "home"},
        {"label": "Company Setup", "route": "/admin/company-info", "icon": "briefcase"},
        {"label": "Benefits & Compliance", "route": "/admin/benefits", "icon": "shield"},
        {"label": "Project Management", "route": "/admin/project", "icon": "clipboard"}
      ]
    },
    {
      "group": "Client Operations",
      "items": [
        {"label": "Service", "route": "/service", "icon": "wrench"},
        {"label": "Company To-Dos", "route": "/company-dashboard", "icon": "clipboard-check"}
      ]
    },
    {
      "group": "System Oversight",
      "items": [
        {"label": "Operations Intelligence", "route": "/admin/operations-intelligence", "icon": "eye"}
      ]
    }
  ]
};
