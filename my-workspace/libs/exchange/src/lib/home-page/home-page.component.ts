import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from 'auth';

@Component({
  selector: 'lib-home-page',
  standalone: true,
  imports: [CommonModule, AuthComponent],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {
  public register = false;

  public toggle(){
    this.register = !this.register
    console.log(this.register)
  }

}
