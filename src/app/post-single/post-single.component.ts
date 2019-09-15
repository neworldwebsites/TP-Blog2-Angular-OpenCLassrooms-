import { Component, Input, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-post-single',
  templateUrl: './post-single.component.html',
  styleUrls: ['./post-single.component.scss']
})


export class PostSingleComponent implements OnInit {
  @Input() post: Post;


  constructor(
    private postService: PostService) { }

  ngOnInit() {
  }


  onLoveIt(post: Post) {
    this.postService.likePost(post);
  }

  onDoNotLoveIt(post: Post) {
    this.postService.unlikePost(post);
  }

  onDelete(post: Post) {
    this.postService.removePost(post);
  }


}