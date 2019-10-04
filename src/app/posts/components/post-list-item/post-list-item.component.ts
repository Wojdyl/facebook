import {Component, OnInit, Input, SimpleChanges, Output, EventEmitter, ViewChild} from '@angular/core';
import {IPost} from '../../../shared/interfaces/post.interface';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post = null;
  @Output() deletePost = new EventEmitter();

  constructor() { }

  ngOnChanges(change: SimpleChanges) {
    if ( change.post && change.post.firstChange ) {
      this.post.comments = [];
    }
  }

  getPostUrl() {
    return `/posts/${this.post.id}`;
  }

  getPostAuthorUrl() {
    return this.post.author.avatarUrl;
  }

  ngOnInit() {
  }

  removePost(post: IPost) {
    console.log('deletePost');
    this.deletePost.emit(this.post);
  }

}
