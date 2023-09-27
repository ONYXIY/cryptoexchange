import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
 private readonly fb = Inject(FormBuilder)

 public readonly form = this.fb.group ({
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
 })
}
