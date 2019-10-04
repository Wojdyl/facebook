import {Component, Input, OnInit, ViewChild} from '@angular/core';
import { ICommentList } from 'src/app/shared/interfaces/comment-list.interface';
import {IPost} from '../../../shared/interfaces/post.interface';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnInit {
  @Input() comments: ICommentList = null;
  @ViewChild('dialog', {static: true}) dialog = null;

  constructor() { }

  ngOnInit() {
  }

  addComment(comment) {
    this.comments.push(comment);
  }

  removeCommentWithConfirmation(post: IPost) {
    this.dialog.show();
    this.dialog.__postToRemove = post;
  }

  deleteComment() {
    const comment = this.dialog.__postToRemove;
    const idx = this.comments.indexOf(comment);
    if ( idx !== -1 ) {
      this.comments.splice(idx, 1);
    }
    this.dialog.hide();
  }

}
