import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../contact'
import { ContactListComponentComponent } from '../contact-list-component/contact-list-component.component';

@Component({
  selector: 'app-groups-component',
  templateUrl: './groups-component.component.html',
  styleUrls: ['./groups-component.component.css']
})
export class GroupsComponentComponent implements OnInit {

  constructor() { }

  public contact: Contact = {
    name: "Ivan",
    surname: "Pupkin",
    age: 47,
    group: "user",
    description: "Like coffee",
    note: ""
  };
  public contact2: Contact = {
    name: "Vasyl",
    surname: "Pupkin",
    age: 42,
    group: "admin",
    description: "Like coffee",
    note: ""
  };
  public contact3: Contact = {
    name: "Bill",
    surname: "Gates",
    age: 57,
    group: "user",
    description: "Like coffee",
    note: ""
  };
  public contact4: Contact = {
    name: "Vania",
    surname: "Ivanov",
    age: 21,
    group: "user",
    description: "Like coffee",
    note: ""
  };

  ngOnInit() {
  }

}
