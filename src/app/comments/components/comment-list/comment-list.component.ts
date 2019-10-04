import { Component, OnInit } from '@angular/core';
import { ICommentList } from 'src/app/shared/interfaces/comment-list.interface';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnInit {
  comments = [
    {
      id: 'random',
      body: 'bodybody'
    },
    {
      id: 'random2',
      body: 'bodybody2'
    }
  ] as ICommentList;

  constructor() { }

  ngOnInit() {
  }

  addComment(comment) {
    console.log('addComent', comment);
    this.comments.push(comment);
  }

}
