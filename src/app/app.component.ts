import { Component } from '@angular/core';

import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'openclass-exo-blog';

  posts = [
    {
      title: 'post 1',
      content: 'mon premier post',
      loveIts: 49,
      createdAt: new Date()
    },
    {
      title: 'post 2',
      content: 'mon second post',
      loveIts: 50,
      createdAt: new Date()
    },
    {
      title: 'post 3',
      content: 'mon troisième post',
      loveIts: 51,
      createdAt: new Date()
    }
  ];



  constructor() {
    // Firebase configuration:
    const firebaseConfig = {

    };
  }



}

