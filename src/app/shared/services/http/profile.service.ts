import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { Profile } from '../../models/profile.model';
import { GeneralResponse } from '../../models/generalResponse.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  public api: string = `${environment.api}/users`;
  constructor(private http: HttpClient) { }
  public createProfile(profile: Profile) {
    return this.http.post<GeneralResponse>(`${this.api}`, profile).pipe()
  }

  public getProfileByUserId(id: number) {
    return this.http.get<Profile>(`${this.api}/${id}`).pipe()
  }

  public getAllUsers(): Observable<Profile[]> {
    return this.http.get<Profile[]>(`${this.api}/`).pipe()
  }

  public getAllUsersProfiles(): Observable<Profile[]> {
    return this.http.get<Profile[]>(`${this.api}/profiles`).pipe()
  }
}
