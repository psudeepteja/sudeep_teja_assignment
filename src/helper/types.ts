export interface CardProps {
    title: string;
    dimension: {
      width: number;
      height: number;
    };
  }
  
  export interface CardListProps {
    data: CardProps[];
  }
  
  export interface CheckboxProps {
    label: string;
    checked: boolean;
    onChange: () => void;
  }
  
  export interface MainContentProps {
    data: CardProps[];
  }
  
  export interface SideBarProps {
    data: CardProps[];
    selected: number[];
    onSelect: (index: number) => void;
    onSelectAll: () => void;
  }
  
  export interface AppProps {}
  