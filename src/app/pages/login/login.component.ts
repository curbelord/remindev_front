import { Component } from '@angular/core';
import { FormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  inputTypes: string[] = ["email", "password"];
  errorMessages: string[] = [" is required.", " is invalid.", " The email must be of type name@domain.ext", " The password must have at least: 1 uppercase, 1 lowercase, 1 number and 1 special character ( !@#$%&\/()=?¿¡^*+,.- ). It must be between 8 and 16 digits long."];

  emailPattern: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  passwordPattern: RegExp = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%&\/()=?¿¡^*+,.-])[A-Za-z\d!@#$%&\/()=?¿¡^*+,.-]{8,16}$/;

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
    password: new FormControl('', [Validators.required, Validators.pattern(this.passwordPattern)])
  });

  error: string = "hell0o";
}
