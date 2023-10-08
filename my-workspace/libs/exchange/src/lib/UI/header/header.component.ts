import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { modalAuthService } from '../../service/modalAuthService';
import { FooDirective } from '../../home-page/directive/foo.directive';
import { BorderDirective } from '../../home-page/directive/border.directive';

@Component({
  selector: 'lib-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [{
    directive: FooDirective,
    inputs:['color'],
  },
]
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
