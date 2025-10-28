import type { ClientSetupWizardBlock } from './types';

export const CLIENT_SETUP_WIZARD_BLOCK_DATA: ClientSetupWizardBlock = {
  "module_id": "client_setup_wizard_block",
  "description": "Guided intake for initializing a cloned client hub.",
  "fields": {
    "company_unique_id": "UUID (auto populated or user entered)",
    "company_name": "TEXT",
    "address": "TEXT",
    "city": "TEXT",
    "state": "TEXT",
    "zip": "TEXT",
    "hr_contact_name": "TEXT",
    "hr_contact_email": "TEXT",
    "hr_contact_phone": "TEXT",
    "cfo_contact_name": "TEXT",
    "cfo_contact_email": "TEXT",
    "cfo_contact_phone": "TEXT",
    "benefits_selected": ["medical","dental","vision","life","std","ltd","other"]
  },
  "automations": ["group_id_resolver","benefit_initializer"],
  "output_targets": ["clnt.company_master","clnt.benefit_master"],
  "validation_rules": ["required_fields","valid_email_format"]
};