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
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  public registrationForm: UntypedFormGroup = new UntypedFormGroup({});
  constructor(public langService: LangService, private router: Router,
    private AuthService: AuthService, private fb: UntypedFormBuilder, private messageService: MessageService,
    public UtilityService: UtilityService, private ProfileService: ProfileService) { }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      username: ['', [Validators.required, Validators.maxLength(16)]],
      password: ['', [Validators.required]],
      email: ['', [Validators.required]]
    })
  }

  getCtrl(name: string) {
    return this.registrationForm['controls'][name]
  }

  register() {
    if (this.registrationForm.valid) {
      const userCred: UserLogin = this.registrationForm.getRawValue();
      this.AuthService.register(userCred).subscribe((res:any) => {
        if (res && res.success) {
          this.router.navigate(['dashboard']);
          // localStorage.setItem('token', res.token);
          // this.ProfileService.getProfileByUserId(res.id || 0).subscribe(res => {
          //   if (res) {
          //   } else {
          //     this.router.navigate(['auth/profile']);
          //   }
          // }, error => {
          //   this.messageService.add({ severity: 'error', summary: 'Error Message', detail: `${error.error.message}` });
          // })
        }
      }, err => {
        this.messageService.add({ severity: 'error', summary: 'Error Message', detail: `${err.error.message}` });
      })
    } else {
      this.registrationForm.markAllAsTouched()
    }
  }

}
