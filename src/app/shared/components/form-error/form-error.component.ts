import { Component, input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-error',
  standalone: true,
  imports: [],
  templateUrl: './form-error.component.html',
  styleUrl: './form-error.component.css'
})
export class FormErrorComponent {
  form = input.required<FormGroup>();

  requiredError = input<string>();
  patternError = input.required<string>();

  inputName = input.required<string>();
}
