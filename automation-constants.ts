import type { AutomationRegistryData } from './types';

export const AUTOMATION_REGISTRY_DATA: AutomationRegistryData = {
  "template_lock_enforcer": {
    "automation_id": "template_lock_enforcer",
    "description": "Prevents edits to any page or module when meta.template_mode is true.",
    "trigger": "onPageLoad",
    "conditions": ["meta.template_mode === true"],
    "actions": [{ "type": "disable_edit_controls", "target": "all" }],
    "doctrine_ref": "Barton_Doctrine_49"
  },
  "clone_ready_flagger": {
    "automation_id": "clone_ready_flagger",
    "description": "Sets a flag in Firestore when a client hub has been successfully cloned and variables are replaced.",
    "trigger": "onCommit",
    "conditions": ["meta.template_mode === false", "variables.client_id !== 'TBD'"],
    "actions": [{ "type": "firestore_write", "path": "/client_hubs/{hub_id}/status" }],
    "doctrine_ref": "Barton_Doctrine_50"
  }
};

export const AUTOMATION_CODE: { [key: string]: string } = {
  "template_lock_enforcer": `
// Pseudo-code for template_lock_enforcer
function onPageLoad(pageContext) {
  if (pageContext.meta.template_mode === true) {
    disableAllEditControls();
    showNotification("This is a template. Clone to enable editing.");
  }
}
  `.trim(),
  "clone_ready_flagger": `
// Pseudo-code for clone_ready_flagger
function onCommit(commitData) {
  const meta = readJson('/meta.json');
  const variables = readJson('/variables.json');

  if (meta.template_mode === false && variables.client_id !== 'TBD') {
    firestore.write(\`/client_hubs/\${variables.hub_id}/status\`, {
      ready: true,
      timestamp: new Date()
    });
  }
}
  `.trim()
};
