import type { SetupWiringData } from './types';

export const SETUP_WIRING_DATA: SetupWiringData = {
  "description": "Maps Admin Setup Wizard fields to Neon database columns.",
  "mappings": {
    "spd_url": {
      "target_table": "clnt.company_vendor_link",
      "target_column": "spd_url"
    },
    "plan_id": {
      "target_table": "clnt.benefit_plan",
      "target_column": "vendor_benefit_id"
    },
    "plan_cost": {
      "target_table": "clnt.benefit_tier_cost",
      "target_column": "cost_amount"
    },
    "customer_service_email": {
        "target_table": "clnt.vendor_master",
        "target_column": "default_customer_service_email"
    },
    "account_manager_phone": {
        "target_table": "clnt.company_vendor_link",
        "target_column": "account_manager_phone"
    },
    "renewal_date": {
      "target_table": "clnt.benefit_master",
      "target_column": "renewal_date"
    }
  }
};