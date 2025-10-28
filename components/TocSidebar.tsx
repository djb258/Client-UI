import React from 'react';
import type { TocData } from '../types';
import {
    HomeIcon,
    BriefcaseIcon,
    ShieldCheckIcon,
    ClipboardDocumentCheckIcon,
    WrenchScrewdriverIcon,
    EyeIcon,
    ChevronRightIcon
} from './Icons';

interface TocSidebarProps {
  tocData: TocData;
  activeRoute: string;
  setActiveRoute: (route: string) => void;
}

const iconMap: { [key: string]: React.FC<React.SVGProps<SVGSVGElement>> } = {
  home: HomeIcon,
  briefcase: BriefcaseIcon,
  shield: ShieldCheckIcon,
  clipboard: ClipboardDocumentCheckIcon,
  wrench: WrenchScrewdriverIcon,
  'clipboard-check': ClipboardDocumentCheckIcon,
  eye: EyeIcon,
};


const TocSidebar: React.FC<TocSidebarProps> = ({ tocData, activeRoute, setActiveRoute }) => {
  return (
    <aside className="w-64 bg-gray-800/80 border-r border-gray-700/50 flex-shrink-0 p-4">
        <div className="mb-8">
            <h1 className="text-xl font-bold text-sky-300">Client Setup Cockpit</h1>
            <p className="text-xs text-gray-500">Barton Operations</p>
        </div>
        <nav className="space-y-6">
            {tocData.sections.map(section => (
                <div key={section.group}>
                    <h2 className="text-xs font-bold uppercase text-gray-500 mb-2 px-2">{section.group}</h2>
                    <ul className="space-y-1">
                        {section.items.map(item => {
                            const Icon = iconMap[item.icon] || ChevronRightIcon;
                            const isActive = activeRoute === item.route;
                            return (
                                <li key={item.route}>
                                    <a
                                        href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setActiveRoute(item.route);
                                        }}
                                        className={`flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                                            isActive 
                                            ? 'bg-sky-500/20 text-sky-200' 
                                            : 'text-gray-400 hover:bg-gray-700/50 hover:text-white'
                                        }`}
                                    >
                                        <Icon className={`w-5 h-5 ${isActive ? 'text-sky-300' : 'text-gray-500'}`} />
                                        <span>{item.label}</span>
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            ))}
        </nav>
    </aside>
  );
};

export default TocSidebar;
