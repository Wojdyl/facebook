import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import uuid from 'uuid';
import faker from 'faker';

@Component({
  selector: 'app-post-add-form',
  templateUrl: './post-add-form.component.html',
  styleUrls: ['./post-add-form.component.scss']
})
export class PostAddFormComponent implements OnInit {

  addPostForm = new FormGroup({
    body: new FormControl('ciasteczko'),
  });

  @Output() addPost = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    const post = Object.assign({}, this.addPostForm.getRawValue());
    post.id  =  uuid.v4();
    post.createdTime = new Date().toString();
    post.author = {
      id: uuid.v4(),
      name: faker.name.findName(),
      avatarUrl: "http://placeskull.com/50/50/9a2543",
    };
    post.images = faker.image.imageUrl(400,400,"people");
    post.comments = [
      {
        id: 'random',
        body: 'bodybody'
      }
    ]
    this.addPost.emit(post);
    this.addPostForm.reset();

    // console.log('post', post);
  }
}
