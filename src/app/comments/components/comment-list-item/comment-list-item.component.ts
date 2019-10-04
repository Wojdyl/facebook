import {Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';
import { IComment } from 'src/app/shared/interfaces/comment.interface';

@Component({
  selector: 'app-comment-list-item',
  templateUrl: './comment-list-item.component.html',
  styleUrls: ['./comment-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentListItemComponent implements OnInit {
  @Input() comment: IComment = null;

  @Output() deleteComment = new EventEmitter();

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

  onRemove() {
    console.log('deleteComment');
    this.deleteComment.emit(this.comment);
  }

}
