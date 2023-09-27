import { FormBuilder } from '@angular/forms';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-auth',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent {
  private readonly fb = inject(FormBuilder)

  public readonly form = this.fb.group({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
}
