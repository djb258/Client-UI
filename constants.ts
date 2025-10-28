
import type { RepoData } from './types';

export const REPO_DATA: RepoData = {
  "repo_name": "client_setup_template",
  "template_mode": true,
  "doctrine_source": "imo_creator",
  "altitude": "40000_ft",
  "template_doctrine": {
    "file": "template_doctrine.md",
    "references": [
      "Barton_Doctrine_47",
      "Barton_Doctrine_48",
      "Barton_Doctrine_49",
      "Barton_Doctrine_50"
    ]
  },
  "variables": {
    "client_id": "TBD",
    "hub_id": "TBD",
    "bridge_registry_path": "/bridges/registry.json",
    "template_version": "1.0.0",
    "created_at": "AUTO_TIMESTAMP"
  },
  "pages": [
    {"name": "admin", "path": "pages/admin/", "repo_ref": "/imo_creator/pages/admin/template.json"},
    {"name": "cfo_ceo", "path": "pages/cfo_ceo/", "repo_ref": "/imo_creator/pages/cfo_ceo/template.json"},
    {"name": "hr", "path": "pages/hr/", "repo_ref": "/imo_creator/pages/hr/template.json"},
    {"name": "renewal", "path": "pages/renewal/", "repo_ref": "/imo_creator/pages/renewal/template.json"},
    {"name": "underwriting", "path": "pages/underwriting/", "repo_ref": "/imo_creator/pages/underwriting/template.json"},
    {"name": "advisor", "path": "pages/advisor/", "repo_ref": "/imo_creator/pages/advisor/template.json"},
    {"name": "service", "path": "pages/service/", "repo_ref": "/imo_creator/pages/service/template.json"}
  ],
  "clone_instructions": {
    "file": "clone_instructions.md",
    "steps": [
      "1. Copy this folder to /clients/{client_id}_hub/",
      "2. Replace variables in /variables.json",
      "3. Register bridges in {bridge_registry_path}",
      "4. Switch meta.template_mode from true → false",
      "5. Commit and deploy new client hub"
    ]
  },
  "logs": { "creation_log": "auto-generated during AI Studio execution" }
};
