export interface TableActionButton {
  text?: string;
  action: string;
  icon?: string;
  type: TableActionButtonType;
  iconCssClass?: string;
  btnCssClass?: string;
  color?: string;
  tooltip?: string;
  badge?: (arg: any) => number;

  // The following is an optional function that determines whether the action button should be displayed given a condition.
  // In most of cases you won't need to implement this function.
  // You can find a usage example at productos.component.ts
  showCondition?: (arg: any) => boolean;
}

export enum TableActionButtonType {
  BUTTON = 'button',
  ICON = 'icon', // It only shows icon
}

export const EDIT_ACTION_BUTTON: TableActionButton = {
  action: 'edit',
  icon: 'edit',
  type: TableActionButtonType.ICON,
  tooltip: 'Editar',
};

export const DETAIL_ACTION_ICON: TableActionButton = {
  action: 'detail',
  icon: 'visibility',
  tooltip: 'Detalles',
  type: TableActionButtonType.ICON,
};
