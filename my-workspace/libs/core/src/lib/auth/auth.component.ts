import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { modalAuthService } from '@my-workspace/homepage';
import { Subscription } from 'rxjs';

@Component({
  selector: 'lib-auth',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent {
  private readonly fb = inject(FormBuilder)
  private readonly registerModal = inject(modalAuthService)

  public register$ = this.registerModal.registerOn$;

  public readonly form = this.fb.group({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  closeModal() {
    this.registerModal.toggle();
  }

}



