import { AbstractControl } from '@angular/forms';
import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { UserLogin } from '../models/auth.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  constructor(private router: Router) { }

  public get Token(): string | null {
    return localStorage.getItem('token')
  }

  public get loggedUser(): UserLogin | null {
    if (this.Token)
      return jwt_decode(this.Token)
    else
      return null
  }

  public isFieldRequired = (abstractControl: AbstractControl): boolean => {
    if (abstractControl.validator) {
      const validator = abstractControl.validator({} as AbstractControl);
      if (validator && validator.required) {
        return true;
      }
    }
    return false;
  }

  public signOut() {
    localStorage.removeItem('token');
    this.router.navigate(['/auth/login']).then((value) => {
      console.log(value);
      console.log(window.location.href);
      window.location.reload();
    });
  }
}
