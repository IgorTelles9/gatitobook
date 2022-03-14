import { Observable } from 'rxjs';
import { NewUser } from './new-user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private signupUrl = `${env.backendHost}:${env.backendPort}/${env.userSignupEndpoint}`
  private existsUrl = `${env.backendHost}:${env.backendPort}/${env.userExistsEndpoint}`
  constructor(private httpClient: HttpClient) { }

  signup(newUser: NewUser): Observable<any>{
    return this.httpClient.post(this.signupUrl, newUser)
  }

  usernameExistsChecker(username: string){
    return this.httpClient.get(`${this.existsUrl}/${username}`)
  }
}
