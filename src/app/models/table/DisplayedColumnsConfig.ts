export interface DisplayedColumnsConfig {
  // Used as a column key.
  key: string;

  // Title to display in the column.
  title: string;

  // function that must return the value to print in the table column.
  getValue?: (arg: any) => string | number;

  type?: rowInfo;
}

type rowInfo = 'text' | 'image';
