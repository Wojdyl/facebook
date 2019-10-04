import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  @Input() posts = null;

  constructor() { }

  ngOnInit() {
  }

  addPost(post) {
    // console.log("addPost", post);
   
    this.posts.unshift(post);
  }

  removePost(post) {
    const idx = this.posts.indexOf(post);
    if ( idx !== -1 ) {
      this.posts.splice(idx, 1);
    }
  }

}
