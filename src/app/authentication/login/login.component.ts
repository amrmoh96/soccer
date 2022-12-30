import { ProfileService } from './../../shared/services/http/profile.service';
import { UtilityService } from './../../shared/services/utility.service';
import { UserLogin } from './../../shared/models/auth.model';
import { AuthService } from './../../shared/services/http/auth.service';
import { LangService } from './../../shared/services/lang.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: UntypedFormGroup = new UntypedFormGroup({});
  constructor(public langService: LangService, private router: Router,
    private AuthService: AuthService, private fb: UntypedFormBuilder, private messageService: MessageService,
    public UtilityService: UtilityService, private ProfileService: ProfileService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  getCtrl(name: string) {
    return this.loginForm['controls'][name]
  }

  login() {
    if (this.loginForm.valid) {
      const userCred: UserLogin = this.loginForm.getRawValue();
      this.AuthService.login(userCred).subscribe(res => {
        if (res && res.token) {
          localStorage.setItem('token', res.token);
          this.ProfileService.getProfileByUserId(res.id || 0).subscribe(res => {
            if (res) {
              this.router.navigate(['dashboard']);
            } else {
              this.router.navigate(['auth/profile']);
            }
          }, error => {
            this.messageService.add({ severity: 'error', summary: 'Error Message', detail: `${error.error.message}` });
          })
        }
      }, err => {
        this.messageService.add({ severity: 'error', summary: 'Error Message', detail: `${err.error.message}` });
      })
    } else {
      this.loginForm.markAllAsTouched()
    }
  }

}
