import type { ImoWiringData, Bridge } from './types';

export const IMO_WIRING_DATA: ImoWiringData = {
  "altitude": "30000_ft",
  "repo_source": "imo_creator",
  "pages": [
    {
      "page": "admin",
      "inputs": ["Firebase.config", "Neon.company_master"],
      "middle": ["Firebase.hub_validator"],
      "outputs": ["Neon.audit_log"],
      "bridge_refs": ["BRG-001", "BRG-002"]
    },
    {
      "page": "cfo_ceo",
      "inputs": ["Neon.finance_tables"],
      "middle": ["AIStudio.analytics"],
      "outputs": ["AIStudio.dashboard", "PDF.report"],
      "bridge_refs": ["BRG-003"]
    },
    {
      "page": "hr",
      "inputs": ["Jotform.intake", "Smartsheet.billing"],
      "middle": ["Firebase.hr_hub"],
      "outputs": ["Neon.employee_records"],
      "bridge_refs": ["BRG-004", "BRG-005"]
    },
    {
      "page": "renewal",
      "inputs": ["Firebase.validated_data"],
      "middle": ["AIStudio.analytics"],
      "outputs": ["Neon.renewal_summary"],
      "bridge_refs": ["BRG-006"]
    },
    {
      "page": "underwriting",
      "inputs": ["Firebase.census_data"],
      "middle": ["AIStudio.modeling_engine"],
      "outputs": ["Neon.quote_tables"],
      "bridge_refs": ["BRG-007"]
    },
    {
      "page": "advisor",
      "inputs": ["Firebase.client_metrics"],
      "middle": ["AIStudio.read_only_view"],
      "outputs": ["External.portal"],
      "bridge_refs": ["BRG-008"]
    },
    {
      "page": "service",
      "inputs": ["Jotform.service_form"],
      "middle": ["Firebase.ticket_router"],
      "outputs": ["Vendor.email", "Neon.service_log"],
      "bridge_refs": ["BRG-009"]
    }
  ]
};

export const BRIDGE_REGISTRY_DATA: Bridge[] = [
  {"bridge_id":"BRG-001","source":"Firebase.config","target":"Firebase.hub_validator"},
  {"bridge_id":"BRG-002","source":"Firebase.hub_validator","target":"Neon.audit_log"},
  {"bridge_id":"BRG-003","source":"Neon.finance_tables","target":"AIStudio.dashboard"},
  {"bridge_id":"BRG-004","source":"Jotform.intake","target":"Firebase.hr_hub"},
  {"bridge_id":"BRG-005","source":"Smartsheet.billing","target":"Firebase.hr_hub"},
  {"bridge_id":"BRG-006","source":"Firebase.validated_data","target":"Neon.renewal_summary"},
  {"bridge_id":"BRG-007","source":"Firebase.census_data","target":"Neon.quote_tables"},
  {"bridge_id":"BRG-008","source":"Firebase.client_metrics","target":"External.portal"},
  {"bridge_id":"BRG-009","source":"Jotform.service_form","target":"Vendor.email"}
];
