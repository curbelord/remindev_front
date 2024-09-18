import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      let errorMessage = "";

      if (error.status == 400){
        errorMessage = "Some data is incorrect";
      }else if(error.status == 401){
        errorMessage = "Unauthorized";
        router.navigate(['/login']);
      }else if(error.status == 409){
        errorMessage = "Some data is already in use";
      }else if(error.status == 500){
        errorMessage = "Server error";
      }else{
        errorMessage = "Something went wrong. Please try again later";
      }

      return throwError(() => new Error(errorMessage));
    })
  );
};
