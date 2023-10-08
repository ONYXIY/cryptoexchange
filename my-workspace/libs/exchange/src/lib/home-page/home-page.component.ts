import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from 'auth';
import { HeaderComponent } from '../UI/header/header.component';
import { FooDirective } from './directive/foo.directive';

@Component({
  selector: 'lib-home-page',
  standalone: true,
  imports: [CommonModule, AuthComponent, HeaderComponent],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [FooDirective] //Деректива всегда будет отрабатывать быстрее чем компонент,
  //  но компонент определяет очередность инициализации деректив
})
export class HomePageComponent {

}
