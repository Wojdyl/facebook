import {Component, OnInit, Input, ViewChild} from '@angular/core';
import {IPost} from '../../../shared/interfaces/post.interface';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  @Input() posts = null;
  @ViewChild('dialog', {static: true}) dialog = null;

  constructor() { }

  ngOnInit() {
  }

  addPost(post) {
    // console.log("addPost", post);
   
    this.posts.unshift(post);
  }

  removePostWithConfirmation(post: IPost) {
    this.dialog.show();
    this.dialog.__postToRemove = post;
  }

  removePost() {
    const post = this.dialog.__postToRemove;
    const idx = this.posts.indexOf(post);
    if ( idx !== -1 ) {
      this.posts.splice(idx, 1);
    }
    this.dialog.hide();
  }

}
