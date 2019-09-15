import { Subject } from 'rxjs/Subject';
import { Post } from '../models/post.model';

export class PostService {

  postsSubject = new Subject<any[]>();

  private posts: Array<object> = [
    {
      title: 'mon premier post',
      content: 'blablaqui?',
      loveIt: 5,
      postcreatedAt: new Date()
    },
    {
      title: 'mon deuxieme post',
      content: 'blablaquoi?',
      loveIt: 4,
      postcreatedAt: new Date()
    },
    {
      title: 'un nouveau post',
      content: 'blablacar',
      loveIt: 6,
      postcreatedAt: new Date()
    }
  ];


  emmitPostSubject() {
    this.postsSubject.next(this.posts.slice());
  }

  getColor(post: Post) {
    if (post.loveIt >= 5) {
      return 'darkgreen';
    } else if (post.loveIt < 5) {
      return 'darkred';
    }
  }

  unlikePost(post: Post) {
    post.loveIt--;
  }

  likePost(post: Post) {
    post.loveIt++;
  }

  addPost(post: Post) {
    this.posts.push(post);
  }

  removePost(post: Post) {
    this.posts.splice(this.posts.findIndex(postObj => postObj === post), 1);
    this.emmitPostSubject();
  }

}
