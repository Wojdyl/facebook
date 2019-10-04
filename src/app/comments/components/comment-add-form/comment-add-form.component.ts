import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import uuid from 'uuid';
import faker from 'faker';
import {IComment} from '../../../shared/interfaces/comment.interface';
import {IAuthor} from '../../../shared/interfaces/author.interface';

@Component({
  selector: 'app-comment-add-form',
  templateUrl: './comment-add-form.component.html',
  styleUrls: ['./comment-add-form.component.scss']
})
export class CommentAddFormComponent implements OnInit {
  comment = {
    id: null,
    createdTime: null,
    author: {
      id: null,
      name: null,
      avatarUrl: null
    },
    body: null
  } as IComment;

  @Output() addComment = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    const comment = Object.assign({}, this.comment);
    const currentDate = new Date();
    comment.id = uuid.v4();
    comment.createdTime = currentDate.toString();
    comment.author.id = uuid.v4();
    comment.author.avatarUrl = 'http://placeskull.com/50/50/FF0000';
    comment.author.name = faker.name.findName();

    this.addComment.emit(comment);
  }

}
