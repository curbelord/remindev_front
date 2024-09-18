import { Component, input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register-validation',
  standalone: true,
  imports: [],
  templateUrl: './register-validation.component.html',
  styleUrl: './register-validation.component.css'
})
export class RegisterValidationComponent {
  registerForm = input.required<FormGroup>();
  controlName = input.required<string>();

  isValid = input.required<boolean>();
  hasValidationChanges = input.required<boolean>();
}
