import {Component, OnInit, Input, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post = null;
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

}
