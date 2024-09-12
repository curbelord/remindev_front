import { Component, inject, OnInit } from '@angular/core';
import { FormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormErrorComponent } from "../../shared/components/form-error/form-error.component";
import { isRePasswordTheSame } from '../../shared/validators/re-password';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterLink, CalendarModule, CheckboxModule, ReactiveFormsModule, FormErrorComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  providers: [DatePipe]
})
export class RegisterComponent implements OnInit {
  inputTypes: string[] = ["text", "date", "email", "password"];
  inputAttrs: string[] = ["name", "surname", "birthdate", "nick", "company", "occupation", "email", "password", "rePassword"];

  inputPatterns: RegExp[] = [/^([A-ZÁÉÍÓÚ][a-záéíóú]+)( [A-ZÁÉÍÓÚ][a-záéíóú]+){0,2}$/, /^([A-ZÁÉÍÓÚ][a-záéíóúñ]{1,})( [A-ZÁÉÍÓÚ][a-záéíóúñ]{1,})?$/, /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/, /^[A-Za-z0-9_-]{6,18}$/, /^[A-Za-z0-9]+(?: [A-Za-z0-9]+)*$/, /^[A-Za-z0-9]+(?: [A-Za-z0-9]+)*$/, /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%&\/()=?¿¡^*+,.-])[A-Za-z\d!@#$%&\/()=?¿¡^*+,.-]{8,16}/];

  inputErrors: {required?: string, pattern: string}[] = [{required: "The name is required", pattern: "The name must begin with a capital letter and can have a maximum of 3 words."}, {required: "The surname is required", pattern: "The surname must begin with a capital letter and can have a maximum of 2 words."}, {required: "The birthdate is required", pattern: "The birthdate must be in dd/mm/yyyy format."}, {required: "The nickname is required", pattern: "The nickname must contain between 6 and 18 digits, which can include letters, numbers, hyphens and underscores."}, {pattern: "The company name can contain letters and numbers. Its maximum length is 254 characters and must not end in a space."}, {required: "The occupation is required", pattern: "The occupation may contain letters and numbers. Its length must not exceed 254 characters and must not end in a space."}, {required: "The email is required", pattern: "The email must be of type name@domain.ext"}, {required: "Password is required", pattern: "The password must have at least: 1 uppercase, 1 lowercase, 1 number and 1 special character ( !@#$%&\/()=?¿¡^*+,.- ). It must be between 8 and 16 digits long."}];

  minBirthdate: Date = new Date();
  maxBirthdate: Date = new Date();

  registerForm: FormGroup = new FormGroup({});

  private _datePipe = inject(DatePipe);

  ngOnInit(): void {
    this.getMaxBirthdate();
    this.getMinBirthdate();
    this.initializeForm();
  }

  initializeForm = (): void => {
    this.registerForm = new FormGroup({
      name: new FormControl('', Validators.pattern(this.inputPatterns[0])),
      surname: new FormControl('', Validators.pattern(this.inputPatterns[1])),
      birthdate: new FormControl(''),
      nick: new FormControl('', Validators.pattern(this.inputPatterns[3])),
      company: new FormControl('', [Validators.pattern(this.inputPatterns[4])]),
      occupation: new FormControl('', [Validators.pattern(this.inputPatterns[5]), Validators.maxLength(254)]),
      email: new FormControl('', Validators.pattern(this.inputPatterns[6])),
      password: new FormControl('', [Validators.required, Validators.pattern(this.inputPatterns[7])]),
      rePassword: new FormControl('', [Validators.required, Validators.pattern(this.inputPatterns[7])]),
      fullRegistration: new FormControl(false)
    }, {
      validators: isRePasswordTheSame('password', 'rePassword')
    });
  }

  getMaxBirthdate = (): void => {
    let actualYear = this.maxBirthdate.getFullYear();
    this.maxBirthdate.setFullYear(actualYear - 16);
  }

  getMinBirthdate = (): void => {
    let actualYear = this.minBirthdate.getFullYear();
    this.minBirthdate.setFullYear(actualYear - 100);
  }

  addOrRemoveFullValidations = (): void => {
    let isToAdd: boolean = this.registerForm.get('fullRegistration')?.value;
    isToAdd ? this.addFullValidations() : this.removeFullValidations();
  }

  addFullValidations = (): void => {
    this.inputAttrs.forEach(attr => {
      if (attr != "company"){
        let control = this.registerForm.get(attr);
        if (control) {
          control.addValidators([Validators.required]);
          control.updateValueAndValidity();
        }
      }
    })
  }

  removeFullValidations = (): void => {
    this.inputAttrs.forEach(attr => {
      if (attr != "company" && attr != "password" && attr != "rePassword"){
        let control = this.registerForm.get(attr);
        if (control) {
          control.removeValidators([Validators.required]);
          control.updateValueAndValidity();
        }
      }
    })
  }

  sendRegisterForm = (event: Event): void => {
    if (this.registerForm.invalid){
      event.preventDefault();
    }
    console.log(this.registerForm.invalid);

    let birthdate: Date = this.registerForm.get('birthdate')?.value;
    console.log(this._datePipe.transform(birthdate, 'dd/MM/yyyy'));
  }
}
