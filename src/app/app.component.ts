import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title: 'Test123',
      imgUrl: 'assets/img/3.jpg',
      username: 'blla',
      content: 'epashkete'
    },
    {
      title: 'TDimim',
      imgUrl: 'assets/img/3.jpg',
      username: 'sdsdssds',
      content: 'epashkete'
    },

    {
      title: 'Testwdsxsxsx',
      imgUrl: 'assets/img/3.jpg',
      username: 'dwdwdwd',
      content: 'epashkete'
    }

  ];
}
