import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  // Propriétés :
  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postloveIts: number;
  @Input() postcreatedAt: Date;



  constructor() { }

  ngOnInit() {
  }



  // Méthodes :
  getColor() {
    if (this.postloveIts >= 50) {
      return 'darkgreen';
    } else if (this.postloveIts < 50) {
      return 'darkred';
    }
  }

  like() {
    return this.postloveIts += 1;
  }

  unlike() {
    return this.postloveIts -= 1;
  }

}


