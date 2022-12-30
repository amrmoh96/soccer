import { ProfileService } from './../../shared/services/http/profile.service';
import { UtilityService } from './../../shared/services/utility.service';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Profile } from 'src/app/shared/models/profile.model';
import { LangService } from 'src/app/shared/services/lang.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public profileForm: FormGroup = new FormGroup({});
  public profileTypes: any[] = [
    { name: 'player', code: 1 },
    { name: 'pitch', code: 2 },
  ]
  constructor(public langService: LangService, private router: Router, private fb: FormBuilder, private UtilityService: UtilityService, private ProfileService: ProfileService) { }

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      'profileType': [1, [Validators.nullValidator]],
      'firstName': [null, [Validators.required]],
      'lastName': [null, [Validators.required]],
      'nickName': [null, [Validators.nullValidator]],
      'phoneNumber': [null, [Validators.required]],
      'birthDate': [null, [Validators.nullValidator]],
      'shirtNumber': [null, [Validators.nullValidator]],
      'pitchPosition': [null, [Validators.nullValidator]],
      'address': [null, [Validators.required]],
      // if profileType == 2
      'pitchName': [null, [Validators.nullValidator]],
      'pitchType': [null, [Validators.nullValidator]],
      'pitchCountry': [null, [Validators.nullValidator]],
      'pitchCity': [null, [Validators.nullValidator]],
    })

    this.getCtrl('profileType')?.valueChanges.subscribe(res => {
      this.profileForm.reset({}, { emitEvent: false });
      this.getCtrl('profileType')?.setValue(res, { emitEvent: false })
      this.setFormValidationsBasedOnProfileType(res)
      this.profileForm.updateValueAndValidity();
    })
  }

  getCtrl(name: string): AbstractControl {
    return this.profileForm.controls[name]
  }

  public setFormValidationsBasedOnProfileType(profileType: number) {
    if (profileType == 1) {
      this.getCtrl('nickName')?.setValidators([Validators.required])
      this.getCtrl('birthDate')?.setValidators([Validators.required])
      this.getCtrl('shirtNumber')?.setValidators([Validators.required])
      this.getCtrl('pitchPosition')?.setValidators([Validators.required])
    } else if (profileType == 2) {
      this.getCtrl('pitchName')?.setValidators([Validators.required])
      this.getCtrl('pitchType')?.setValidators([Validators.required])
      this.getCtrl('pitchCountry')?.setValidators([Validators.required])
      this.getCtrl('pitchCity')?.setValidators([Validators.required])
    }
    // this.getCtrl('address')?.setValidators([Validators.required])
    console.log(this.profileForm);

  }

  save() {
    if (this.profileForm.valid) {
      const Profile: Profile = this.profileForm.getRawValue()
      Profile.userId = this.UtilityService.loggedUser?.id;
      Profile.birthDate = new Date(Profile.birthDate || '')
      this.ProfileService.createProfile(Profile).subscribe(res => {
        console.log(res);
        if(res && res.success){
          this.router.navigateByUrl('/dashboard')
        }
      })
    }

  }

  cancel() {
    this.router.navigate(['/'])
  }

}
