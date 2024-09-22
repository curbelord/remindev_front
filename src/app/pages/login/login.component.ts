import { Component, inject } from '@angular/core';
import { FormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormErrorComponent } from '../../shared/components/form-error/form-error.component';
import { PartialUser } from '../../core/models/partial-user';
import { AuthService } from '../../core/services/auth/auth.service';
import { ToastifyService } from '../../core/services/ui/toastify.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink, ReactiveFormsModule, FormErrorComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private _authService = inject(AuthService);
  private _toastify = inject(ToastifyService);

  inputTypes: string[] = ["nick", "password"];
  errorMessages: {required: string, pattern: string}[] = [{required: "The nickname is required", pattern: "The nickname must contain between 6 and 18 digits, which can include letters, numbers, hyphens and underscores."}, {required: "Password is required", pattern: "The password must have at least: 1 uppercase, 1 lowercase, 1 number and 1 special character ( !@#$%&\/()=?¿¡^*+,.- ). It must be between 8 and 16 digits long."}];

  nickPattern: RegExp = /^[A-Za-z0-9_-]{6,18}$/;
  passwordPattern: RegExp = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%&\/()=?¿¡^*+,.-])[A-Za-z\d!@#$%&\/()=?¿¡^*+,.-]{8,16}$/;

  loginForm: FormGroup = new FormGroup({
    nick: new FormControl('', [Validators.required, Validators.pattern(this.nickPattern)]),
    password: new FormControl('', [Validators.required, Validators.pattern(this.passwordPattern)])
  });

  sendLoginForm = (): void => {
    if (this.loginForm.invalid){
      return;
    }

    let formValues: PartialUser = this.loginForm.value;

    this._authService.login(formValues).subscribe({
      next: (data) => {
        this._authService.userId = data.userData.id;
        this._authService.userNick = data.userData.nick;
        this._toastify.showToast('Login successfully', 3000, "toast toast_success");
      },
      error: (error) => {
        this._toastify.showToast(error, 3000, "toast toast_error");
      }
    });
  }
}
