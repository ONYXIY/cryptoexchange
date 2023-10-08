import { BorderDirective } from './../../libs/exchange/src/lib/home-page/directive/border.directive';
import { HeaderComponent } from './../../libs/exchange/src/lib/UI/header/header.component';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooDirective } from 'libs/exchange/src/lib/home-page/directive/foo.directive';

@Component({
  standalone: true,
  imports: [RouterModule, HeaderComponent, FooDirective, BorderDirective],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  hostDirectives: [FooDirective]
  
})
export class AppComponent {
  title = 'my-workspace';
}
