import type { PageSpecializationData, AccessRegistryData } from './types';

export const PAGE_SPECIALIZATION_DATA: PageSpecializationData = {
  admin_home: {
    description: "Primary administration and system configuration hub.",
    route_path: "/admin",
    access_scope: "admin_only",
    layout: {
      sidebar: "/imo/pages/toc_sidebar.json",
      theme: "dark"
    },
    blocks: [
      "company_info_block",
      "benefits_selection_block",
      "compliance_selection_block",
      "project_management_block",
      "global_branding_block"
    ]
  },
  cfo_ceo: {
    description: "Financial overview, cost projections, and renewal modeling.",
    route_path: "/cfo",
    access_scope: "cfo_read_only",
    layout: {
      sidebar: "/imo/pages/toc_sidebar.json",
      theme: "dark"
    },
    data_sources: {
        primary: "Neon.finance_tables",
        secondary: ["AIStudio.analytics"]
    },
    permissions: { allow_write: false, allow_clone_write: false },
    allowed_block_types: ["dashboard_widget", "report_generator"]
  },
  hr: {
    description: "Employee census management and billing reconciliation.",
    route_path: "/hr",
    access_scope: "hr_write_access",
    layout: {
      sidebar: "/imo/pages/toc_sidebar.json",
      theme: "dark"
    },
     data_sources: {
        primary: "Jotform.intake",
        secondary: ["Smartsheet.billing", "Firebase.hr_hub"]
    },
    permissions: { allow_write: true, allow_clone_write: true },
    allowed_block_types: ["data_table", "file_upload", "form_embed"]
  },
  service_page: {
    route_path: "/service",
    description: "Benefit directory and universal service ticket submission form.",
    access_scope: "company_portal",
     layout: {
      sidebar: "/imo/pages/toc_sidebar.json",
      theme: "dark"
    },
  },
  company_dashboard_page: {
    route_path: "/company-dashboard",
    description: "Unified client dashboard for To-Dos, progress, and compliance context.",
    access_scope: "company_portal",
    layout: {
      sidebar: "/imo/pages/toc_sidebar.json",
      theme: "dark"
    },
    blocks: [
      "todo_summary_block",
      "todo_activity_feed",
      "file_upload_preview",
      "knowledge_drawer"
    ]
  }
};

export const ACCESS_REGISTRY_DATA: AccessRegistryData = {
  admin_only: {
    roles_allowed: ["admin", "super_admin"],
    collections_read: ["*"],
    collections_write: ["*"]
  },
  cfo_read_only: {
    roles_allowed: ["cfo", "ceo", "advisor_read_only"],
    collections_read: ["finance", "analytics", "reports"],
    collections_write: []
  },
  hr_write_access: {
    roles_allowed: ["hr_manager", "hr_specialist"],
    collections_read: ["employees", "billing", "census"],
    collections_write: ["employees", "billing"]
  },
  company_portal: {
    roles_allowed: ["admin", "hr_manager", "cfo", "advisor"],
    collections_read: ["todos", "benefits", "service_tickets"],
  }
};
