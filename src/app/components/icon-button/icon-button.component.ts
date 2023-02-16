import { Component, Input } from '@angular/core';

@Component({
  selector: 'icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss'],
})
export class IconButtonComponent {
  @Input() label = '';
  @Input() icon = '';
  @Input() type: typeButton = 'full';
  @Input() rounded: boolean = false;
  @Input() color: colors = '';
  colors = COLORS;
}

type typeButton = 'outline' | 'full';

type colors =
  | ''
  | 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warning'
  | 'help'
  | 'danger'
  | 'white';

const COLORS: any = {
  primary: 'p-button-priimary',
  secondary: 'p-button-secondary',
  success: 'p-button-success',
  info: 'p-button-info',
  warning: 'p-button-warning',
  help: 'p-button-help',
  danger: 'p-button-danger',
  white: 'p-button-white',
};
