
export interface RepoData {
  repo_name: string;
  template_mode: boolean;
  doctrine_source: string;
  altitude: string;
  template_doctrine: {
    file: string;
    references: string[];
  };
  variables: {
    client_id: string;
    hub_id: string;
    bridge_registry_path: string;
    template_version: string;
    created_at: string;
  };
  pages: {
    name: string;
    path: string;
    repo_ref: string;
  }[];
  clone_instructions: {
    file: string;
    steps: string[];
  };
  logs: {
    creation_log: string;
  };
}

export interface TreeNode {
  name: string;
  type: 'file' | 'folder';
  children?: TreeNode[];
}
