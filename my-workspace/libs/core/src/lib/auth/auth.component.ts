import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-auth',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent{
  private readonly fb = inject(FormBuilder)
@Input() register!: boolean;
@Output() toggle = new EventEmitter()

  public readonly form = this.fb.group({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  public registerToggle(){
    this.toggle.emit()
  }

}
