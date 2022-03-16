import { TokenService } from './../../authenticate/token.service';
import { environment as env } from './../../../environments/environment';
import {
  catchError,
  map,
  Observable,
  ObservableNotification,
  of,
  throwError,
} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pet, Pets } from './pet';

const NOT_MODIFIED = '304';

@Injectable({
  providedIn: 'root',
})
export class PetService {
  private url = `${env.backendHost}:${env.backendPort}`;

  constructor(
    private httpClient: HttpClient,
    private tokenService: TokenService
  ) {}

  userFeed(username: string): Observable<Pets> {
    return this.httpClient.get<Pets>(
      `${this.url}/${username}/${env.photosEndpoint}`
    );
  }

  searchById(id: number): Observable<Pet> {
    return this.httpClient.get<Pet>(`${this.url}/${env.photosEndpoint}/${id}`);
  }

  deletePet(id: number): Observable<Pet> {
    return this.httpClient.delete<Pet>(
      `${this.url}/${env.photosEndpoint}/${id}`
    );
  }

  like(id: number): Observable<boolean> {
    return this.httpClient
      .post(
        `${this.url}/${env.photosEndpoint}/${id}/${env.likesEndpoint}`,
        {},
        { observe: 'response' }
      )
      .pipe(
        map(() => true),
        catchError((error) => {
          return error.status === NOT_MODIFIED
            ? of(false)
            : throwError(() => error);
        })
      );
  }
}
