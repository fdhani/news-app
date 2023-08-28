export interface SearchProps {
  onSearchChange: (value: string) => void;
  searchValue: string;
  onHistoryClick: () => void;
}

export interface FilterItemProps {
  value: string | number;
  text: string;
  checked: boolean;
}

export interface FilterProps {
  data: FilterItemProps[];
  onItemClick: (props: FilterItemProps) => void;
}

export interface ItemClickParams extends FilterItemProps {
  index: number;
}
