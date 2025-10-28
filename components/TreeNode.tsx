
import React, { useState } from 'react';
import type { TreeNode } from '../types';
import { FolderIcon, FileIcon } from './Icons';

interface TreeNodeProps {
  node: TreeNode;
  level?: number;
}

const TreeNodeComponent: React.FC<TreeNodeProps> = ({ node, level = 0 }) => {
  const [isOpen, setIsOpen] = useState(true);

  const isFolder = node.type === 'folder';
  const marginLeft = `${level * 1.5}rem`;

  const toggleOpen = () => {
    if (isFolder) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div>
      <div
        className={`flex items-center space-x-2 py-1.5 px-2 rounded-md hover:bg-gray-700/50 ${isFolder ? 'cursor-pointer' : ''}`}
        style={{ marginLeft }}
        onClick={toggleOpen}
      >
        {isFolder ? (
          <div className="flex items-center space-x-2">
            <FolderIcon className="text-sky-400" />
            <span>{node.name}</span>
          </div>
        ) : (
          <div className="flex items-center space-x-2">
            <FileIcon className="text-gray-400" />
            <span>{node.name}</span>
          </div>
        )}
      </div>
      {isOpen && isFolder && node.children && (
        <div>
          {node.children.map((childNode, index) => (
            <TreeNodeComponent key={index} node={childNode} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TreeNodeComponent;
