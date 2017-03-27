import { Component } from '@angular/core';

export class Contact {
  name: string;
  surname: string;
  age: number;
  group: "user" | "admin";
  description: string;
  note: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app works!';
}
