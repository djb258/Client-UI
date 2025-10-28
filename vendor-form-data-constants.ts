
import type { VendorFormDataTemplate } from './types';

export const VENDOR_FORM_DATA_TEMPLATE: VendorFormDataTemplate = {
  "schema_version": "1.0",
  "description": "Standard vendor paperwork data structure for benefit administration and ACH setup.",
  "required_fields": [
    "billing_contact_name",
    "billing_contact_email",
    "billing_address",
    "bank_name",
    "account_last4",
    "routing_number",
    "eligibility_file_method"
  ],
  "fields": {
    "billing_contact_name": {
      "type": "TEXT",
      "description": "Primary billing or remittance contact name for the employer group."
    },
    "billing_contact_email": {
      "type": "TEXT",
      "format": "email",
      "description": "Email for billing or remittance contact."
    },
    "billing_address": {
      "type": "TEXT",
      "description": "Physical address used for billing or correspondence."
    },
    "bank_name": {
      "type": "TEXT",
      "description": "Name of the financial institution used for ACH transactions."
    },
    "account_last4": {
      "type": "TEXT",
      "pattern": "^[0-9]{4}$",
      "description": "Last four digits of the ACH account number."
    },
    "routing_number": {
      "type": "TEXT",
      "pattern": "^[0-9]{9}$",
      "description": "Nine-digit ABA routing number for ACH."
    },
    "eligibility_file_method": {
      "type": "TEXT",
      "enum": ["SFTP", "Email", "Portal Upload", "API"],
      "description": "Method used to send eligibility files to the vendor."
    },
    "sftp_host": {
      "type": "TEXT",
      "description": "Host or domain for SFTP connection (if applicable)."
    },
    "sftp_username": {
      "type": "TEXT",
      "description": "Username for SFTP credentials (if applicable)."
    },
    "sftp_key_path": {
      "type": "TEXT",
      "description": "Path or storage location of the SSH key (optional)."
    },
    "file_frequency": {
      "type": "TEXT",
      "enum": ["daily", "weekly", "biweekly", "monthly"],
      "description": "Frequency at which eligibility files are transmitted."
    },
    "plan_id_reference": {
      "type": "TEXT",
      "description": "Optional internal or vendor-assigned plan identifier for cross-referencing."
    },
    "notes": {
      "type": "TEXT",
      "description": "Freeform notes for custom vendor instructions or edge cases."
    }
  }
};
