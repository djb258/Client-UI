import type { BrandingRegistryData } from './types';

export const BRANDING_REGISTRY_DATA: BrandingRegistryData = {
  "branding_defaults": {
    "primary_color": "#004C97",
    "accent_color": "#FDB913",
    "background_color": "#F8FAFC",
    "logo_url": "/assets/logos/default_logo.svg",
    "favicon_url": "/assets/favicon.ico",
    "font_family": "Inter, sans-serif"
  },
  "sync_targets": [
    "/pages/service_advisor/meta.json",
    "/pages/underwriting/meta.json",
    "/pages/renewal/meta.json",
    "/pages/hr/meta.json",
    "/pages/cfo_ceo/meta.json"
  ],
  "sync_policy": {
    "trigger": "onAdminUpdate",
    "propagate_immediately": true,
    "audit_log_enabled": true
  }
};