import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import uuid from 'uuid';
import faker from 'faker';

@Component({
  selector: 'app-post-add-form',
  templateUrl: './post-add-form.component.html',
  styleUrls: ['./post-add-form.component.scss']
})
export class PostAddFormComponent implements OnInit {

  addPostForm = new FormGroup({
    body: new FormControl('',[
      Validators.required,
    Validators.minLength(2)
    ])
  });

  get body () {
    return this.addPostForm.get('body');
  }

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
    post.images = "http://placeskull.com/50/50/9a2543";
    post.comments = [
      {
        id: 'random',
        body: 'bodybody'
      }
    ];
    this.addPost.emit(post);
    this.addPostForm.reset();

    // console.log('post', post);
  }
}
