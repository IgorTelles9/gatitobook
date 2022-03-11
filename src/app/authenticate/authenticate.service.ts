import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  private loginUrl = `${env.backendHost}:${env.backendPort}/${env.userEndpoint}/login`

  constructor( private httpClient: HttpClient) {
 
   }

   auth(username: string, password: string): Observable<any>{
      return this.httpClient.post(this.loginUrl,
        {
          userName: username,
          password: password,
        })
  }
}
