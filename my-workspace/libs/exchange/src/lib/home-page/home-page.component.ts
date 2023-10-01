import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from 'auth';
import { HeaderComponent } from '../UI/header/header.component';

@Component({
  selector: 'lib-home-page',
  standalone: true,
  imports: [CommonModule, AuthComponent, HeaderComponent],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {

}
