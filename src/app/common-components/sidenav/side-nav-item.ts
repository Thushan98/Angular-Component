export interface SideNavItem {
  id: string | number;
  label: string;
  icon?: string;
  children?: Array<SideNavItem>;
  isActive?: boolean;
  category?: string;
  isExpanded?: boolean;
  onClick?: (item: SideNavItem) => void;
}
