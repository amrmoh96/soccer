import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { TeamsService } from 'src/app/shared/services/http/teams.service';
import { AbstractControl } from '@angular/forms';
import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { UserLogin } from '../models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  constructor() { }

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
  };
}
