import { Component, OnInit, Input } from '@angular/core';
import { IComment } from 'src/app/shared/interfaces/comment.interface';

@Component({
  selector: 'app-comment-list-item',
  templateUrl: './comment-list-item.component.html',
  styleUrls: ['./comment-list-item.component.scss']
})
export class CommentListItemComponent implements OnInit {
  @Input() comment: IComment = null;

  constructor() { }

  ngOnInit() {
  }

  getCommentAuthorAvatarUrl() {
    if (this.comment && this.comment.author) {
      return this.comment.author.avatarUrl;
    } else {
      return 'http://placeskull.com/50/50';
    }
  }

}
