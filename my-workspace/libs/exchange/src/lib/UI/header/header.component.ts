import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { modalAuthService } from '../../service/modalAuthService';

@Component({
  selector: 'lib-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {

  public readonly menu = [{
    name: 'Home',
    routerLink: '',
    class: 'nav-link'
  },
  {
    name: 'Wallet',
    routerLink: 'wallet',
    class: 'nav-link'
  },{
    name: 'Trading',
    routerLink: 'trading',
    class: 'nav-link'
  },{
    name: 'About us',
    routerLink: 'about',
    class: 'nav-link'
  }]

  constructor(private toggleAuth: modalAuthService) {}

  onSignUpClick() {
    this.toggleAuth.toggle();
  }
  
}
