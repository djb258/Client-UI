import type React from 'react';

// From constants.ts
export interface RepoData {
  repo_name: string;
  template_mode: boolean;
  doctrine_source: string;
  altitude: string;
  template_doctrine: {
    file: string;
    references: string[];
  };
  variables: {
    client_id: string;
    hub_id: string;
    bridge_registry_path: string;
    template_version: string;
    created_at: string;
  };
  pages: { name: string; path: string; repo_ref: string }[];
  clone_instructions: {
    file: string;
    steps: string[];
  };
  logs: { creation_log: string };
}

// From components/TreeNode.tsx
export interface TreeNode {
  name: string;
  type: 'folder' | 'file';
  children?: TreeNode[];
}

// From imo-constants.ts
export interface Bridge {
  bridge_id: string;
  source: string;
  target: string;
}
export interface ImoPageWiring {
  page: string;
  inputs: string[];
  middle: string[];
  outputs: string[];
  bridge_refs: string[];
}
export interface ImoWiringData {
  altitude: string;
  repo_source: string;
  pages: ImoPageWiring[];
}

// From schema-constants.ts
export interface TableDefinition {
  description: string;
  columns: { [key: string]: string };
}
export interface ViewDefinition {
  description: string;
  columns: string[];
}
export interface SchemaData {
  schema: string;
  tables: { [key: string]: TableDefinition };
  views?: { [key: string]: ViewDefinition };
}

// From page-specialization-constants.ts and components/SpecializationVisualizer.tsx
export interface PageSpecialization {
  description: string;
  route_path: string;
  access_scope: string;
  layout?: {
    sidebar: string;
    theme: string;
  };
  blocks?: string[];
  data_sources?: {
    primary: string;
    secondary: string[];
  };
  permissions?: {
    allow_write: boolean;
    allow_clone_write: boolean;
  };
  allowed_block_types?: string[];
}
export interface PageSpecializationData {
  [key: string]: PageSpecialization;
}
export interface AccessScope {
  roles_allowed: string[];
  collections_read: string[];
  collections_write?: string[];
}
export interface AccessRegistryData {
  [key: string]: AccessScope;
}


// From automation-constants.ts and components/AutomationVisualizer.tsx
export interface AutomationAction {
  type: string;
  target?: string;
  path?: string;
}
export interface AutomationDefinition {
  automation_id: string;
  description: string;
  trigger: string;
  conditions?: string[];
  actions: AutomationAction[];
  doctrine_ref: string;
}
export interface AutomationRegistryData {
  [key: string]: AutomationDefinition;
}

// From ai-studio-constants.ts and components/AiStudioManifestVisualizer.tsx
export interface EventBinding {
  description: string;
  automation_path: string;
  schedule?: string;
  triggers?: string[];
  log_to?: string;
  enabled?: boolean;
  run_as?: string;
}
export interface UiBinding {
  source: string;
}
export interface AiStudioManifestData {
  workspace_manifest_version: string;
  description: string;
  event_bindings: { [key: string]: EventBinding };
  ui_bindings?: { [key: string]: UiBinding };
  variables?: { [key: string]: string | string[] };
  documentation?: { [key: string]: string };
  permissions?: unknown;
  linked_files?: unknown;
}

// From branding-constants.ts
export interface BrandingRegistryData {
  branding_defaults: {
    primary_color: string;
    accent_color: string;
    background_color: string;
    logo_url: string;
    favicon_url: string;
    font_family: string;
  };
  sync_targets: string[];
  sync_policy: {
    trigger: string;
    propagate_immediately: boolean;
    audit_log_enabled: boolean;
  };
}

// From module-constants.ts
export interface ClientSetupWizardBlock {
  module_id: string;
  description: string;
  fields: { [key: string]: string | string[] };
  automations: string[];
  output_targets: string[];
  validation_rules: string[];
}

// From wiring-constants.ts and components/SetupWiringVisualizer.tsx
export interface SetupWiringMapping {
  target_table: string;
  target_column: string;
}
export interface SetupWiringData {
  description: string;
  mappings: { [key: string]: SetupWiringMapping };
}

// From system-overview-constants.ts and components/SystemOverviewVisualizer.tsx
export interface SystemLayer {
  name: string;
  altitude: string;
  description: string;
  components: string[];
}
export interface SystemOverviewData {
  layers: SystemLayer[];
}

// From vendor-form-data-constants.ts and components/VendorFormDataVisualizer.tsx
export interface FieldDefinition {
  type: string;
  description: string;
  format?: string;
  pattern?: string;
  enum?: string[];
}
export interface VendorFormDataTemplate {
  schema_version: string;
  description: string;
  required_fields: string[];
  fields: { [key: string]: FieldDefinition };
}

// From company-todos-constants.ts and components/CompanyTodosVisualizer.tsx
export interface TodoFeature {
  name: string;
  description: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}
export interface TodoEventFlow {
    event: string;
    script: string;
    description: string;
}
export interface CompanyTodoData {
  features: TodoFeature[];
  eventFlow: TodoEventFlow[];
}

// From dashboard-constants.ts
export interface DashboardBlock {
    block_id: string;
    display_name: string;
    source_view?: string;
    source_table?: string;
    fields?: string[];
    display: {
        type: string;
        theme?: string;
        position?: string;
    };
    refresh_interval?: string;
    filter?: {
        context: string;
    };
}
export interface DashboardData {
    [key: string]: DashboardBlock;
}

// From live-system-overview-constants.ts and components/LiveSystemOverviewVisualizer.tsx
export interface LiveSystemComponent {
    name: string;
    status: 'operational' | 'degraded' | 'outage';
    metrics: { [key: string]: string | number };
}
export interface LiveSystemLayer {
    name: string;
    description: string;
    components: LiveSystemComponent[];
}
export interface LiveSystemOverviewData {
    last_updated: string;
    layers: LiveSystemLayer[];
}

// From system-manifest-constants.ts and components/SystemManifestVisualizer.tsx
export interface SystemModule {
    name: string;
    path?: string;
    type: string;
    status: 'complete' | 'pending';
}
export interface SystemNote {
    topic: string;
    description: string;
    added_on: string;
}
export interface SystemManifestData {
    project_name: string;
    summary: string;
    last_updated: string;
    modules: {
        ui: SystemModule[];
        neon: SystemModule[];
        automations: SystemModule[];
        templates: SystemModule[];
    };
    notes: SystemNote[];
    audit: {
        last_committed_by: string;
        last_event_type: string;
    };
}


// From system-health-constants.ts and components/ProblemLogger.tsx
export interface SystemMetric {
    name: string;
    value: string;
    unit: string;
    status: 'healthy' | 'warning' | 'critical';
}
export interface SystemHealthComponent {
    name: string;
    status: 'operational' | 'degraded_performance' | 'full_outage';
    metrics: SystemMetric[];
}
export interface SystemHealthData {
    overall_status: 'operational' | 'degraded_performance' | 'full_outage';
    last_checked: string;
    components: SystemHealthComponent[];
}
export interface ProblemLog {
    timestamp: string;
    source: string;
    severity: 'info' | 'warning' | 'error';
    message: string;
}

// From toc-constants.ts
export interface TocItem {
  label: string;
  route: string;
  icon: string;
}

export interface TocSection {
  group: string;
  items: TocItem[];
}

export interface TocData {
  toc_id: string;
  display_name: string;
  theme: string;
  sections: TocSection[];
}
