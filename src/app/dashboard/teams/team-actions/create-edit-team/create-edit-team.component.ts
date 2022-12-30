import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Team } from 'src/app/shared/models/Team.model';
import { ProfileService } from 'src/app/shared/services/http/profile.service';
import { TeamsService } from 'src/app/shared/services/http/teams.service';
import { LangService } from 'src/app/shared/services/lang.service';
import { UtilityService } from 'src/app/shared/services/utility.service';
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';
import { Profile } from 'src/app/shared/models/profile.model';

@Component({
  selector: 'soc-create-edit-team',
  templateUrl: './create-edit-team.component.html',
  styleUrls: ['./create-edit-team.component.scss']
})
export class CreateEditTeamComponent implements OnInit {

  public formMode: 'create' | 'update' = 'create';
  public teamForm: FormGroup = new FormGroup({});
  public players?: Observable<any>;
  constructor(public langService: LangService, private router: Router, private fb: FormBuilder, private messageService: MessageService,
    public UtilityService: UtilityService, private activeRoute: ActivatedRoute, private teamService: TeamsService, private profileService: ProfileService) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(P => {
      if (P && P.id) {
        this.formMode = 'update';
        this.teamService.getTeamById(Number(P.id)).subscribe(res => {
          console.log(res);
          this.generateTeamForm(res)
        })
      } else {
        this.generateTeamForm()
      }
    })

    this.players = this.profileService.getAllUsers().pipe(
      map((res: any) => {
        return res.map((U:any) => ({name:U.username, code:U.id}))
      })
    )
  }


  generateTeamForm(data?: any) {
    const loggedInUserID = this.UtilityService.loggedUser?.id;
    this.teamForm = this.fb.group({
      name: [data ? data['name'] : '', [Validators.required, Validators.maxLength(16), Validators.minLength(3)]],
      brief: [data ? data['brief'] : ''],
      members: [data ? data['members'] : [loggedInUserID], [Validators.required]]
    })
  }


  getCtrl(name: string) {
    return this.teamForm['controls'][name]
  }

  submit() {
    let team: Team = this.teamForm.getRawValue();
    console.log(team);
    this.teamService.createTeam(team).subscribe(res => {
      console.log(res);
      this.router.navigateByUrl('dashboard/teams/myteam')
    })
  }

}
