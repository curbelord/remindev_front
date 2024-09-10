import { Component, OnInit } from '@angular/core';
import { FormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CalendarModule } from 'primeng/calendar';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormErrorComponent } from "../../shared/components/form-error/form-error.component";
import { isRePasswordTheSame } from '../../shared/validators/re-password';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterLink, CalendarModule, ReactiveFormsModule, FormErrorComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  inputTypes: string[] = ["text", "date", "email", "password"];
  inputAttrs: string[] = ["name", "surname", "birthdate", "nick", "company", "occupation", "email", "password", "rePassword"];

  inputPatterns: RegExp[] = [/^([A-ZÁÉÍÓÚ][a-záéíóú]+)( [A-ZÁÉÍÓÚ][a-záéíóú]+){0,2}$/, /^([A-ZÁÉÍÓÚ][a-záéíóúñ]{1,})( [A-ZÁÉÍÓÚ][a-záéíóúñ]{1,})?$/, /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/, /^[A-Za-z0-9_-]{6,18}$/, /^[A-Za-z0-9]+(?: [A-Za-z0-9]+)*$/, /^[A-Za-z0-9]+(?: [A-Za-z0-9]+)*$/, /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%&\/()=?¿¡^*+,.-])[A-Za-z\d!@#$%&\/()=?¿¡^*+,.-]{8,16}/];

  inputErrors: {required?: string, pattern: string}[] = [{pattern: "The name must begin with a capital letter and can have a maximum of 3 words."}, {pattern: "The surname must begin with a capital letter and can have a maximum of 2 words."}, {pattern: "The date of birth must be in dd/mm/yyyy format."}, {pattern: "The nickname must contain between 6 and 18 digits, which can include letters, numbers, hyphens and underscores."}, {pattern: "The company name can contain letters and numbers. Its maximum length is 254 characters and must not end in a space."}, {pattern: "The occupation may contain letters and numbers. Its length must not exceed 254 characters and must not end in a space."}, {pattern: "The email must be of type name@domain.ext"}, {required: "Password is required", pattern: "The password must have at least: 1 uppercase, 1 lowercase, 1 number and 1 special character ( !@#$%&\/()=?¿¡^*+,.- ). It must be between 8 and 16 digits long."}];

  minBirthdate: Date = new Date();
  maxBirthdate: Date = new Date();

  registerForm: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.getMaxBirthdate();
    this.getMinBirthdate();
    this.initializeForm();
  }

  initializeForm = () => {
    this.registerForm = new FormGroup({
      name: new FormControl('', Validators.pattern(this.inputPatterns[0])),
      surname: new FormControl('', Validators.pattern(this.inputPatterns[1])),
      birthdate: new FormControl('', Validators.pattern(this.inputPatterns[2])),
      nick: new FormControl('', Validators.pattern(this.inputPatterns[3])),
      company: new FormControl('', [Validators.pattern(this.inputPatterns[4])]),
      occupation: new FormControl('', [Validators.pattern(this.inputPatterns[5]), Validators.maxLength(254)]),
      email: new FormControl('', Validators.pattern(this.inputPatterns[6])),
      password: new FormControl('', [Validators.required, Validators.pattern(this.inputPatterns[7])]),
      rePassword: new FormControl('', [Validators.required, Validators.pattern(this.inputPatterns[7])])
    }, {
      validators: isRePasswordTheSame('password', 'rePassword')
    });
  }

  getMaxBirthdate = () => {
    let actualYear = this.maxBirthdate.getFullYear();
    this.maxBirthdate.setFullYear(actualYear - 16);
  }

  getMinBirthdate = () => {
    let actualYear = this.minBirthdate.getFullYear();
    this.minBirthdate.setFullYear(actualYear - 100);
  }

  sendRegisterForm = () => {

  }
}
