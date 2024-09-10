import { AbstractControl, ValidationErrors, ValidatorFn, FormGroup } from '@angular/forms';

export function isRePasswordTheSame(passwordControl: string, rePasswordControl: string): ValidatorFn {
  return (formGroup: AbstractControl): ValidationErrors | null => {
    const formGroupTyped = formGroup as FormGroup;
    const password = formGroupTyped.get(passwordControl);
    const rePassword = formGroupTyped.get(rePasswordControl);

    if (!password || !rePassword) {
      return null;
    }

    if (password.value !== rePassword.value) {
      rePassword.setErrors({ passwordMismatch: true });
    } else {
      rePassword.setErrors(null);
    }

    return null;
  };
}
