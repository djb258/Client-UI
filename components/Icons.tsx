import React from 'react';

const createIcon = (path: React.ReactNode) => (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="w-5 h-5"
    {...props}
  >
    {path}
  </svg>
);

export const FolderIcon = createIcon(
  <path d="M2 6a2 2 0 0 1 2-2h5l2 2h5a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6Z" />
);

export const FileIcon = createIcon(
  <path fillRule="evenodd" d="M15.906 4.344a2.25 2.25 0 0 0-1.266-.656H5.25a2.25 2.25 0 0 0-2.25 2.25v10.125c0 1.242.984 2.25 2.18 2.25h9.54c1.196 0 2.18-.936 2.18-2.125V6.813a2.25 2.25 0 0 0-.688-1.594l-1.875-1.875ZM15 6h-2.25A1.75 1.75 0 0 1 11 .25V4.5h3.75v1.5a.75.75 0 0 1-1.5 0v-.375a.375.375 0 0 0-.375-.375h-2.25a.375.375 0 0 0-.375.375v2.25c0 .207.168.375.375.375h2.25a.375.375 0 0 0 .375-.375V6Z" clipRule="evenodd" />
);

export const DatabaseIcon = createIcon(
  <path d="M10 3a1 1 0 0 1 1 1v12a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1Z M4 7a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Zm0 6a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Z" />
);

export const ChevronDownIcon = createIcon(
  <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
);

export const ChevronRightIcon = createIcon(
  <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 0 1 .02-1.06L11.168 10 7.23 6.29a.75.75 0 1 1 1.04-1.08l4.5 4.25a.75.75 0 0 1 0 1.08l-4.5 4.25a.75.75 0 0 1-1.06-.02Z" clipRule="evenodd" />
);

export const ViewGridIcon = createIcon(
  <path d="M2 5.75A.75.75 0 0 1 2.75 5h14.5a.75.75 0 0 1 .75.75v8.5a.75.75 0 0 1-.75.75H2.75a.75.75 0 0 1-.75-.75v-8.5ZM3.5 14h13V6.5h-13V14Z" />
);

export const ShieldCheckIcon = createIcon(
  <path fillRule="evenodd" d="M10 1.5a.75.75 0 0 1 .75.75v1.437c.433.084.856.216 1.25.397.438.203.84.475 1.18.798l.05.048c.32.308.583.67.798 1.068.21.391.363.82.463 1.272l.02.096c.036.163.064.329.083.497.02.169.03.34.03.51V10c0 .414.021.824.062 1.22l.004.04c.04.397.109.783.203 1.158.093.372.21.733.352 1.078l.034.084c.143.35.31.678.503.982l.01.015c.19.297.406.57.643.812l.02.02c.23.235.48.448.745.632l.022.016a.75.75 0 0 1-.72 1.342l-.022-.016c-.27-.188-.526-.405-.76-.643l-.02-.02c-.24-.246-.46-.523-.653-.824l-.01-.016c-.197-.31-.367-.643-.513-1l-.034-.085c-.144-.35-.264-.716-.36-1.093a13.383 13.383 0 0 1-.205-1.171l-.004-.04C11.521 10.824 11.5 10.414 11.5 10V8.423c0-.17-.01-.34-.03-.51-.018-.168-.047-.333-.083-.497l-.02-.096a7.485 7.485 0 0 0-.463-1.272c-.215-.398-.478-.76-.798-1.068l-.05-.048a6.38 6.38 0 0 0-1.18-.798c-.394-.18-.817-.313-1.25-.397V2.25A.75.75 0 0 1 10 1.5Z" clipRule="evenodd" />
);

export const LockClosedIcon = createIcon(
  <path fillRule="evenodd" d="M10 2a4 4 0 0 0-4 4v2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-1V6a4 4 0 0 0-4-4Zm-2 4V6a2 2 0 1 1 4 0v2H8Z" clipRule="evenodd" />
);

export const LockOpenIcon = createIcon(
  <path fillRule="evenodd" d="M10 2a4 4 0 0 0-4 4v2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-1V6a4 4 0 0 0-4-4Zm2 4V6a2 2 0 1 0-4 0v2h4Z" clipRule="evenodd" />
);

export const LightningBoltIcon = createIcon(
  <path fillRule="evenodd" d="M11.928 2.49a.75.75 0 0 1 .398.92l-5.25 12.5a.75.75 0 0 1-1.352-.56L7.49 8.25H4.75a.75.75 0 0 1-.65-.425a.75.75 0 0 1 .1-1.075l7.5-6.25a.75.75 0 0 1 .828.04Z" clipRule="evenodd" />
);

export const SparklesIcon = createIcon(
  <path fillRule="evenodd" d="M10 2.25a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-1.5 0v-.5a.75.75 0 0 1 .75-.75Zm0 14a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-1.5 0v-.5a.75.75 0 0 1 .75-.75ZM4.06 4.06a.75.75 0 0 1 1.06 0l.354.353a.75.75 0 0 1-1.06 1.06l-.354-.353a.75.75 0 0 1 0-1.06Zm10.828 10.828a.75.75 0 0 1 1.06 0l.354.353a.75.75 0 1 1-1.06 1.06l-.354-.353a.75.75 0 0 1 0-1.06ZM1.5 10a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75Zm15.5 0a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75ZM4.414 14.828a.75.75 0 0 1 0-1.06l.354-.354a.75.75 0 1 1 1.06 1.06l-.354.354a.75.75 0 0 1-1.06 0Zm11.414-11.414a.75.75 0 0 1 0-1.06l.354-.354a.75.75 0 1 1 1.06 1.06l-.354.354a.75.75 0 0 1-1.06 0Z" clipRule="evenodd" />
);

export const PaintBrushIcon = createIcon(
  <path fillRule="evenodd" d="M11.47 2.47a.75.75 0 0 1 1.06 0l4 4a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06L14.44 8 3.5 18.94a.75.75 0 0 1-1.06-1.06L12.88 7.44l-2.47-2.47a.75.75 0 0 1 0-1.06l.75-.75a.75.75 0 0 1 1.06 0l-.53.53.53-.53Z" clipRule="evenodd" />
);

export const WrenchScrewdriverIcon = createIcon(
  <path fillRule="evenodd" d="M18 10a.75.75 0 0 1-.75.75h-2.168l-3.04 3.04a3.75 3.75 0 1 1-1.06-1.06l3.04-3.04V10a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 .75.75Z" clipRule="evenodd" />
);

export const ShareIcon = createIcon(
  <path fillRule="evenodd" d="M10 2a.75.75 0 0 1 .75.75V8a.75.75 0 0 1-1.5 0V2.75A.75.75 0 0 1 10 2ZM5.28 4.22a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 0 1-1.06-1.06l2-2a.75.75 0 0 1 1.06 0Zm10.5 1.06a.75.75 0 0 1 0-1.06l-2-2a.75.75 0 0 1 1.06 1.06l2 2a.75.75 0 0 1-1.06 0Z" clipRule="evenodd" />
);

export const GlobeAltIcon = createIcon(
  <path fillRule="evenodd" d="M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16ZM2.75 10a7.25 7.25 0 0 1 12.33-5.25.75.75 0 0 0-1.06-1.06A8.75 8.75 0 1 0 10 18.75a8.7 8.7 0 0 0 8.44-6.38.75.75 0 1 0-1.47-.28A7.25 7.25 0 0 1 2.75 10Z" clipRule="evenodd" />
);

export const DocumentTextIcon = createIcon(
  <path fillRule="evenodd" d="M4.75 2.75A2 2 0 0 0 2.75 4.75v10.5c0 1.1.9 2 2 2h10.5a2 2 0 0 0 2-2V4.75a2 2 0 0 0-2-2H4.75Zm.5 4.5a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1-.75-.75Zm0 3.5a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
);

export const ClipboardDocumentCheckIcon = createIcon(
  <path fillRule="evenodd" d="M10.5 2.25a2.25 2.25 0 0 0-2.25 2.25v.5a.75.75 0 0 0 1.5 0v-.5a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 0-.75.75v.5a.75.75 0 0 0 1.5 0v-.5a.75.75 0 0 1 .75-.75h.5a2.25 2.25 0 0 0 2.25-2.25c0-.82-.468-1.543-1.162-1.928a.75.75 0 0 0-.976 1.004A.75.75 0 0 1 14 5.25v.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1-.75-.75v-.5a.75.75 0 0 0-.75-.75h-2.5a.75.75 0 0 0-.75.75v.5c0 .414.336.75.75.75h.5a.75.75 0 0 0 0-1.5h-.5a.75.75 0 0 1-.75-.75v-2.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 .75.75v.5a.75.75 0 0 0 1.5 0v-.5A2.25 2.25 0 0 0 10.5 2.25Z" clipRule="evenodd" />
);

export const ChartPieIcon = createIcon(
  <path fillRule="evenodd" d="M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16ZM9 12a1 1 0 0 1 1-1h4a1 1 0 0 1 0 2h-3v3a1 1 0 1 1-2 0v-4Z" clipRule="evenodd" />
);

export const ClockIcon = createIcon(
  <path fillRule="evenodd" d="M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16ZM9.25 7.75a.75.75 0 0 1 .75.75v2.69l1.82-1.1a.75.75 0 1 1 .76 1.25l-2.5 1.5a.75.75 0 0 1-.76 0l-2.5-1.5a.75.75 0 1 1 .76-1.25l1.82 1.1V8.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
);

export const PaperClipIcon = createIcon(
  <path fillRule="evenodd" d="M2.5 4A2.5 2.5 0 0 1 5 1.5h7.5a.75.75 0 0 1 0 1.5H5A1 1 0 0 0 4 4v10a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V8.5a.75.75 0 0 1 1.5 0v5.5A2.5 2.5 0 0 1 13 16.5H5A2.5 2.5 0 0 1 2.5 14V4Z" clipRule="evenodd" />
);

export const QuestionMarkCircleIcon = createIcon(
  <path fillRule="evenodd" d="M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16ZM9.25 6.75a.75.75 0 0 1 1.5 0V7a.75.75 0 0 1-1.5 0V6.75Zm.908 4.025a.75.75 0 1 1-1.326.791 2.5 2.5 0 0 0-2.332 2.332.75.75 0 1 1-1.5 0 4 4 0 0 1 4-4 .75.75 0 0 1 .158.825Z" clipRule="evenodd" />
);

export const EnvelopeIcon = createIcon(
  <path d="M2.25 5.25a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 .75.75v.231c0 .487-.19 1.14-.523 1.748l-6.75 10.125a.75.75 0 0 1-1.208 0L3.023 7.23C2.44 6.39 2.25 5.737 2.25 5.25v-.23Z" />
);

export const CpuChipIcon = createIcon(
  <path fillRule="evenodd" d="M3 4.75A2.75 2.75 0 0 1 5.75 2h8.5A2.75 2.75 0 0 1 17 4.75v10.5A2.75 2.75 0 0 1 14.25 18h-8.5A2.75 2.75 0 0 1 3 15.25V4.75Zm2.75-.25a1.25 1.25 0 0 0-1.25 1.25v10.5c0 .69.56 1.25 1.25 1.25h8.5c.69 0 1.25-.56 1.25-1.25V4.75c0-.69-.56-1.25-1.25-1.25h-8.5Z" clipRule="evenodd" />
);

export const ServerIcon = createIcon(
  <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2h7A2.5 2.5 0 0 1 16 4.5v11a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 4 15.5v-11ZM6.5 3.5a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1h-7Z" />
);

export const CloudArrowUpIcon = createIcon(
  <path fillRule="evenodd" d="M8.455 3.455a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1-1.06 1.06L10.5 6.56v8.69a.75.75 0 0 1-1.5 0V6.56l-2.22 2.22a.75.75 0 0 1-1.06-1.06l4.25-4.25Z" clipRule="evenodd" />
);

export const HomeIcon = createIcon(
  <path d="M8.25 2.25a.75.75 0 0 1 .75.75V5.256a.75.75 0 0 1-.22.53l-2.25 2.25a.75.75 0 0 1-1.06 0l-2.25-2.25a.75.75 0 0 1-.22-.53V3a.75.75 0 0 1 .75-.75h5.25Z M10.5 6.252a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.002a.75.75 0 0 1-.75.75h-.01a.75.75 0 0 1-.75-.75v-.002Z M12.25 8a.75.75 0 0 0-.75.75v5.25a.75.75 0 0 0 1.5 0v-5.25a.75.75 0 0 0-.75-.75Z" />
);

export const BriefcaseIcon = createIcon(
  <path fillRule="evenodd" d="M5.25 3.75A1.75 1.75 0 0 1 7 2h6a1.75 1.75 0 0 1 1.75 1.75v1.25a.75.75 0 0 1-1.5 0V3.75a.25.25 0 0 0-.25-.25H7a.25.25 0 0 0-.25.25v12.5a.25.25 0 0 0 .25.25h6a.25.25 0 0 0 .25-.25v-1.25a.75.75 0 0 1 1.5 0v1.25A1.75 1.75 0 0 1 13 18H7a1.75 1.75 0 0 1-1.75-1.75V3.75Z" clipRule="evenodd" />
);

export const EyeIcon = createIcon(
  <path d="M10 5.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Z M10 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
);
