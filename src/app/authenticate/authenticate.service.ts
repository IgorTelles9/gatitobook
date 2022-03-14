import { UserService } from './user/user.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthenticateService {
  private loginUrl = `${env.backendHost}:${env.backendPort}/${env.userLoginEndpoint}`;

  constructor(private httpClient: HttpClient, private userService: UserService) {}

  auth(username: string, password: string): Observable<HttpResponse<any>> {
    return this.httpClient.post(
      this.loginUrl,
      {
        userName: username,
        password: password,
      },
      { observe: 'response' }
    ).pipe(
      tap((res)=>{
        const authToken = res.headers.get('x-access-token') ?? '';
        this.userService.saveToken(authToken)
      })
    )
  }
}
