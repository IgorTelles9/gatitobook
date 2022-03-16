import { CommentsService } from './comments.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { switchMap, Observable, tap } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { Comments } from './comment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent implements OnInit {
  @Input() id!: number;

  comment$!: Observable<Comments>;

  commentForm!: FormGroup;
  constructor(
    private commentsService: CommentsService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.comment$ = this.commentsService.getComments(this.id);
    this.commentForm = this.formBuilder.group({
      comment: ['', Validators.maxLength(300)],
    });
  }

  save(): void {
    const commentText = this.commentForm.get('comment')?.value ?? '';
    this.comment$ = this.commentsService.addComment(this.id, commentText).pipe(
      switchMap(() => this.commentsService.getComments(this.id)),
      tap(() => this.commentForm.reset())
    );
  }
}
