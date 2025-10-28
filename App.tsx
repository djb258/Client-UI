import React, { useState } from 'react';

import TocSidebar from './components/TocSidebar';
import { TOC_DATA } from './toc-constants';
import SystemManifestVisualizer from './components/SystemManifestVisualizer';
import { SYSTEM_MANIFEST_DATA } from './system-manifest-constants';
import LiveSystemOverviewVisualizer from './components/LiveSystemOverviewVisualizer';
import { LIVE_SYSTEM_OVERVIEW_DATA } from './live-system-overview-constants';
import ProblemLogger from './components/ProblemLogger';
import { PROBLEM_LOG_DATA } from './system-health-constants';
import CompanyTodosDashboard from './components/CompanyTodosDashboard';
import { DASHBOARD_DATA } from './dashboard-constants';
import SystemOverviewVisualizer from './components/SystemOverviewVisualizer';
import { SYSTEM_OVERVIEW_DATA } from './system-overview-constants';
import ImoMatrix from './components/ImoMatrix';
import { IMO_WIRING_DATA } from './imo-constants';
import SpecializationVisualizer from './components/SpecializationVisualizer';
import { PAGE_SPECIALIZATION_DATA, ACCESS_REGISTRY_DATA } from './page-specialization-constants';
import ClientSetupWizardVisualizer from './components/ClientSetupWizardVisualizer';
import { CLIENT_SETUP_WIZARD_BLOCK_DATA } from './module-constants';
import AutomationVisualizer from './components/AutomationVisualizer';
import { AUTOMATION_REGISTRY_DATA, AUTOMATION_CODE } from './automation-constants';
import SchemaVisualizer from './components/SchemaVisualizer';
import { SCHEMA_DATA, SHQ_SCHEMA_DATA } from './schema-constants';
import SetupWiringVisualizer from './components/SetupWiringVisualizer';
import { SETUP_WIRING_DATA } from './wiring-constants';
import VendorFormDataVisualizer from './components/VendorFormDataVisualizer';
import { VENDOR_FORM_DATA_TEMPLATE } from './vendor-form-data-constants';
import AiStudioManifestVisualizer from './components/AiStudioManifestVisualizer';
import { AI_STUDIO_MANIFEST_DATA, AI_STUDIO_SCRIPT_CODE } from './ai-studio-constants';
import BrandingVisualizer from './components/BrandingVisualizer';
import { BRANDING_REGISTRY_DATA } from './branding-constants';


function App() {
  const [activeRoute, setActiveRoute] = useState('/admin');

  const renderPageContent = () => {
    switch (activeRoute) {
      case '/admin':
        return (
          <>
            <h1 className="text-3xl font-bold text-sky-300 mb-6">Admin Home</h1>
            <ClientSetupWizardVisualizer moduleData={CLIENT_SETUP_WIZARD_BLOCK_DATA} />
            <BrandingVisualizer brandingData={BRANDING_REGISTRY_DATA} />
            <AutomationVisualizer automationData={AUTOMATION_REGISTRY_DATA} automationCode={AUTOMATION_CODE} />
          </>
        );
      case '/service':
         return (
          <>
            <h1 className="text-3xl font-bold text-sky-300 mb-6">Service & Data Flow</h1>
             <ImoMatrix imoWiringData={IMO_WIRING_DATA} />
             <SetupWiringVisualizer wiringData={SETUP_WIRING_DATA} />
             <VendorFormDataVisualizer templateData={VENDOR_FORM_DATA_TEMPLATE} />
          </>
        );
      case '/company-dashboard':
        return (
          <>
             <h1 className="text-3xl font-bold text-sky-300 mb-6">Company To-Dos</h1>
             <CompanyTodosDashboard dashboardData={DASHBOARD_DATA} />
          </>
        );
      case '/admin/operations-intelligence':
         return (
           <>
             <h1 className="text-3xl font-bold text-sky-300 mb-6">Barton Operations Intelligence</h1>
             <SystemManifestVisualizer manifestData={SYSTEM_MANIFEST_DATA} />
             <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                <SchemaVisualizer schemaData={SCHEMA_DATA} />
                <SchemaVisualizer schemaData={SHQ_SCHEMA_DATA} />
             </div>
             <LiveSystemOverviewVisualizer systemData={LIVE_SYSTEM_OVERVIEW_DATA} />
             <ProblemLogger logs={PROBLEM_LOG_DATA} />

           </>
        );
      default:
        // A generic view for other sections
        return (
           <>
             <h1 className="text-3xl font-bold text-sky-300 mb-6 capitalize">{activeRoute.split('/').pop()?.replace(/-/g, ' ')}</h1>
             <SystemOverviewVisualizer systemData={SYSTEM_OVERVIEW_DATA} />
             <SpecializationVisualizer pageData={PAGE_SPECIALIZATION_DATA} accessData={ACCESS_REGISTRY_DATA} />
             <AiStudioManifestVisualizer manifestData={AI_STUDIO_MANIFEST_DATA} scriptCode={AI_STUDIO_SCRIPT_CODE} />
           </>
        );
    }
  };


  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans flex">
        <TocSidebar
            tocData={TOC_DATA}
            activeRoute={activeRoute}
            setActiveRoute={setActiveRoute}
        />
        <main className="flex-1 p-8 overflow-y-auto">
           <div className="space-y-8 max-w-7xl mx-auto">
             {renderPageContent()}
           </div>
        </main>
    </div>
  );
}

export default App;