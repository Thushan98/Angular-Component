export interface DSSideNavItem {
  id: number | string;
  label: string;
  icon?: string;
  children?: Array<DSSideNavChildItem>;
  isActive?: boolean;
  category?: string;
  isExpanded?: boolean;
  onClick?: (item: DSSideNavItem) => void;
}

export interface DSSideNavChildItem {
  id: number | string;
  label: string;
  children?: Array<DSSideNavChildItem>;
  isExpanded?: boolean;
  isActive?: boolean;
  onClick?: (item: DSSideNavChildItem) => void;
}
