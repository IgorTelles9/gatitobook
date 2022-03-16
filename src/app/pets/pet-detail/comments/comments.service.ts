import { Comments, Comment } from './comment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from 'src/environments/environment';

const url = `${env.backendHost}:${env.backendPort}`;

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  constructor(private httpClient: HttpClient) {}

  getComments(id: number): Observable<Comments> {
    return this.httpClient.get<Comments>(
      `${url}/${env.photosEndpoint}/${id}/${env.commentsEndpoint}`
    );
  }

  addComment(id: number, text: string): Observable<Comment> {
    return this.httpClient.post<Comment>(
      `${url}/${env.photosEndpoint}/${id}/${env.commentsEndpoint}`,
      { commentText: text }
    );
  }
}
